var data2xml = require('data2xml')({"undefined" : "empty", "null" : "empty"});
var nodeuuid = require('node-uuid')
/**
 * Quickbooks query object builder
 */


var qbQuery = function(connection,collection,options){


	
	this.__connection = connection;
	this.__collection = collection;
	this.__options = options;


	var url = 'https://services.intuit.com/sb/' + collection.identity.toLowerCase() + '/v2/' + connection.connection.realm;

	var _objects = []

    var guid = nodeuuid.v4()

    var requestUUID  = guid.replace(/-/g, "");

    var queryName = collection.identity + "Query"

  	var queryObject = {
  		_attr : { xmlns : xmlns="http://www.intuit.com/sb/cdm/v2" },
    	IteratorId : requestUUID,
    	ChunkSize : 200,
    	}
   var xmlBody = data2xml(queryName,queryObject)

	console.log(xmlBody)
  // console.log(connection)




      
    //this.query =     //console.log(connection.oauth)





	return {

		url : url,
		oauth : connection.connection.oauth,
		body : data2xml(queryName,queryObject)


	};

}


module.exports = qbQuery;