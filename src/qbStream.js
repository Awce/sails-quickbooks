
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