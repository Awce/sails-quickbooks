/**
 * 
 */
var async = require('async')
var xsd = require('xsd');
var xml2js = require('xml2js').parseString;
var fs  = require('fs');
var path = require('path')
var _ = require('lodash')
// Jsonix = require('jsonix').Jsonix


var qbV2Schema = require('../lib/v2/common/IntuitV2.js')






// com = {}
// require('../lib/v2/schema/com/intuit/sb/cdm/v2/Mappings.js')
var util = require('util')


// var baseTypesXML = fs.readFileSync(path.resolve(__dirname,'../lib/QBXML/QBW/IntuitCdmBaseTypes.xsd')).toString();
// var customFieldTypes = fs.readFileSync(path.resolve(__dirname,'../lib/QBXML/QBW/IntuitCustomFieldCdmTypes.xsd')).toString();
 

 //QB base classes











var IntuitSchema = function(rawSchema){


	if(!rawSchema){
		return null;
	}

	var _schema = {



		xml : {
			complexTypes : {},
			simpleTypes : {},
			elements : {},
			groups : {}
		},

		QBObjects : {},
		Query : {},
		Reports : {},





	}

	function bootstrapQBObjectModels(done){



		var objectModel = _schema.xml.simpleTypes['objectName']

		//console.log(objectModel.restrictions.enums)


		async.forEach(objectModel.restrictions.enums,function(model,cb){

			
			var _element = _schema.xml.elements[model.value]

		//	console.log(_element)
			var _type = null;
			if(_element && _element.type){

				_type = _schema.xml.complexTypes[_element.type]

				console.log(_type)
			}
			

			





		},function(){

			done()
		})






	}


	function buildModelSchema(modelName){

		var _model = {}


		return model;

	}


	function registerElements(done){

		async.forEach(rawSchema['xs:schema']['xs:element'],function(element,cb){

			var _element = new QBElement(element)

			_schema.xml.elements[_element.name] = _element;


			cb()
		},function(err){
			done()
		})




	}



	function registerTypes(done){

		async.forEach(rawSchema['xs:schema']['xs:simpleType'],function(simpleType,cb){

			//console.log(simpleType.name)
			var _simpleType = new QBSimpleType(simpleType)
			

			_schema.xml.simpleTypes[_simpleType.name] = _simpleType;

			cb()

		},function(err){

			async.forEach(rawSchema['xs:schema']['xs:complexType'],function(complexType,cb){


				var _complexType = new QBComplexType(complexType)


				_schema.xml.complexTypes[_complexType.name] = _complexType;
				//console.log(_complexType)

				cb()

			},function(err){
				done()

			})


			
		})

	}

	function registerGroups(done){

		async.forEach(rawSchema['xs:schema']['xs:group'],function(group,cb){

			var _group = new QBGroup(group)

			_schema.xml.groups[group.name] = _group;

			cb()

		},function(err){



			done()
		})

	}
	


	async.series([registerTypes,registerElements,registerGroups,bootstrapQBObjectModels],function(){

		return _schema;

	})


};





var QBValidation = function(restriction){

	var validation = {
		baseType : restriction.base
	}
	


	if(restriction['xs:enumeration']){

			validation.enums = restriction['xs:enumeration']

		}
	
	return validation;

		

};

var QBEnum = function(enumerations){

	var enumValues = []

	async.forEach(enumerations,function(enumObject,done){

		//console.log(enumObject)

		enumValues.push(enumObject.value)

		done(null)

	},function(err,enums){

	//	console.log(enumValues)
		this.values = enumValues;

		//console.log(enums)
		return this;
	})


}


var QBSimpleType = function(simpleType){

	

	this.name = simpleType.name;

	if(simpleType['xs:restriction']){
		this.restrictions = new QBValidation(simpleType['xs:restriction'])

	}

	return this;
}

var QBComplexType = function(complexType){

	
	return complexType;

}

var QBSequence = function(sequence){

	//console.log(sequence)

	return sequence;

}


var QBElement = function(element){


	
	this.name = element.name;
	this.type = element.type;
	this.substitutionGroup = element.substitutionGroup;


	return this;


}
var QBGroup = function(group){

	this.name = group.name;

	return this;

}


// function marshallQbObject(schema,object,cb){


// 	var objectSchema = rawSchema['xs:' + object.value]


// 	//console.log(objectSchema)
// 	if(objectSchema){


// 		var qbObject = {
// 			attributes : {}

// 		}		

		
// 		console.log(objectSchema.derivedFrom[0])

// 		async.forEachSeries(objectSchema.derivedFrom,function(property,cb){

// 			//console.log(property)

// 			// if(!property.type){
// 			// 	cb('no type found')
// 			// }



// 			//console.log(property.type)
// 			 var name = property.name.replace('xs:','')
// 			 var type = property.type.replace('xs:','')

// 			//console.log(name)
			 
// 			 //console.log(name)
// 			if(property.base){
			

// 				//console.log(name + ":"+ property.base)

// 			}

// 			 qbObject.attributes[name] = {}


// 			cb()
		
// 		},function(){


			

			


// 			cb(null,schema)
// 		})

// 	}


	




		






	



// else{
// 	cb(null,{})
// }
// }
module.exports = (function(){

	// var IntuitV2 = fs.readFileSync(path.resolve(__dirname,'../lib/v2/common/IntuitV2.xsd')).toString()


	// xsd.stringToFlatJSON(IntuitV2, function(errors, obj){
 
	 	var Schema = new IntuitSchema(qbV2Schema);

  		
   		return Schema;
	// });

})();






// module.exports = schemaMapping;
