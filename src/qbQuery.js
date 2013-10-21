// var data2xml = require('data2xml')({"undefined" : "empty", "null" : "empty"});
var nodeuuid = require('node-uuid')
var async = require('async')
var iterators = require('async-iterators')
var qbParser = require('./qbParser.js')
var timethat = require('timethat')
/**
 * Quickbooks query object builder
 */


var qbQuery = function(context,collectionName,options){




	this.requestGUID = nodeuuid.v4().replace(/-/g, "");
	this.context = context;
	this.collectionName = collectionName;
	this.collectionKey = collectionName.toLowerCase();
	//this.collection = context[collectionName];
	this.options = options;
	this.defaults = {
		chunkSize : 250,


	}

	this.recordCountURL = 'https://services.intuit.com/sb/recordcount/v2/'
	this.queryURL = 'https://services.intuit.com/sb/' + this.collectionKey + '/v2/'

	return this;

}

qbQuery.prototype.find = function(client,complete){

	var query = this;

	query.client = client;

	var _start = new Date()

	//build up request object
	
	//copy the request to a record count object

	var _qbQueryObject = query.castToQbQueryObject()
	//var _qbCountQueryObject = this.castToQbCountQueryObject(_qbQueryObject)
	

	

	

	var _requestIterator = query.buildIterator(client,query,_qbQueryObject)
	var _responseObjects = []

	iterators.forEachAsync(_requestIterator,function(err,responseObjects,done){

		async.forEach(responseObjects,function(responseObject,complete){


			query.castObjectValues(responseObject,function(err,obj){
				_responseObjects.push(obj)
				complete()
			})
			
			


		},function(err){

			done()

		})


	},function(){

		var _end = new Date()

		console.log(timethat.calc(_start,_end))
		complete(null,_responseObjects)
	})

	//query.executeQbRequest(client,query.context,_requestObject,complete)
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
		client.http.post(requestObject,function(err,response,data){


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

qbQuery.prototype.buildIterator = function(client,query,qbRequest){

	var query = this;


	qbRequest.value.iteratorId = query.requestGUID;
	qbRequest.value.chunkSize = 250;


	var _requestObject = query.castToRequestObject(client,qbRequest)

	console.log(_requestObject.body)

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

		client.http.post(qbRequest,function(err,response,data){

			if(err){
				complete(err)
			}

			qbParser.parseQueryResponse(query,response,data,complete)


		})


		

	}


qbQuery.prototype.castToRequestObject = function(client,queryObject){



	var _requestObject = {
		
		headers : {'Content-Type' :'text/xml', 
		//'Accept-Encoding' : 'gzip, deflate'
	}
	}

	if(queryObject.name.localPart == 'RecordCountQuery'){
		_requestObject.url = this.recordCountURL + client.connection.realm
	}
		else{
			_requestObject.url = this.queryURL + client.connection.realm
		}

		_requestObject.body = this.context.createMarshaller().marshalString(queryObject)


		_requestObject.oauth = client.connection.oauth;

		return _requestObject;

}

qbQuery.prototype.castToQbQueryObject = function(){

	 
   // var queryName = collectionName + "Query"


	
	var _queryObject = {
		name: { 
			namespaceURI : 'http://www.intuit.com/sb/cdm/v2', 
			localPart: this.collectionName + "Query" 

		},
	
		value : {
			xmlns : 'http://www.intuit.com/sb/cdm/v2',
			
	}}





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