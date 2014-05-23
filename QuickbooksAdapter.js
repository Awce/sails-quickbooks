/*---------------------------------------------------------------
  :: sails-quickbooks
  -> adapter
---------------------------------------------------------------*/

var async = require('async');
var util = require('util');
var Promise = require("bluebird");
//var request = require('request');
var qbSchema = require('./src/qbSchema')
var qbParser = require('./src/qbParser')
var qbStream = require('./src/qbStream')


var request = Promise.promisify(require("request"));

var wlFilter = require('waterline-criteria');

var QBStreamClient = require('./src/qbStreamClient.js')
    var QBLogger = require('./src/qbLog.js')


/**
 * Sails Quickbooks Adapter
 *
 * 
 *
 * 
 * 
 */
module.exports = (function () {


  // You'll want to maintain a reference to each collection
  // (aka model) that gets registered with this adapter.
  var _modelReferences = {};

    function _registerConnection(){}

  
  // You may also want to store additional, private data
  // per-collection (esp. if your data store uses persistent
  // connections).
  //
  // Keep in mind that models can be configured to use different databases
  // within the same app, at the same time.
  // 
  // i.e. if you're writing a MariaDB adapter, you should be aware that one
  // model might be configured as `host="localhost"` and another might be using
  // `host="foo.com"` at the same time.  Same thing goes for user, database, 
  // password, or any other config.
  //
  // You don't have to support this feature right off the bat in your
  // adapter, but it ought to get done eventually.
  // 
  // Sounds annoying to deal with...
  // ...but it's not bad.  In each method, acquire a connection using the config
  // for the current model (looking it up from `_modelReferences`), establish
  // a connection, then tear it down before calling your method's callback.
  // Finally, as an optimization, you might use a db pool for each distinct
  // connection configuration, partioning pools for each separate configuration
  // for your adapter (i.e. worst case scenario is a pool for each model, best case
  // scenario is one single single pool.)  For many databases, any change to 
  // host OR database OR user OR password = separate pool.
  var _dbPools = {};



  var adapter = {

    // Set to true if this adapter supports (or requires) things like data types, validations, keys, etc.
    // If true, the schema for models using this adapter will be automatically synced when the server starts.
    // Not terribly relevant if your data store is not SQL/schemaful.
    syncable: false,

    config : {},
    // Default configuration for collections
    // (same effect as if these properties were included at the top level of the model definitions)
    defaults: {

      // For example:
      // port: 3306,
      // host: 'localhost',
      // schema: true,
      // ssl: false,
      // customThings: ['eh']

      // If setting syncable, you should consider the migrate option, 
      // which allows you to set how the sync will be performed.
      // It can be overridden globally in an app (config/adapters.js)
      // and on a per-model basis.
      // 
      // IMPORTANT:
      // `migrate` is not a production data migration solution!
      // In production, always use `migrate: safe`
      //
      // drop   => Drop schema and data, then recreate it
      // alter  => Drop/add columns as necessary.
      // safe   => Don't change anything (good for production DBs)
      migrate: 'safe'
    },



    /**
     * 
     * This method runs when a model is initially registered
     * at server-start-time.  This is the only required method.
     * 
     * @param  {[type]}   collection [description]
     * @param  {Function} cb         [description]
     * @return {[type]}              [description]
     */
    registerConnection: function(connection, collections,cb) {
      //console.log(collection)
      // Keep a reference to this collection
      _modelReferences[connection.identity] = connection;




      
      cb();
    },


    describe: function(connectionName, table, cb) {
        cb(null,{})
    },
    /**
     * Fired when a model is unregistered, typically when the server
     * is killed. Useful for tearing-down remaining open connections,
     * etc.
     * 
     * @param  {Function} cb [description]
     * @return {[type]}      [description]
     */
    // teardown: function(cb) {
    //   cb();
    // },



    /**
     * 
     * REQUIRED method if integrating with a schemaful
     * (SQL-ish) database.
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   definition     [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    define: function(collectionName, definition, cb) {

       // If you need to access your private data for this collection:
       var collection = _modelReferences[collectionName];

       // Define a new "table" or "collection" schema in the data store
       cb();
    },

    /**
     *
     * REQUIRED method if integrating with a schemaful
     * (SQL-ish) database.
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    // describe: function(collectionName, cb) {

    //   // If you need to access your private data for this collection:
    //   var collection = _modelReferences[collectionName];

    //   // Respond with the schema (attributes) for a collection or table in the data store
      

    

    //   cb(null, {});
    // },


    /**
     *
     *
     * REQUIRED method if integrating with a schemaful
     * (SQL-ish) database.
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   relations      [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    // drop: function(collectionName, relations, cb) {
    //   // If you need to access your private data for this collection:
    //   var collection = _modelReferences[collectionName];

    //   // Drop a "table" or "collection" schema from the data store
    //   cb();
    // },




    // OVERRIDES NOT CURRENTLY FULLY SUPPORTED FOR:
    // 
    // alter: function (collectionName, changes, cb) {},
    // addAttribute: function(collectionName, attrName, attrDef, cb) {},
    // removeAttribute: function(collectionName, attrName, attrDef, cb) {},
    // alterAttribute: function(collectionName, attrName, attrDef, cb) {},
    // addIndex: function(indexName, options, cb) {},
    // removeIndex: function(indexName, options, cb) {},




    stream: function(collectionName, table,options, stream) {

    
    // options is a standard criteria/options object (like in find)

      
    // stream.write() and stream.end() should be called.
    // for an example, check out:
    // https://github.com/balderdashy/sails-dirty/blob/master/DirtyAdapter.js#L247
    // var collection = _modelReferences[collectionName];

    // getQBModel(collectionName,options,function(err,model){

    //   var responseStream = qbRequest(collection,model,options)

    //     responseStream.pipe(qbStream(collection,model)).pipe(stream)

    // })
  
    var collection = _modelReferences[collectionName] 
    
    var client = new QBStreamClient({modelKey : 'TimeActivity', chunkSize : 500})

    client.auth(_intuitConfig)


    client.on('data',function(qbObj){


        stream.write(qbObj)


    })

    client.on('end',function(){

      stream.end()
    })



    
    

  },


    /**
     * 
     * REQUIRED method if users expect to call Model.find(), Model.findOne(),
     * or related.
     * 
     * You should implement this method to respond with an array of instances.
     * Waterline core will take care of supporting all the other different
     * find methods/usages.
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   options        [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    find: function(collectionName, table, options, cb) {

      var collection = qbSchema.qbd.v2.models[table.replace('qb','')];

      var client = new QBStreamClient({modelKey : collection.config.modelKey, chunkSize : 500})

      client.auth(_intuitConfig)


      var _response = []

    client.on('data',function(qbObj){


        _response.push(qbObj)


    })

    client.on('end',function(){

        console.log(_response.length)
     cb(null,_response)
    })

     },


      // findRequest.then(function(data){

      //   console.log(data)
      //    cb(null, []);
      // })


      // Options object is normalized for you:
      // 
      // options.where
      // options.limit
      // options.skip
      // options.sort
      
      // Filter, paginate, and sort records from the datastore.
      // You should end up w/ an array of objects as a result.
      // If no matches were found, this will be an empty array.

      // Respond with an error, or the results.
     
    

    /**
     *
     * REQUIRED method if users expect to call Model.create() or any methods
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   values         [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    // create: function(collectionName, values, cb) {
    //   // If you need to access your private data for this collection:
    //   var collection = _modelReferences[collectionName];

    //   // Create a single new model (specified by `values`)

    //   // Respond with error or the newly-created record.
    //   cb(null, values);
    // },



    // 

    /**
     *
     * 
     * REQUIRED method if users expect to call Model.update()
     *
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   options        [description]
     * @param  {[type]}   values         [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    // update: function(collectionName, options, values, cb) {

    //   // If you need to access your private data for this collection:
    //   var collection = _modelReferences[collectionName];

    //   // 1. Filter, paginate, and sort records from the datastore.
    //   //    You should end up w/ an array of objects as a result.
    //   //    If no matches were found, this will be an empty array.
    //   //    
    //   // 2. Update all result records with `values`.
    //   // 
    //   // (do both in a single query if you can-- it's faster)

    //   // Respond with error or an array of updated records.
    //   cb(null, []);
    // },
 
    /**
     *
     * REQUIRED method if users expect to call Model.destroy()
     * 
     * @param  {[type]}   collectionName [description]
     * @param  {[type]}   options        [description]
     * @param  {Function} cb             [description]
     * @return {[type]}                  [description]
     */
    // destroy: function(collectionName, options, cb) {

    //   // If you need to access your private data for this collection:
    //   var collection = _modelReferences[collectionName];


    //   // 1. Filter, paginate, and sort records from the datastore.
    //   //    You should end up w/ an array of objects as a result.
    //   //    If no matches were found, this will be an empty array.
    //   //    
    //   // 2. Destroy all result records.
    //   // 
    //   // (do both in a single query if you can-- it's faster)

    //   // Return an error, otherwise it's declared a success.
    //   cb();
    // },



    /*
    **********************************************
    * Optional overrides
    **********************************************

    // Optional override of built-in batch create logic for increased efficiency
    // (since most databases include optimizations for pooled queries, at least intra-connection)
    // otherwise, Waterline core uses create()
    createEach: function (collectionName, arrayOfObjects, cb) { cb(); },

    // Optional override of built-in findOrCreate logic for increased efficiency
    // (since most databases include optimizations for pooled queries, at least intra-connection)
    // otherwise, uses find() and create()
    findOrCreate: function (collectionName, arrayOfAttributeNamesWeCareAbout, newAttributesObj, cb) { cb(); },
    */


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
    //      For core CRUD methods, Waterline will add support for .done()/promise usage.
    //
    //    + The function signature for all CUSTOM adapter methods below must be:
    //      `function (collectionName, options, cb) { ... }`
    //
    ////////////////////////////////////////////////////////////////////////////////////////////////////



    // Custom methods defined here will be available on all models
    // which are hooked up to this adapter:
    //
    // e.g.:
    //
    foo: function (collectionName, options, cb) {
      return cb(null,"ok");
    },
    bar: function (collectionName, options, cb) {
      if (!options.jello) return cb("Failure!");
      else return cb();
    }

    // So if you have three models:
    // Tiger, Sparrow, and User
    // 2 of which (Tiger and Sparrow) implement this custom adapter,
    // then you'll be able to access:
    //
    // Tiger.foo(...)
    // Tiger.bar(...)
    // Sparrow.foo(...)
    // Sparrow.bar(...)


    // Example success usage:
    //
    // (notice how the first argument goes away:)
    Tiger.foo({}, function (err, result) {
      if (err) return console.error(err);
      else console.log(result);

      // outputs: ok
    });

    // Example error usage:
    //
    // (notice how the first argument goes away:)
    Sparrow.bar({test: 'yes'}, function (err, result){
      if (err) console.error(err);
      else console.log(result);

      // outputs: Failure!
    })


    

    */

      count : function(){

          '<RecordCountQuery xmlns="http://www.intuit.com/sb/cdm/v2"><{{modelName}}Query xmlns="http://www.intuit.com/sb/cdm/v2"></{{modelName}}Query></RecordCountQuery>'
      }
   };



    function openConnection(){
        return new Promise(function(resolve,reject){

        })
    }


   function firstCharLowerCase(str) {
    
      return str.charAt(0).toLowerCase() + str.slice(1);
    };

   function getQBModel (collection,options,cb){

  

    var qbSource = options.dataSource || 'qbd'
    var apiVersion = options.apiVersion || 'v2'


    if(qbSchema[qbSource][apiVersion].models[collection.config.qbObjectKey.toLowerCase()]){



      cb(null,qbSchema[qbSource][apiVersion].models[collection.config.qbObjectKey.toLowerCase()])
    }
    else{
      cb('model not found')
    }



  }




  function qbRequest(collection,model,options,cb){
   // console.log(collection)
   
      var url = 'https://services.intuit.com/sb/' + options.path || collection.config.qbObjectKey.toLowerCase() + '/v2/' + options.where.intuit.realm;

      var oauthSig =  { 
        consumer_key: collection.config.consumer_key
      , consumer_secret: collection.config.consumer_secret
      , token: options.where.intuit.token
      , token_secret: options.where.intuit.verifier
    }

    //  console.log(oauthSig)
      
      if(cb){
        request.get({url:url, oauth:oauthSig, headers : {'Content-Type' :'text/xml'}},cb)
      }
      else{
        return request.get({url:url, oauth:oauthSig, headers : {'Content-Type' :'text/xml'}})
      }

     




     
      }
    



  // Expose adapter definition
  return adapter;

})();


//////////////                 //////////////////////////////////////////
////////////// Private Methods //////////////////////////////////////////
//////////////                 //////////////////////////////////////////