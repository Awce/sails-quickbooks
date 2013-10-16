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

var qbModel = require('./qbModel.js')




// com = {}
// require('../lib/v2/schema/com/intuit/sb/cdm/v2/Mappings.js')
var util = require('util')


// var baseTypesXML = fs.readFileSync(path.resolve(__dirname,'../lib/QBXML/QBW/IntuitCdmBaseTypes.xsd')).toString();
// var customFieldTypes = fs.readFileSync(path.resolve(__dirname,'../lib/QBXML/QBW/IntuitCustomFieldCdmTypes.xsd')).toString();
 

 //QB base classes














var IntuitSchema = function(rawSchema,loaded){


	

	var _schema = {



		xml : {
			complexTypes : {},
			simpleTypes : {},
			types : {},
			elements : {},
			groups : {}
		},

		qbObjects : {},
		Query : {},
		Reports : {},





	}

	function bootstrapQBObjectModels(done){

		//this is the enum for the supported API objects lol
		var objectModels = _schema.xml.types['objectName']

		
		async.forEach(objectModels.restrictions.enums,function(model,cb){

			

			var _qbModel = new qbModel(_schema,model.value)

			_schema.qbObjects[_qbModel.identity] = _qbModel;

			//var _element = _schema.xml.elements[model.value]

		// //	console.log(_element)
		// 	var _type = null;
		// 	if(_element && _element.type){

		// 		_type = _schema.xml.types[_element.type]

		// 		if(_type){


		// 		}


		//		}
			
		cb()
			





		},function(){

			//console.log(_schema.xml)

			console.log('bootstrapped')
			//console.log(_schema)
			done()
		})






	}


	function buildModelSchema(modelName){

		var _model = {}


		return model;

	}


	function registerElements(done){

		async.forEach(rawSchema['xs:schema']['xs:element'],function(element,cb){

			var _element = new QBElement(_schema,element)

		//	console.log(_element)
//			_schema.xml.elements[_element.name] = _element;


			cb()
		},function(err){
			done()
		})




	}



	function registerTypes(done){

		async.forEach(rawSchema['xs:schema']['xs:simpleType'],function(_simpleType,cb){

			//console.log(simpleType.name)
			var _newSimpleType = new QBSimpleType(_schema,_simpleType)
			
			//console.log(_newSimpleType)
		//	_schema.xml.types[_simpleType.name] = _simpleType;

			cb()

		},function(err){

			async.forEach(rawSchema['xs:schema']['xs:complexType'],function(complexType,cb){


				var _newComplexType = new QBComplexType(_schema,complexType)
			//	console.log(_newComplexType)

				//_schema.xml.types[_newComplexType.name] = _newComplexType;

				
			//	console.log(_newComplexType)

				cb()

			},function(err){


				done()

			})


			
		})

	}



	function registerGroups(done){

		async.forEach(rawSchema['xs:schema']['xs:group'],function(group,cb){


			//console.log(group)

			var _group = new QBComplexType(_schema,group)

			//console.log(group)
			

			cb()

		},function(err){



			done()
		})

	}
	


	async.series([registerTypes,registerElements,registerGroups,bootstrapQBObjectModels],function(){

		loaded(null,_schema)
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


var QBSimpleType = function(schema,simpleType){

	//sconsole.log(simpleType)

	var __simpleType = {


	}
	if(simpleType){
		__simpleType.name = simpleType.name;
	}

	if(simpleType['xs:restriction']){
		__simpleType.restrictions = new QBValidation(simpleType['xs:restriction'])

	}

	schema.xml.types[__simpleType.name] = __simpleType;

	//console.log(__simpleType.name)

	return __simpleType;
}







var QBComplexType = function(schema,_complexType){

//	console.log(_complexType)

	var __complexType = {}
	__complexType.name = _complexType.name
//	console.log(_complexType.name)
	__complexType.attributes = {}



	//console.log(__complexType)

	var _keys = Object.keys(_complexType);
	//console.log(_keys)

		

	async.reduce(Object.keys(_complexType),__complexType,reduceComplexType,function(err,__reducedType){

		//console.log(__reducedType)
	//	schema.xml.types[__complexType.name] = __complexType;
	//	
	//	
		//console.log(__reducedType)
		//
		schema.xml.types[__reducedType.name] = __reducedType;
		return __reducedType;
	
	})


	function extendType(baseType,newType){

		return _.extend(newType,baseType)


	}

	function reduceElement(newType,element,callback){

		if(element){
			
			if(element.name){

				newType.attributes[element.name] = {}

				if(element.type){
					newType.attributes[element.name].type = element.type
					callback(null,newType)

				}
				else{
					callback(null,newType)
				}
			}
			else if(element.ref){
				//console.log(element)

				newType.attributes[element.ref] = element;
				callback(null,newType)

			}
			else{
				//console.log(element)
				callback(null,newType)

			}

			
		}
		else{
			callback(null,newType)
		}
		

	}

	function flattenSequence(newType,sequence,callback){
	
		if(sequence){

			async.reduce(Object.keys(sequence),newType,function(_newType,seqKey,cb){

				if(seqKey == 'xs:element'){

					var _seqElement = sequence[seqKey];

					if(_.isArray(_seqElement)){

						async.reduce(_seqElement,_newType,reduceElement,function(err,reducedType){

							//console.log(_seqElement)
							cb(null,reducedType)
						})



						
					}
					else{

						
						reduceElement(_newType,_seqElement,cb)
						//cb(null,_newType)
					}
					

				}
				else if(seqKey == 'xs:group'){

					var _groups = sequence[seqKey]

					if(!_.isArray(_groups)){
						//console.log('not array')
						_groups = [_groups]	
						//console.log(_groups)
						
					}
					else{
						//console.log('array')
						
						_groups = _groups
					}
					async.reduce(_groups,_newType,function(__newType,_group,done){

						
						__newType.attributes[_group.ref] = {
							ref : _group.ref
						}


						done(null,__newType)


					},function(err,__groupType){
						//console.log(__groupType)
						cb(null,__groupType)
					})


					
					
					}
				else{
						cb(null,_newType)
				}

				



			},function(err,__newType){

				callback(null,__newType)
			})
		
		
		}
		else{
			callback(null,newType)

		}


		
		
	}

	function reduceComplexContent(newType,complexContent,callback){

		//console.log(newType)
		//
		
		if(complexContent['xs:extension']){
			

			async.reduce(Object.keys(complexContent['xs:extension']),newType,function(_newType,extensionKey,cb){
				
				var complexExtensionObject = complexContent['xs:extension'][extensionKey]
				
				if(extensionKey == 'base'){

					_newType.baseType = complexExtensionObject;

					cb(null,_newType)
				}
				else if(extensionKey == 'xs:sequence'){
					//console.log(complexExtensionObject)
					//console.log(complexContent['xs:extension'][extensionKey])
					flattenSequence(_newType,complexExtensionObject,function(err,_sequencedType){
						//console.log(_sequencedType)
						cb(null,_sequencedType)

					})
					
				}
				

			},function(err,reducedType){

				callback(null,reducedType)

			})



			
		}
			else{
				callback(null,newType)
			}
		
		//console.log(keys)
		//
		//
		
	
		

		

	}



	function reduceComplexType(newType,typeKey,callback){


		if(typeKey =='name'){

			newType.name = _complexType.name
			callback(null,newType)
		}
		else if(typeKey =='xs:complexContent'){

			reduceComplexContent(newType,_complexType[typeKey],callback)

			
			// callback(null,newType)

		}
		else if(typeKey =='xs:simpleContent'){


			//reduceComplexType(newType,_complexType[typeKey],callback)
			callback(null,newType)

		}
		else if(typeKey =='xs:extension'){


			//reduceComplexType(newType,_complexType[typeKey],callback)
			callback(null,newType)

		}
		else if(typeKey =='abstract'){

			newType.abstract = true;

			callback(null,newType)

		}
		else if(typeKey =='xs:annotation'){

			
			callback(null,newType)

		}
		else if(typeKey =='xs:restriction'){

			
			callback(null,newType)

		}
		else if(typeKey =='xs:sequence'){

			
			callback(null,newType)

		}
		else if(typeKey =='xs:group'){

			
			callback(null,newType)

		}
		else if(typeKey =='xs:choice'){

			
			callback(null,newType)

		}
		else if(typeKey =='xs:attribute'){

			newType.attributes[_complexType[typeKey].name] = _complexType[typeKey]

			callback(null,newType)

		}
		else if(typeKey =='mixed'){

			
			callback(null,newType)

		}

		else{
			// console.log('other : ') 
			// console.log(_complexType)
			// console.log(typeKey)
			//console.log(_complexType)
			callback(null,newType)
		}

		

	}

	// function reduceComplexContent(newType,complexContent,callback){

		

	// 	callback(null,newType)
	// }

	function reduceSimpleContent(newType,simpleContent,callback){


		
		callback(null,newType)


	}
	
	// async.forEachSeries(_keys,function(_key,cb){



		// if(key == 'abstract'){

		// 	cb()
		// }
		// else if(key == "xs:complexContent"){

		// 	var _complexContent = complexType['xs:complexContent']
			
		// 	var _complexKey = Object.keys(_complexContent)[0]
			
		// 	var _content = _complexContent[_complexKey]

		// 	var _contentKeys = Object.keys(_content)

		// 	async.forEachSeries(_contentKeys,function(key,done){
		// 		//console.log(key)
		// 		switch (key) {
  //   			case 'base' :
  //       			_complexType.baseType = _content.base
  //       			done()
  //       			//console.log('base')
  //       		break;

  //   			case 'xs:sequence' :
    			
    				
  //   				var _sequence = _content['xs:sequence']
    				
  //   				if(typeof _sequence == 'string'){

  //   					_sequence = {}
  //   				}

  //   				async.forEachSeries(Object.keys(_sequence),function(_sequenceKey,cb){

  //   					if(_sequenceKey == 'xs:element'){

  //   						var _sqElement = _sequence[_sequenceKey]

  //   						if(_.isArray(_sqElement)){
  //   							//console.log(_sequenceKey)
    							
  //   							async.forEachSeries(_sqElement,function(_arrayElement,added){
    								
  //   								//console.log(_arrayElement.name)

  //   								_complexType.attributes[_arrayElement.name] = {
  //   									type : _arrayElement.type
  //   								}

  //   								added()

  //   							},function(){
  //   								cb()
  //   							})
    							
    							
  //   						}
  //   						else{
    							
  //   							_complexType.attributes[_sqElement.name] = {
  //   									type : _sqElement.type
  //   								}


  //   							cb()
  //   						}
    						
  //   					}
  //   					else if(_sequenceKey == 'xs:group'){

  //   						var _group = _sequence[_sequenceKey]

  //   						if(_.isArray(_group)){

  //   							async.forEachSeries(_group,function(_addGroup,done){

  //   								_complexType.attributes[_addGroup.ref] = _addGroup;

  //   								done()
  //   							},function(){
  //   								cb()

  //   							})
    							
  //   						}
  //   						else{

  //   						//	console.log(_group)
  //   							cb()
  //   						}
    						
  //   					}
  //   					else if(_sequenceKey == 'xs:choice'){
  //   						cb()
  //   					}

  //   					else if(_sequenceKey == 'minOccurs'){
  //   						cb()
  //   					}
  //   					else{
  //   						cb()
  //   					}

    					
  //   				},function(){
  //   					done()

  //   				})

  //   			break;
  //   			case 'xs:attribute' :
  //   			done()
  //   			//	console.log('attribute')
  //   			break;
  //   			case 'xs:group' :
  //   			done()
  //   			//	console.log('attribute')
  //   			break;
  //   			default :
  //      	 			done()//console.log(key)
		// 		break;
		// 		} 
				
				
		// 	},function(){
		// 		cb()
		// 	})







			
		// }
		// else if(key == "xs:sequence"){
		// 	cb()
		// }
		// else{
		// 	cb()
		// }
		//console.log(_key)
	// 	cb()
	// },function(){
	// //	console.log(__complexType)
	// 	//
	// 	//
	// 	//
			

	// })

	
	

}

var QBSequence = function(sequence){

	//console.log(sequence)

	return sequence;

}


var QBElement = function(schema,element){

	
	var __qbElement = {
		name : element.name,
		type : element.type,
		substitutionGroup : element.substitutionGroup,
		complexContent : element['xs:complexType']
	}
	
	// this.name = element.name;
	// this.type = element.type;
	// this.substitutionGroup = element.substitutionGroup;

	schema.xml.elements[__qbElement.name] = __qbElement;

	return __qbElement;


}
var QBGroup = function(schema,group){
	
	var _group = {}
//	console.log('group!')
	//console.log(group)

	_group.name = group.name;
	_group.attributes = {}

	if(group['xs:sequence']){

		//console.log(['xs:sequence'])
		if(group['xs:sequence']['xs:element']){

			//console.log(group['xs:sequence']['xs:element'])
		// 	async.forEachSeries(group['xs:sequence']['xs:element'],function(element,done){
		// 		//console.log(element.name)



		// 		_group.attributes[element.name] = {

		// 			type : element.type
		// 		}
		// 		done()

		// 	},function(){

		// 	//	console.log(_group)

		// 	schema.xml.groups[_group.name] = _group;

		// 		return _group;
		// 	})
		}
		else{
			//console.log(group['xs:sequence'])
			return _group;
		}
	}
	else{
		return _group;
	}

	

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
module.exports = IntuitSchema;

// module.exports = schemaMapping;
