<<<<<<< HEAD

// qbstream - transform RSS or Atom XML to JSON

var sax = require('sax')
  , Transform = require('stream').Transform
  , attribute = require('./qbFilters')
  , StringDecoder = require('string_decoder').StringDecoder
  , qbSchema = require('./qbSchema')



var mappings = {

 //   "Id" : 'id',


      // qbModelObject.id = rawObject.Id._
      // qbModelObject.domain = rawObject.Id.idDomain;
      // qbModelObject.createdAt = rawObject.MetaData.CreateTime;
      // qbModelObject.updatedAt = rawObject.MetaData.LastUpdatedTime;
      // qbModelObject.syncToken = rawObject.SyncToken;
      // qbModelObject.externalKey = rawObject.Id._
      // qbModelObject.externalDomain = rawObject.Id.idDomain;
      // qbModelObject.isDraft = rawObject.Draft == 'true';
      // qbModelObject.isSynchronized = rawObject.Synchronized == 'true';
      // qbModelObject.objectState = rawObject.ObjectState;}
}



module.exports = function (collection,model) {

  console.log(model)
  console.log(collection)
  var opts = new Opts(true, true, false)
    , parser = sax.parser(true, opts)
    , stream = new Transform({objectMode : true})
    , decoder = new StringDecoder('utf8')
    , state = new State(false, false, false, false)
    , name = null
    , map = null
    , current = null

  stream._transform = function (chunk, enc, cb) {
    try {
      parser.write(decoder.write(chunk))
    } catch (er) {
      stream.emit('error', er)
    } finally {
      cb()
    }
  }

  parser.onerror = function (er) {
    stream.emit('error', er)
    stream.push(null)
  }

  parser.ontext = function (t) {
    console.log(t)
    // if (!current || !map) return

    // var key = map[name] || name

    // if (state.image && name === 'url') {
    //   key = 'image'
    // }

    // if (key) {
    //   var prop = current[key]
    //     , add = isString(prop) && isString(t) && t !== prop

    //   if (prop && add) {
    //     current[key] += t
    //   } else {
    //     current[key] = t
    //   }
    // }
  }

  parser.oncdata = function (d) {
    console.log(d)
    parser.ontext(d)
  }

  parser.onopentag = function (node) {
    name = node.name

    console.log(name)
    // map = mappings[name] || map
    // if (name in openHandlers) openHandlers[name]()

    // if (current) {

    // //  console.log(map)
    //   var attributes = node.attributes

    //   console.log(attributes)
    //     , key = map[name] || name
    //     , keys = Object.keys(attributes)

    //   if (key) {

    //     if (keys.length) {
    //      // console.log(keys)
    //       var kv = attribute(key, attributes)
    //       current[kv[0]] = kv[1]
    //     }
    //   }
    // }
  }

  parser.onclosetag = function (name) {
    console.log(name)
    // if (name in closeHandlers) closeHandlers[name]()
    // name = null
  }

  function responseOpen () {

    console.log('response open!')
    //stream.push('{"response":')
    current = Object.create(null)
    state.response = true
  }



  function recordopen () {
    if (!state.collection) {
      //stream.push(JSON.stringify(current) + ',"collection":[')
      //stream.emit('response', current)
    } else {
      //stream.push(',')
    }

    state.response = false
    state.collection = true
    state.record = true
    current = new Record()
  }

  function collectionopen () {
    state.collection = true
  }

  var openHandlers = {
    'RestResponse':responseOpen
  //, 'response':responseOpen
 // , 'record':recordopen
 // , 'record':recordopen
 // , 'image':imageopen
  }

  openHandlers[model.config.modelKey] = recordopen
  openHandlers[model.config.collectionKey] = collectionopen

  function recordclose () {
    state.record = false
    stream.push(current)
    stream.emit('object', current)
    current = null
  }

  function responseClose () {
    // if (state.collection) {
    //   stream.push(']}')
    // } else {
    //   stream.push(JSON.stringify(current) + '}')
    // }
    console.log('response close!')
    state.reset()
    current = null
  }

  function collectionclose () {
    state.collection = false
  }

  var closeHandlers = {
  //  'item':recordclose
//  , 'record':recordclose
//  , 'channel':responseClose
   'RestResponse':responseClose
 // , 'image':imageclose
  }
closeHandlers[model.config.modelKey] = recordclose
closeHandlers[model.config.collectionKey] = collectionclose
  return stream
}

function isString(obj) {
  return typeof obj === 'string'
}

function Opts (trim, normalize, position) {
  this.trim = trim
  this.normalize = normalize
  this.position = position
}

function Record (
              id
             ) {


  this.id = id
  
}

function State (response, collection, record, rel) {
  this.response = response
  this.collection = collection
  this.record = record
  this.rel = rel
}

State.prototype.reset = function () {
  this.response = false
  this.collection = false
  this.record = false
  this.rel = false
}

var attrs = function (key, attributes) {
  var value = attributes
    , handler = handlers[key]

  return handler ? handler(key, attributes) : [key, value]
}

var handlers = {
  'link':link
, 'image':image
}

function link (key, attributes) {
  var rel = attributes.rel
    , value = null

  if (rel === 'payment') {
    key = rel
  }

  if (rel === 'enclosure') {
    key = rel
    value = attributes
    delete value.rel
  } else {
    value = attributes.href
  }

  return [key, value]
}

function image (key, attributes) {
  return [key, attributes.href]
}
=======
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

>>>>>>> 1827df92267866a39b36ac7430772974258d23df
