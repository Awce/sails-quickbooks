/**
 * 
 */
var async = require('async')
var xsd = require('xsd');
var xmldom = require('xmldom')
var xml2js = require('xml2js').parseString;
var fs  = require('fs');
var path = require('path')
var _ = require('lodash')
var Jsonix = require('../lib/jsonix/jsonixTweaked.js').Jsonix


//var IntuitXML = require('../lib/com/intuit/sb/cdm/v2/Mappings.js')
var qbXML = require('./qbXML.js')
var util = require('util')


 
 // var test = fs.readFileSync(path.resolve(__dirname,'../lib/intuit/v2/sample/sampleresponse.xml')).toString();
 

 //QB base classes


var qbSchema = function(rawSchema){

	
	//var com = {}
	

	var _mapping = qbXML;
	
	this._xmlmap = _mapping.intuit.sb.cdm.v2;

	var modules = [_mapping.intuit.sb.cdm.v2]
	
	this.context = new Jsonix.Context(modules)
	


	//console.log(context['scopedElementInfosMap'])

	

// else{
// 	cb(null,{})
// }
// }
	return this;

}


qbSchema.prototype.describe = function(collectionName,done){

	//	console.log(this.schema.intuit.sb.cdm.v2)
	//console.log(collectionName)

	// var entity = this.schema.intuit.sb.cdm.v2[collectionName]
	//console.log(this._xmlmap[collectionName])

	// if(entity){

	this._xmlmap[collectionName].build()

	if(this._xmlmap[collectionName].structure){
		
		attributesForQBEntity(this._xmlmap,collectionName,done)
	}
	else{
		done('no model found')
	}



	


	// }
	// else{

	// 	done('entity not found in QB!')
	// }
	


//	if(__type){

		//console.log(Object.keys(__type))

	
//	}
//	else{
		//console.log(collectionName)
//		done(collectionName + ' entity not found in QB!')
//	}

}

function attributesForQBEntity(xmlschema,collectionName,cb){


	var entity = xmlschema[collectionName].structure

	if(entity.elements){
		
		var _attrs = {}

		async.forEach(Object.keys(entity.elements),function(propKey,done){

			var _prop = entity.elements[propKey]
			
			if(_prop.typeInfo.LIST){
			
				//console.log(typeof _prop.typeInfo)
				_attrs[_prop.name] = {
					type : 'json'
				}

			}
			else{
				_attrs[_prop.name] = {
					type : _prop.typeInfo.name
				}
			}

			

			done()


		},function(){

			//console.log(_attrs)
			cb(null,_attrs)
		})


	}
	else{
		cb(null,{})
	}



}




module.exports = qbSchema;

// module.exports = schemaMapping;
