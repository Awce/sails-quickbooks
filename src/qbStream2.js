// module.exports = (function () {
//   "use strict";

//   var expat = require('node-expat')
//     , parser
//     ;

//   parser = new expat.Parser("UTF-8");
//   parser.on('startElement', function (name, attrs) {
//     console.log(name, attrs);
//   });
//   parser.on('endElement', function (name) {
//     console.log(name);
//   });
//   parser.on('text', function (text) {
//    // console.log(text);
//   });
//   parser.on('error', function (err) {
//    // console.error(err); 
//   });
 
//  return parser
// }());


var xml = require('xml2object')
   , Transform = require('stream').Transform
   , zlib = require('zlib');
    //mappings = require('./qbXML').intuit.sb.cdm.v2

   //, attribute = require('./lib/attribute')

  
 module.exports = function (query) {


 var _qbCollection = query.schema.Collections[query.collectionName]
 var _collection = query.collection;

 //console.log(_collection)

//var xmlstream = new xml(['Employee'])

 // console.log(xmlstream)
 // console.log(query.collection.definition)
  //var opt = { trim:true, normalize:true, position:false }
  //parser = sax.parser(true, opt)
     stream = new Transform({objectMode : true})


   // , state = new State(false, false, false, false)
    , name = null
    , map = null,
    __object = {};

  
    var _buffer = []



  stream._transform = function (qbRawObject, encoding, callback) {
    
    

    if(!qbRawObject){
      //stream.write(null)
      callback()
    }
    else{
    //  console.log('transform!')
  
   // qbRawObject.TypeOf = 'ABS'

    var qbRecord = {}

   // blah.Id = qbRawObject.Id.id

      async.forEach(Object.keys(qbRawObject),function(key,done){

      var _schemaAttr = _qbCollection.attributes[key]
      var _collectionDef = _collection.definition[key]

     // console.log(key)



      if(_collectionDef){
       // console.log(_collectionDef)
       // console.log(qbRawObject[key])
        if(_schemaAttr && _schemaAttr.type == 'IdType' || _collectionDef.primaryKey || _collectionDef.foreignKey){

        //  console.log(qbRawObject[key])

          var _idObj = qbRawObject[key]


          qbRecord[key] = _idObj.idDomain + ':' + _idObj['$t']
          done()
        }

     

        else{

          console.log(qbRawObject[key])
          qbRecord[key] = qbRawObject[key]
          done()
        }

        
      }
      else if(key == 'CustomField'){

        var _customFieldValues = qbRawObject[key]

        async.reduce(_customFieldValues,qbRecord,function(_rec,customValue,done){

          var _customFieldName = customValue.Name.split('.').pop()
          var _customFieldValue = customValue.Value

          _rec[_customFieldName] = _customFieldValue

          done(null,_rec)

        },function(err,_record){

          done()
        })


          
        }
      else{

        done()

      }

      

    },function(err){

      stream.push(qbRecord)

       callback()



    })

      
    //   //stream.push(qbRawObject)
   //    stream.emit('qbObject',qbRawObject)

      


    // })
    }


    





   
    
  }

  

  
  return stream
  

}

 // parser.ontext = function (t) {
   
   // console.log(t)

   // if(state.simpleType){
  //    console.log('simple')
    //  __object[state.simpleType] = t
  //  }
  //  else if(state.complexType){

     // __object[state.complexType][state.simpleType] = t;
  //  }
   // console.log('text: ' + t)
    //console.log(t)
    // if (!current || !map) return

    // var key = map[name]

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
 // }

  // parser.oncdata = function (d) {
  //   //parser.ontext(d)
  // }

  // parser.onopentag = function (node) {

  //  // console.log(node)
  //    name = node.name
  //   // console.log(name)
  //   // console.log('open: ' + name)
     
  //   if(name == query.collectionName){



  //     __object = {}
  //     __object.__type = name;
  //     state.responseObject = true;
  //     //console.log(__object)
  //   }else{

  //     if(query.collection.definition[name]){
  //       console.log(query.collection.definition[name])

  //       __object[name] = ''

  //     }
      


  //   }



     // if (current) {
     //   var attributes = node.attributes
     //     , key = map[name]
     //     , keys = Object.keys(attributes)

     //   if (key) {
     //     if (keys.length) {
     //       var kv = attribute(key, attributes)
     //       current[kv[0]] = kv[1]
     //     }
     //   }
     // }
  //}

