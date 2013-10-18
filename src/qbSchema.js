/**
 * 
 */
var async = require('async')
var xsd = require('xsd');
var xml2js = require('xml2js').parseString;
var fs  = require('fs');
var path = require('path')
var _ = require('lodash')

var V2Schema = require('../lib/intuit/com/intuit/sb/cdm/v2/Mappings.js')
var Jsonix = require('Jsonix').Jsonix
//var IntuitXML = require('../lib/com/intuit/sb/cdm/v2/Mappings.js')

var util = require('util')


 
 var test = fs.readFileSync(path.resolve(__dirname,'../lib/intuit/v2/sample/sampleresponse.xml')).toString();
 

 //QB base classes


var qbSchema = function(rawSchema){

	
	//var com = {}
	

	this.schema = V2Schema;
	
	
	this.modules = [this.schema.intuit.sb.cdm.v2]
	

	var context = new Jsonix.Context(this.modules)

	var unmarshaller = context.createUnmarshaller();
	var objectFromXMLString = unmarshaller.unmarshalString(test);
	
	console.log(objectFromXMLString['value']['systemResponse']['value'])
// else{
// 	cb(null,{})
// }
// }
	return this;

}


qbSchema.prototype.describe = function(collectionName,done){

	//	console.log(this.schema.intuit.sb.cdm.v2)


	//console.log(this.schema.intuit.sb.cdm.v2[collectionName]




//	if(__type){

		//console.log(Object.keys(__type))

	done(null,{})
//	}
//	else{
		//console.log(collectionName)
//		done(collectionName + ' entity not found in QB!')
//	}

}

module.exports = qbSchema;

// module.exports = schemaMapping;
