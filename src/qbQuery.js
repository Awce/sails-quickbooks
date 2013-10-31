// var data2xml = require('data2xml')({"undefined" : "empty", "null" : "empty"});
var nodeuuid = require('node-uuid')
var async = require('async')
var iterators = require('async-iterators')
var qbParser = require('./qbParser.js')
var timethat = require('timethat')
var qbStream = require('./qbStream.js')
var xmlstream = require('xml2object')
var zlib = require('zlib')
/**
 * Quickbooks query object builder
 */


var qbQuery = function(qbSchema,collection,options){

	console.log(options)


	this.requestGUID = nodeuuid.v4().replace(/-/g, "");
	this.schema = qbSchema;
	this.collection = collection;


	this.collectionName = collection.identity;
	this.collectionKey = collection.identity.toLowerCase();
	//this.collection = context[collectionName];
	this.options = options;
	this.chunkSize = options.chunkSize || 500

	this.recordCountURL = 'https://services.intuit.com/sb/recordcount/v2/'
	this.queryURL = 'https://services.intuit.com/sb/' + this.collectionKey + '/v2/'



	return this;

}

qbQuery.prototype.find = function(connection,complete){

	var query = this;

	query.connection = connection;

	var _start = new Date()

	//build up request object
	
	//copy the request to a record count object

	var _qbQueryObject = query.castToQbQueryObject()
	var _qbCountQueryObject = this.castToQbCountQueryObject(_qbQueryObject)
	

	

	

	var _requestIterator = query.buildIterator(connection,_qbQueryObject)
	var _responseObjects = []

	// iterators.forEachAsync(_requestIterator,function(err,responseObjects,done){

	// 	async.forEach(responseObjects,function(responseObject,complete){


	// 		query.castObjectValues(responseObject,function(err,obj){
	// 			_responseObjects.push(obj)
	// 			complete()
	// 		})
			
			


	// 	},function(err){

	// 		done()

	// 	})


	// },function(){

	// 	var _end = new Date()

	// 	console.log(timethat.calc(_start,_end))
	// 	complete(null,_responseObjects)
	// })

	query.executeQbRequest(connection,query.context,_qbQueryObject,complete)
	//var _countRequestObject = query.castToRequestObject(_qbCountQueryObject,client)









	// getRecordCount(query.context,_countRequestObject,function(err,count){

	// 	//console.log(query.defaults.chunkSize)
	// 	if(err){

	// 		complete(err,null)
	// 	}

	// 	if(count == 0){
	// 		complete(null,[])

	// 	}
	// 	else if(count < query.defaults.chunkSize){


	// 		executeQbRequest(query.context,_requestObject,complete)
	// 	}
	// 	else{
	// 		complete(null,[])
	// 	}




	// })



	



	function getRecordCount(context,requestObject,count){

		
		//console.log(requestObject)
		connection.http.post(requestObject,function(err,response,data){


			//console.log(err)
			if(response.statusCode == 200){

				var _count = parseRecordCount(context,data)

				//console.log()
				count(null,_count)

			}
			else{
				count(response.error,null)
			}


		})


	}

	function parseRecordCount(context,recordCountData){

		
		var _recordCountResponse = context.createUnmarshaller().unmarshalString(recordCountData)

	//	console.log()


		return _recordCountResponse.value.systemResponse.value.recordCount.count;
	}



	

}

qbQuery.prototype.streamRequest = function(context,qbRequest,complete){


}

qbQuery.prototype.buildIterator = function(client,qbRequest){

	var query = this;


	qbRequest.value.iteratorId = query.requestGUID;
	qbRequest.value.chunkSize = query.chunkSize;


	var _requestObject = query.castToRequestObject(client,qbRequest)

	//console.log(_requestObject.body)

	return {

		next : function(complete){


			client.http.post(_requestObject,function(err,response,data){




			if(err){
				complete(err)
			}

			qbParser.parseQueryResponse(query,response,data,complete)


		})




		}
	}



}


qbQuery.prototype.batchRequest = function(client,context,qbRequest,complete){





}

qbQuery.prototype.executeQbRequest = function(client,context,qbRequest,complete){

		var query = this;

	//	console.log(query.collectionName)

		var _requestObject = query.castToRequestObject(client,qbRequest)

		var _responseObjects = []
		var XStream = new xmlstream(['Employee'])

		var _qbStream = new qbStream(client,_requestObject)



		//console.log(_qbStream)

		XStream.on('object', function(name, obj) {
    //console.log('Found an object: %s', name);
    //console.log(obj);
    //
    //
    _qbStream.write(obj)
});

// // Bind to the file end event to tell when the file is done being streamed
// XStream.on('end', function() {
//     console.log('Finished parsing xml!');
// });

		//console.log(qbStream)
		client.http.post(_requestObject).pipe(XStream.saxStream)


		// client.http.post(qbRequest,function(err,response,data){

		// 	if(err){
		// 		complete(err)
		// 	}

		// 	qbParser.parseQueryResponse(query,response,data,complete)


		// })


		

	}


qbQuery.prototype.castToHttpRequest = function(client){

	var query = this;


	var _requestObject = {
		
		headers : {'Content-Type' :'text/xml', 
		'Accept-Encoding' : 'gzip, deflate'
	}
	}


		_requestObject.url = this.queryURL + client.connection.realm
	

		_requestObject.body = this.schema.context.createMarshaller().marshalString(query.qbQueryObject)

		console.log(_requestObject.body)
		_requestObject.oauth = client.connection.oauth;
		_requestObject.encoding = null;


		query.qbHttpRequestObject = _requestObject;
	
		return _requestObject;

}

qbQuery.prototype.castToQbQueryObject = function(){

	 
   // var queryName = collectionName + "Query"

   var query = this;
	
	var _queryObject = {
		name: { 
			namespaceURI : 'http://www.intuit.com/sb/cdm/v2', 
			localPart: this.collectionName + "Query" 

		},
	
		value : {
			xmlns : 'http://www.intuit.com/sb/cdm/v2',
			iteratorId : query.requestGUID,
			chunkSize : query.chunkSize,
			customFieldEnable : true,
		//	PrintGroupedItemsEnable : true
			
	}}


	query.qbQueryObject = _queryObject;

//	console.log(_queryObject)
	//var parser = this.context.createUnmarshaller()
	return _queryObject;



}

qbQuery.prototype.castToQbCountQueryObject = function(_queryObject){

	var _recordQueryObject = {
		name: { 
			namespaceURI : 'http://www.intuit.com/sb/cdm/v2', 
			localPart: "RecordCountQuery" 

		},
	
		value : {
			xmlns : 'http://www.intuit.com/sb/cdm/v2',
			queryObjects : _queryObject

			

	}}





	//var parser = this.context.createUnmarshaller()
	return _recordQueryObject;



}

qbQuery.prototype.castObjectValues = function(object,done){

	

	async.forEach(Object.keys(object),function(key,done){

		if(key == "TYPE_NAME"){
			delete object[key]
		}
		

		done()
	},function(err){
		done(null,object)
	})





}


module.exports = qbQuery;