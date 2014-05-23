
var stream = require('stream')
    , util   = require('util')
    , request = require('request')
    , xmlstream = require('xml-stream')
    , qbRequest = require('./qbRequest')
    , qbSchema = require('./qbSchema')
    , async = require('async')


var qbRecord = require('./qbRecord')

/**
 * Create a new qbStreamClient
 * @param {Object} s3  a knox-like client
 * @param {Object} options
 *   @field {Boolean} start  key to start with
 */
function QBStream (query,options) {

    options || (options = {});
    options.objectMode = true;

    this.count = 0
    this.recordCount = 0;
    this.requests = 0
    this.query = query
    this.request = new qbRequest(this.query)
    this.foundModel = false;



    stream.Readable.call(this, options);

    //this.s3         = s3;

    this.marker     = options.start;
    this.foundRecords = false
    this.options    = options;
    this.connecting = false;
}
util.inherits(QBStream, stream.Readable);


/**
 * Readable stream method
 */
QBStream.prototype._read = function () {

    if (this.connecting || this.ended) return;

    if(this.requests > 2) return;

    var options = {
        prefix     : this.options.prefix,
        marker     : this.marker,
        delimiter  : this.options.delimiter,
        'max-keys' : this.options.maxKeys
    };

    this._list(options);
};


/**
 * Request S3 for the list of files matching the prefix.
 * @param  {Object} options
 *   @field {String} prefix    - prefix to match on       (optional)
 *   @field {String} marker    - the last matched file    (optional)
 *   @field {String} delimiter - delimiter to split files (optional)
 *   @field {Number} maxKeys   - max number of keys to return (optional, 1000)
 */
QBStream.prototype._list = function (options) {

    var requestRecordCount = 0;
    var self = this;

    self.connecting = true;
    self.foundModel = false;

    self.requests++;

    var requestStream = request.post(self.request.request(self.auth))


    var xml = new xmlstream(requestStream);

    xml.collect('CustomField');
    xml.collect('Phone');
    xml.collect('Email');
    xml.collect('Address');

    xml.on('text: Id',transformId);
    xml.on('text: ExternalKey',transformId);
    xml.on('text: EmployeeId',transformId);
    xml.on('text: CustomerId',transformId);
    xml.on('text: ItemId',transformId);
    xml.on('text: PayItemId',transformId);
    xml.on('text: JobId',transformId);
    xml.on('text: AccountId',transformId);
    xml.on('text: PartyReferenceId',transformId);

    xml.on('updateElement: CustomField',transformCustomField)

    xml.on('start',function(){

        console.log('start')
    })



    xml.on('endElement: ' + self.request.modelKey, function(qbObject) {
        self.requests--;
        requestRecordCount++
        self.recordCount++
        self.emit('data',qbObject)
        self.push(qbObject);


//    async.reduce(qbObject.CustomField || [],qbObject,function(qbObject,field,cb){
//
//
//      var key = Object.keys(field)[0]
//
//      qbObject[key] = field[key]
//
//      cb(null,qbObject)
//
//    },function(err,_qbObject){
//
//      delete _qbObject.CustomField
//      self.emit('data',_qbObject)
//      self.push(_qbObject)
//    })


    });

    xml.on('end',function(){

        console.log(self.recordCount);
        console.log(requestRecordCount);


        self.connecting = false;

        if(requestRecordCount < 1 || requestRecordCount < self.request.chunkSize){
            self.push(null);
        }
        else{
            self._read();
        }




    })

    function transformId(Id){

        var domain = Id.$.idDomain
        Id.$text = Id.$text + ':' + domain;
        delete Id.$.idDomain

    }

    function transformCustomField(field){

        var value = field.Value;
        var key = field.Name.split('.').pop();



        delete field.Name
        delete field.Value
        delete field.DefinitionId
        delete field.$
        delete field.$name

        field[key] = value
    }

//  function()

    // var _xparser = xmlstream.parse(requestStream)
    // console.log(Object.keys(_xparser))
    // //_xparser.collect('CustomField')
    // _xparser.each('Error',function(error){

    //  // this.ended = true;

    //   self.push(null)

    // })


    // _xparser.each(self.request.modelKey,function(modelData){

    //   self.foundModel = true;
    //   self.connecting = false;
    //   //console.log(modelData)
    //   qbRecord.create(modelData,function(err,model){

    //   self.push(model)

    // })




    // })

    // _xparser.on('end',function(){

    //   self.count--
    //  self.connecting = false;
    //   console.log(self.count)
    //   if(self.foundModel){


    //     self._read()

    //   }

    //   else{

    //     if(!self.ended){

    //       self._read(0)
    //       self.ended = true;
    //     }

    //      if(self.count == 0 && self.ended){

    //       self.push(null)
    //     }

    //   }




    // })




    // this.s3.list(options, function (err, data) {
    //   self.connecting = false;
    //   if (err) return self.emit('error', err);

    //   var files = data.Contents;

    //   // if there's still more data, set the start as the last file
    //   if (data.IsTruncated) self.marker = files[files.length - 1].Key;
    //   else self.ended = true;

    //   files.forEach(function (file) { self.push(file); });
    //   if (self.ended) self.push(null);
    // });
};

QBStream.prototype.auth = function(intuitAuth){

    this.auth = intuitAuth



}



module.exports = QBStream;

