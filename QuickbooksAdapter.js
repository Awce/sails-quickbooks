/*---------------------------------------------------------------
  :: sails-quickbooks
  -> adapter
---------------------------------------------------------------*/

var async = require('async');
var util = require('util');
var _ = require('lodash');
var request = require('request');

var qbParser = require('./src/qbParser')
//Jsonix = require('jsonix').Jsonix;



module.exports = (function() {


  var schema = require('./src/qbSchema')

 // var context = new Jsonix.Context([com.intuit.sb.cdm.v2],{namespacePrefixes : {'http:\/\/www.intuit.com\/sb\/cdm\/v2' : "com.intuit.sb.cdm.v2"}})

  //qbConnections -  A connection exists if the user has authorized a QuickBooks API app to access (connect to) a specific QuickBooks company.  
  // A connection corresponds to a unique combination of the user, app , and company.  
  //The user is identified by the Intuit App Center user ID, the app by the app token (appToken), and the company by the realmID.  
  //Each active connection has an authorized and valid OAuth access token.

  var connections = {}

  var qbCollections = {}

  var adapter = {

     // Set to true if this adapter supports (or requires) things like data types, validations, keys, etc.
  // If true, the schema for models using this adapter will be automatically synced when the server starts.
  // Not terribly relevant if not using a non-SQL / non-schema-ed data store
  syncable: true,

  // Including a commitLog config enables transactions in this adapter
  // Please note that these are not ACID-compliant transactions: 
  // They guarantee *ISOLATION*, and use a configurable persistent store, so they are *DURABLE* in the face of server crashes.
  // However there is no scheduled task that rebuild state from a mid-step commit log at server start, so they're not CONSISTENT yet.
  // and there is still lots of work to do as far as making them ATOMIC (they're not undoable right now)
  //
  // However, for the immediate future, they do a great job of preventing race conditions, and are
  // better than a naive solution.  They add the most value in findOrCreate() and createEach().
  // 
  // commitLog: {
  //  identity: '__default_mongo_transaction',
  //  adapter: 'sails-mongo'
  // },

  // Default configuration for collections
  // (same effect as if these properties were included at the top level of the model definitions)
  defaults: {

    
   

    //IPP Schema can't be changed...
    migrate: 'safe'
  },

    registerCollection: function(collection, cb) {

      var def = _.clone(collection);
      var key = def.identity;


      //console.log(collection)

      if(qbCollections[key]) return cb();
      qbCollections[key.toString()] = def;

      // Always call describe
      this.describe(key, function(err, schema) {
        if(err) return cb(err);
        cb();
      });

  },


  // The following methods are optional
  ////////////////////////////////////////////////////////////

  // Optional hook fired when a model is unregistered, typically at server halt
  // useful for tearing down remaining open connections, etc.
  teardown: function(cb) {
    cb();
  },


  // REQUIRED method if integrating with a schemaful database
  define: function(collectionName, definition, cb) {


     console.log('define')
    // Define a new "table" or "collection" schema in the data store
    cb();
  },
  // REQUIRED method if integrating with a schemaful database
  describe: function(collectionName, cb) {

   // qbCollection[collectionName] 



    // Respond with the schema (attributes) for a collection or table in the data store
 
    cb(null, {});
  },
  // REQUIRED method if integrating with a schemaful database
  drop: function(collectionName, cb) {
    // Drop a "table" or "collection" schema from the data store
    cb();
  },

  // Optional override of built-in alter logic
  // Can be simulated with describe(), define(), and drop(),
  // but will probably be made much more efficient by an override here
  // alter: function (collectionName, attributes, cb) { 
  // Modify the schema of a table or collection in the data store
  // cb(); 
  // },


  // REQUIRED method if users expect to call Model.create() or any methods
  create: function(collectionName, values, cb) {
    // Create a single new model specified by values

    console.log(values)


    // Respond with error or newly created model instance
    cb(null, values);
  },

  // REQUIRED method if users expect to call Model.find(), Model.findAll() or related methods
  // You're actually supporting find(), findAll(), and other methods here
  // but the core will take care of supporting all the different usages.
  // (e.g. if this is a find(), not a findAll(), it will only send back a single model)
  find: function(collectionName, options, cb) {

 
    var qbCollection = qbCollections[collectionName]

    if(qbCollection){





      var url = 'https://services.intuit.com/sb/' + qbCollection.config[collectionName].qbPath + '/v2/' + qbCollection.config.realm;

      console.log(url)
      
      request.get({url:url, oauth:adapter.config.oauth, headers : {'Content-Type' :'text/xml'}}, function (error, response, body) {
  

        // var unmarshaller = context.createUnmarshaller()


        // console.log(unmarshaller)

        // unmarshaller.unmarshalString(body,function(err,result){

        //   console.log(result)

        // })


        qbParser.parseResponse(qbCollection,response,body,function(err,objects){

          // console.log(err)
          // console.log(objects)

          cb(null,objects)
        })

        })




     
      }
    else{

      cb('collection not found')
    }

    

    // ** Filter by criteria in options to generate result set

    // Respond with an error or a *list* of models in result set
   
  },

  // REQUIRED method if users expect to call Model.update()
  update: function(collectionName, options, values, cb) {

    // ** Filter by criteria in options to generate result set

    // Then update all model(s) in the result set

    // Respond with error or a *list* of models that were updated
    cb();
  },

  // REQUIRED method if users expect to call Model.destroy()
  destroy: function(collectionName, options, cb) {

    // ** Filter by criteria in options to generate result set

    // Destroy all model(s) in the result set

    // Return an error or nothing at all
    cb();
  },



  // REQUIRED method if users expect to call Model.stream()
  stream: function(collectionName, options, stream) {
    // options is a standard criteria/options object (like in find)

    // stream.write() and stream.end() should be called.
    // for an example, check out:
    // https://github.com/balderdashy/sails-dirty/blob/master/DirtyAdapter.js#L247

  },



  /*
  **********************************************
  * Optional overrides
  **********************************************

  // Optional override of built-in batch create logic for increased efficiency
  // otherwise, uses create()
  createEach: function (collectionName, cb) { cb(); },

  // Optional override of built-in findOrCreate logic for increased efficiency
  // otherwise, uses find() and create()
  findOrCreate: function (collectionName, cb) { cb(); },

  // Optional override of built-in batch findOrCreate logic for increased efficiency
  // otherwise, uses findOrCreate()
  findOrCreateEach: function (collectionName, cb) { cb(); }
  */


  getQBObject : function(collectionName){

 
   

    return adapter.qbObjects[collectionName]


  },


  registerQBObject : function(collection,options,cb){


    var qbSource = options.dataSource || 'qbd'
    var apiVersion = options.apiVersion || 'v2'
    

    if(qbSchema[qbSource][apiVersion].models[collection.identity]){

      adapter.collections[collection.identity] = qbSchema[qbSource][apiVersion].models[collection.identity]

     // console.log(adapter.qbObjects)

      cb(null,qbSchema[qbSource][apiVersion].models[collection.identity])
    }
    else{
      cb('model not found')
    }



  }
  /*
  **********************************************
  * Custom methods
  **********************************************

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  // > NOTE:  There are a few gotchas here you should be aware of.
  //
  //    + The collectionName argument is always prepended as the first argument.
  //      This is so you can know which model is requesting the adapter.
  //
  //    + All adapter functions are asynchronous, even the completely custom ones,
  //      and they must always include a callback as the final argument.
  //      The first argument of callbacks is always an error object.
  //      For some core methods, Sails.js will add support for .done()/promise usage.
  //
  //    + 
  //
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  


  // Any other methods you include will be available on your models
  foo: function (collectionName, cb) {
    cb(null,"ok");
  },
  bar: function (collectionName, baz, watson, cb) {
    cb("Failure!");
  }


  // Example success usage:

  Model.foo(function (err, result) {
    if (err) console.error(err);
    else console.log(result);

    // outputs: ok
  })

  // Example error usage:

  Model.bar(235, {test: 'yes'}, function (err, result){
    if (err) console.error(err);
    else console.log(result);

    // outputs: Failure!
  })

  */



  }


  // This method runs when a model is initially registered at server start time
  

 return adapter;
})();


//////////////                 //////////////////////////////////////////
////////////// Private Methods //////////////////////////////////////////
//////////////                 //////////////////////////////////////////