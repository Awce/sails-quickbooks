/*---------------------------------------------------------------
  :: sails-quickbooks
  -> adapter
---------------------------------------------------------------*/

var async = require('async');
var util = require('util');
var request = require('request');
var qbSchema = require('./src/qbSchema')
var qbParser = require('./src/qbParser')


var request = Promise.promisify(require("request"));
=======
var fs = require('fs');
var path = require('path')
var _ = require('lodash');
var __request = require('request')
var xml2object = require('xml2object');
var stream = require('stream')
var zlib = require('zlib')

var qbParser = require('./src/qbParser')
var qbSchema = require('./src/qbSchema')
var qbXML = require('./src/qbXML.js')
var qbQuery = require('./src/qbQuery')
var qbStream = require('./src/qbStream2')
 

module.exports = (function() {

  //qbConnections -  A connection exists if the user has authorized a QuickBooks API app to access (connect to) a specific QuickBooks company.  
  // A connection corresponds to a unique combination of the user, app , and company.  
  //The user is identified by the Intuit App Center user ID, the app by the app token (appToken), and the company by the realmID.  
  //Each active connection has an authorized and valid OAuth access token.

  var connections = {}

  var qbCollections = {}

   var adapter = {

  intuitSchema : new qbSchema(),

  identity : 'sails-quickbooks',
     // Set to true if this adapter supports (or requires) things like data types, validations, keys, etc.
  // If true, the schema for models using this adapter will be automatically synced when the server starts.
  // Not terribly relevant if not using a non-SQL / non-schema-ed data store
  syncable: true,

  schema : true,
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

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
        console.log(definition)

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
      

   // schema : true,
    
<<<<<<< HEAD

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


=======
   
    //IPP Schema can't be changed...
   // migrate: 'safe'
  },
  
    registerCollection: function(collection, cb) {
      // console.log('register')
      console.log(collection)
      var def = _.clone(collection);
      var key = def.identity;
    //    console.log(key)
    //  console.log(def)

    //console.log(qbSchema)

      if(qbCollections[key]) return cb();


     qbCollections[key.toString()] = collection;

      // Always call describe
      this.describe(key, function(err, schema) {
        if(err) return cb(err);
        cb();
      });

  },
>>>>>>> 1827df92267866a39b36ac7430772974258d23df


    // OVERRIDES NOT CURRENTLY FULLY SUPPORTED FOR:
    // 
    // alter: function (collectionName, changes, cb) {},
    // addAttribute: function(collectionName, attrName, attrDef, cb) {},
    // removeAttribute: function(collectionName, attrName, attrDef, cb) {},
    // alterAttribute: function(collectionName, attrName, attrDef, cb) {},
    // addIndex: function(indexName, options, cb) {},
    // removeIndex: function(indexName, options, cb) {},




<<<<<<< HEAD
    stream: function(collectionName, table,options, stream) {

    
    // options is a standard criteria/options object (like in find)

      
    // stream.write() and stream.end() should be called.
    // for an example, check out:
    // https://github.com/balderdashy/sails-dirty/blob/master/DirtyAdapter.js#L247
    // var collection = _modelReferences[collectionName];
=======
    //console.log(definition)

  
    // Define a new "table" or "collection" schema in the data store
    cb();
  },
  // REQUIRED method if integrating with a schemaful database
  describe: function(collectionName, cb) {
    
      // Respond with the schema (attributes) for a collection or table in the data store


    //  console.log(qbSchema)
    

    adapter.intuitSchema.describe(collectionName,cb)
   
  // cb(null,{})
  },
  // REQUIRED method if integrating with a schemaful database
  drop: function(collectionName, cb) {
    // Drop a "table" or "collection" schema from the data store
    cb();
  },

  // Optional override of built-in alter logic
  // Can be simulated with describe(), define(), and drop(),
  // but will probably be made much more efficient by an override here
  //  alter: function (collectionName, attributes, cb) { 
  // // Modify the schema of a table or collection in the data store
  //  cb(); 
  //  },
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

    // getQBModel(collectionName,options,function(err,model){

    //   var responseStream = qbRequest(collection,model,options)

<<<<<<< HEAD
    //     responseStream.pipe(qbStream(collection,model)).pipe(stream)

    // })
  
    var collection = _modelReferences[collectionName] 
    
    var client = new QBStreamClient({modelKey : 'TimeActivity', chunkSize : 500})
=======
    //console.log(values)


    // Respond with error or newly created model instance
    cb(null, values);
  },


  sync : function(collectionNamecb){},





  // REQUIRED method if users expect to call Model.find(), Model.findAll() or related methods
  // You're actually supporting find(), findAll(), and other methods here
  // but the core will take care of supporting all the different usages.
  // (e.g. if this is a find(), not a findAll(), it will only send back a single model)
  find: function(collectionName, options, cb) {
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

    client.auth(_intuitConfig)


    client.on('data',function(qbObj){

   
     spawnQBClient(function __QBFIND__(client,cb){

        stream.write(qbObj)

      var query = new qbQuery(adapter.intuitSchema,qbCollections[collectionName],options)

<<<<<<< HEAD
    })

    client.on('end',function(){

      stream.end()
    })



    
    

  },

=======

      var _responseObjects = []
      var _foundObjectsInStream = false;
      var _responseObjectChunkCount = 0;
      var _responseObjectCount = 0;
      var xmlStreamer = new xml2object([query.collectionName]);
      var qbObjectTransformer = new qbStream(query)


    //  console.log(xmlStream)
    //  
    //  

      qbObjectTransformer.on('data',function(qbObj){

       // console.log('qbstream data ev')
        //console.log(qbObj)

        _responseObjects.push(qbObj)

       // callback(null,_responseObjects)

      })

      qbObjectTransformer.on('end',function(){

        console.log('qbend')
        console.log(_responseObjectChunkCount)  
        cb(null,_responseObjects)
      })

      xmlStreamer.on('object',function(objectKey,rawObject){

         // console.log(rawObject)
         
         // 
         // 
          
          _foundObjectsInStream = true;
          _responseObjectChunkCount++
          _responseObjectCount++

           qbObjectTransformer.write(rawObject)

      })

      xmlStreamer.on('error',function(err){
        cb(err)
      })

      xmlStreamer.on('end',function(){

        //cb(null,[])
        if(_foundObjectsInStream){

          if(_responseObjectChunkCount < query.chunkSize){
            console.log('less than')
            qbObjectTransformer.write(null)
            qbObjectTransformer.emit('end')

            //xmlStreamer.emit('end')
             //cb(null,_responseObjects)
          }
          else{

            _foundObjectsInStream = false;
            _responseObjectChunkCount = 0
         client.http.post(query.qbHttpRequestObject).pipe(zlib.createGunzip()).pipe(xmlStreamer.saxStream)

          }
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

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

<<<<<<< HEAD
      var client = new QBStreamClient({modelKey : collection.config.modelKey, chunkSize : 500})

      client.auth(_intuitConfig)


      var _response = []

    client.on('data',function(qbObj){


        _response.push(qbObj)

=======
          //console.log('found objects')

          
                      
        }
        else{
          //cb(null,_responseObjects)
         qbObjectTransformer.write(null)

           // xmlStreamer.emit('end')
        }
      })

      
      // })
      // // var requestStream = 

      // var i = 10
      // var randomReadable = pull.Source(function () {
      //   return function (end, cb) {
      //     if(end) return cb(end)
      //     //only read 10 times
      //     if(i-- < 0) return cb(true)

      //       setTimeout(function(){
      //         console.log('tick')
      //          cb(null, Math.random())
      //        }, 100);;
         
      //   }
      // })


      query.castToQbQueryObject()
      query.castToHttpRequest(client)
     // console.log(options)

     // console.log(query.qbHttpRequestObject)

      client.http.post(query.qbHttpRequestObject).pipe(zlib.createGunzip()).pipe(xmlStreamer.saxStream)

     // xmlStreamer.source = _query;

      //xmlStreamer.start()



     
        

      



     


     // pull(randomReadable(), createThroughStream(), pull.collect(cb))

   //    _responseObjects = []

   //    var query = new qbQuery(adapter.intuitSchema.context,qbCollections[collectionName],options)
   // //   var logger = new qbQuery.qbLogger()

   //    var _stream = new qbStream(client,query)
   //    var _logger = new QBLogger()


   //    _stream.on('data',function(_record){


   //      _responseObjects.push(_record)
   //    })

   //    _stream.on('end',function(){


   //       cb(null,_responseObjects)

   //    })
      //console.log(cb)

      //query.find(client,cb)
      //
      //
      //
        
     // _stream.pipe(_logger)



      },
      qbCollections[collectionName],cb);
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

//     var qbCollection = qbCollections[collectionName]

//     if(qbCollection){

//     //  console.log(qbCollection)



//       var url = 'https://services.intuit.com/sb/' + qbCollection.identity.toLowerCase() + '/v2/' + qbCollection.config.realm;

//      // console.log(url)

//       var request = require('request');

// // Create a new xml parser with an array of xml elements to look for
//       var parser = new xml2object([ qbCollection.identity ]);

// // Bind to the object event to work with the objects found in the XML file
//     parser.on('object', function(name, obj) {
//       console.log('Found an object: %s', name);
//       console.log(obj);
  
//     });

//     // Bind to the file end event to tell when the file is done being streamed
//   parser.on('end', function() {
//       console.log('Finished parsing xml!');
//       cb(null,[])
// }
//   );

// // Pipe a request into the parser

//     request.get({url:url, oauth:adapter.config.oauth, }).pipe(parser.saxStream);
     

     
//       }
//     else{

//       cb('collection not found')
//     }

    

    client.on('end',function(){

<<<<<<< HEAD
        console.log(_response.length)
     cb(null,_response)
    })
=======
    // Respond with an error or a *list* of models in result set
   
   /**
    * spawnConnection(function __FIND__(client, cb) {

        // Check if this is an aggregate query and that there is something to return
        if(options.groupBy || options.sum || options.average || options.min || options.max) {
          if(!options.sum && !options.average && !options.min && !options.max) {
            return cb(new Error('Cannot groupBy without a calculation'));
          }
        }

        // Build Query
        var _schema = dbs[table].schema;
        var queryObj = new Query(_schema, dbs);
        var query = queryObj.find(table, options);

        // Run Query
        client.query(query.query, query.values, function __FIND__(err, result) {
          if(err) return cb(err);

          // Cast special values
          var values = [];

          result.rows.forEach(function(row) {
            values.push(queryObj.cast(row));
          });

          // If a join was used the values should be grouped to normalize the
          // result into objects
          var _values = options.joins ? utils.group(values) : values;

          cb(null, _values);
        });

      }, dbs[table].config, cb);
    */
  },
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

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

<<<<<<< HEAD
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

=======
  // 
  /*
  **********************************************
  * Custom methods
  **********************************************
>>>>>>> 1827df92267866a39b36ac7430772974258d23df



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

<<<<<<< HEAD
=======

  }


  /*************************************************************************/
  /* Private Methods
  /*************************************************************************/

  // Wrap a function in the logic necessary to provision a connection
  // (grab from the pool or create a client)
  function spawnQBClient(logic, config, cb) {

    //console.log(config)
    var _qbConnection = {
      app_token : config.config.appToken,
      oauth :{
        consumer_key : config.config.consumer_key,
        consumer_secret : config.config.consumer_secret
      }
    }


    if(config.config['__devRealm']){

      _qbConnection.oauth.token = config.config.qbConnections[config.config.__devRealm].token
      _qbConnection.oauth.token_secret = config.config.qbConnections[config.config.__devRealm].token_secret
      _qbConnection.realm = config.config.__devRealm



      connectToIntuit(_qbConnection,function(err,client,done){

        after(err, client, done);

      })

      

    }
    else{

      //todo : hookup storage
      after('no identity info');
    }


    function connectToIntuit(_connection,cb){

      

        cb(null,{http :__request,connection : _connection},function(){
          console.log('done?')
        })


    }


    // var dbConfig = {
    //   database: config.database,
    //   host: config.host,
    //   user: config.user,
    //   password: config.password,
    //   port: config.port
    // };

    // // Grab a client instance from the client pool
    // pg.connect(dbConfig, function(err, client, done) {
    //   
    // });

    // Run logic using connection, then release/close it
    function after(err, client, done) {
      if(err) {
        console.error("Error creating a connection to Quickbooks: " + err);

        // be sure to release connection
        done();

        return cb(err);
      }

      logic(client, function(err, result) {

        // release client connection
        done();

        return cb(err, result);
      });
    }
  }

  


  //function get()


  // This method runs when a model is initially registered at server start time
 



 return adapter;
})();

>>>>>>> 1827df92267866a39b36ac7430772974258d23df

//////////////                 //////////////////////////////////////////
////////////// Private Methods //////////////////////////////////////////
//////////////                 //////////////////////////////////////////