//   parser.onclosetag = function (name) {

//     if(name == query.collectionName){
//       responseObjectClose(name)
//     }
//     if(name == 'RestResponse'){

//       restResponseClose()

//     }

   

//   //  console.log('close: ' + name)
//    // if (name in closeHandlers) closeHandlers[name]()
//      name = null
//   }

//   function ResponseObject(name){

//     this.__TYPE_NAME = name;


//     return this;

//   }



//   function restResponseOpen(){

//     console.log('open response')
//     //stream.push('[')
//     // current = Object.create(null)
//     // state.restResponse = true

//    // console.log(_buffer)
//   }

//   function collectionOpen(collectionName){

//     console.log('new collection')


//   }

//   function collectionClose(collectionName){

//     console.log('new collection')
//   }


//   function createResponseObject(name){

//     console.log('new ' + name)
//     //  if (!state.responseObject) {
//     //   stream.push(current)
//     //   stream.emit(name,current)
//     // } else {
//     //   //stream.push(',')
//     // }
    

   
//  //   __object = new Object({__identity : name})


//   }
//   function responseObjectClose(name){

//     state.responseObject = false;
//     state.simpleType = false;
//     state.complexType = false;
//     //console.log(__object)
//     console.log('close ' + name)
//      _buffer.push(__object)
//     __object = null
   
//    // stream.emit(name,__object)
//   //  __object = null


//   }

  

//   // function feedopen () {
//   //   stream.push('{"feed":')
//   //   current = Object.create(null)
//   //   state.feed = true
//   // }

//   // function entryopen () {
//   //   if (!state.entries) {
//   //     stream.push(JSON.stringify(current) + ',"entries":[')
//   //     stream.emit(current)
//   //   } else {
//   //     stream.push(',')
//   //   }
//   //   state.feed = false
//   //   state.entries = true
//   //   state.entry = true
//   //   current = new Entry()
//   // }

//   // function imageopen () {
//   //   state.image = true
//   // }

//   // var openHandlers = {
//   //   'RestResponse':restResponseOpen
//   // //, 'feed':feedopen
//   // , 'item':entryopen
//   // , 'entry':entryopen
//   // , 'image':imageopen
//   // }

//   // function entryclose () {
//   //   state.entry = false
//   //   stream.push(JSON.stringify(current))
//   //   stream.emit('entry', current)
//   //   current = null
//   // }

//   function restResponseClose(){

//      console.log('close response')
//     // stream.push(__object)
//     //state.reset()
//     //__object = null
//     console.log(_buffer)

//   }

//   // function feedclose () {
//   //   if (state.entries) {
//   //     stream.push(']}')
//   //   } else {
//   //     stream.push(JSON.stringify(current) + '}')
//   //   }
//   //   state.reset()
//   //   current = null
//   // }

//   // function imageclose () {
//   //   state.image = false
//   // }

//   // var closeHandlers = {
//   //    'RestResponse':restResponseClose
//   // , 'item':entryclose
//   // , 'entry':entryclose
//   // , 'channel':feedclose
//   // , 'image':imageclose
//   // }

//   return stream
// }

// function isString(obj) {
//   return typeof obj === 'string'
// }





// // function Entry (author
// //               , enclosure
// //               , duration
// //               , id
// //               , link
// //               , subtitle
// //               , summary
// //               , title
// //               , updated) {

// //   this.author = author
// //   this.enclosure = enclosure
// //   this.duration = duration
// //   this.id = id
// //   this.link = link
// //   this.subtitle = subtitle
// //   this.summary = summary
// //   this.title = title
// //   this.updated = updated
// // }

// function State (restResponse, responseObject, simpleType, collection) {
//   this.restResponse = restResponse
//   this.responseObject = responseObject
//   this.simpleType = simpleType
//   this.complexType = collection
// }

// State.prototype.reset = function () {
//    this.restResponse = false;
//   this.responseObject = false;
//   this.attribute = false;
//   this.collection = false;
// }