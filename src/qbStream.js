var xml = require('xml2object')
var util = require('util')
var stream = require('stream')
var pullStream = require('pull-stream')



var QBQueryStream = function(qbClient, qbQuery) {


  //console.log(qbQuery)
  stream.Readable.call(this,{objectMode : true});

  this.qbClient = qbClient;
  this.qbQuery = qbQuery;

  qbQuery.castToQbQueryObject()

  qbRequest.value.iteratorId = qbQuery.requestGUID;
  qbRequest.value.chunkSize = 50;


  this.qbXMLRequest = qbRequest;
  qbQuery.castToRequestObject(qbClient)

 // console.log(this.requestObject)
//  this.marker = options.start;
  this.connecting = false;
  this.ended  = false;
  this.requestCount = 0;
  this.requestObjectCount = 0;
  this.objectCount = 0;
 // this.batchSize = 50;
}

util.inherits(QBQueryStream, stream.Readable);


QBQueryStream.prototype._read = function () {
  // Limit _read to call only once per response
  if (this.connecting || this.ended) return;

  // var options = {
  //   prefix     : this.options.prefix,
  //   marker     : this.marker,
  //   delimiter  : this.options.delimiter,
  //   'max-keys' : this.options.maxKeys
  // };

  this._fetchObjects();
};



QBQueryStream.prototype._fetchObjects = function (options) {

  var self = this;
  
  self.connecting = true; // ensure that we have only a single connection

  self.requestObjectCount = 0;
  self.requestCount++

  console.log('request count : ' + self.requestCount)

  var _request = self.qbClient.http.post(self.requestObject)

  var qbXMLStream = new xml(['Employee'])
    
  _request.pipe(qbXMLStream.saxStream)

   qbXMLStream.on('object',function(objectName,object){
    
    //
   // console.log(object)
    self.push(object)
    self.emit('data',object)
    self.requestObjectCount++
    self.objectCount++
  })

qbXMLStream.on('err',function(err){

  console.log(err)
})
   qbXMLStream.on('end',function(objectName,object){
    
      console.log(self.requestObjectCount)
      console.log(self.qbXMLRequest.value.chunkSize)
      
      if(self.requestObjectCount < self.qbXMLRequest.value.chunkSize){
        self.ended = true;
        self.emit('end')
        if (self.ended) self.push(null);
       

        console.log('final :' + self.requestObjectCount)
      }
      else{
        self.connecting = false;

        console.log('???')
        self.emit('end')
      }
  })

  // }) 

  //console.log(self.requestObject) 
    //if (err) return self.emit('error', err);

    //var files = data.Contents;

    // if there's still more data, set the start as the last file
   // if (data.IsTruncated) self.marker = files[files.length - 1].Key;
  
    // files.forEach(function (file) { self.push(file); });
   
 
};

module.exports =  function(qbClient,qbQuery){


  var _newStream = new QBQueryStream(qbClient,qbQuery)



  return _newStream;
};

