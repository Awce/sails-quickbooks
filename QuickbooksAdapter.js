/*---------------------------------------------------------------
  :: sails-quickbooks
  -> adapter
---------------------------------------------------------------*/

var async = require('async');
var util = require('util');
var _ = require('lodash');
var request = require('request');
var xml2object = require('xml2object');

var qbParser = require('./src/qbParser')
var qbV2Schema = require('./lib/v2/common/IntuitV2.js')
var qbSchema = require('./src/qbSchema')
//Jsonix = require('jsonix').Jsonix;



module.exports = (function() {

   
var QBSchema = {}

qbSchema(qbV2Schema,function(err,schema){
    
  QBSchema = schema;
  });

  

  

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

  schema : true,

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

    schema : true,
   

    //IPP Schema can't be changed...
    migrate: 'safe'
  },

    registerCollection: function(collection, cb) {

      var def = _.clone(collection);
      var key = def.identity;


      console.log('register')

      if(qbCollections[key]) return cb();


      qbCollections[key.toString()] = _.merge(def,QBSchema.qbObjects[key.toString()]);

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
   // console.log(qbSchema)

    console.log('describe')



    // Respond with the schema (attributes) for a collection or table in the data store
 
    cb(null,QBSchema.qbObjects[collectionName].attributes);
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

      spawnQbConnection(function __QBFIND__(client,cb){

        



      },
      qbCollections[collectionName],cb);

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

//     request.get({url:url, oauth:adapter.config.oauth, headers : {'Content-Type' :'text/xml'}}).pipe(parser.saxStream);
     

     
//       }
//     else{

//       cb('collection not found')
//     }

    

    // ** Filter by criteria in options to generate result set

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


  // 
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


  /*************************************************************************/
  /* Private Methods
  /*************************************************************************/

  // Wrap a function in the logic necessary to provision a connection
  // (grab from the pool or create a client)
  function spawnConnection(logic, config, cb) {

    var dbConfig = {
      database: config.database,
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port
    };

    // Grab a client instance from the client pool
    
    var qbRequest = request()

    // Run logic using connection, then release/close it
    function after(err, client, done) {
      if(err) {
        console.error("Error creating a connection to Postgresql: " + err);

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


  // This method runs when a model is initially registered at server start time
 

 return adapter;
})();


//////////////                 //////////////////////////////////////////
////////////// Private Methods //////////////////////////////////////////
//////////////                 //////////////////////////////////////////