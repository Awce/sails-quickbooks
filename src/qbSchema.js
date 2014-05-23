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

<<<<<<< HEAD
var QBD = require('./IDS_QBD.json')

for (var i = QBD.endpoints.length - 1; i >= 0; i--) {
		//console.log(QBD.endpoints[i])
};





module.exports = {
=======
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

//var IntuitXML = require('../lib/com/intuit/sb/cdm/v2/Mappings.js')
var qbXML = require('./qbXML.js')
var util = require('util')


 
 
 

//console.log(Object.keys(qbJsonSchema['xs:schema']))
 //QB base classes


<<<<<<< HEAD
		"account" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "account",
                "modelKey" : "account",
                "responseCollectionKey" : "Accounts",
                "enableCache" : "true",
                "cacheName" : "accounts"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
		"Bill" : {},
		"BillPayment" : {},
		"BillPaymentCreditCard" : {},
		"BOMComponent" : {},
		"BuildAssembly" : {},
		"Charge" : {},
		"Check" :{},
		"Class" : {},
		"CreditCardCharge" : {},
		"CreditCardCredit" : {},
		"CreditCadRefund" : {},
		"CreditMemo" : {},
		"CurrencyInfo" : {},
		"Customer" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "customer",
                "modelKey" : "Customer",
                "responseCollectionKey" : "Customers",
                "enableCache" : "true",
                "cacheName" : "customers"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
		"CustomerMsg" : {},
		"CustomerType" : {},
		"Deposit" : {},
		"Discount" : {},
		"employee" : {
=======
var qbSchema = function(){
>>>>>>> 1827df92267866a39b36ac7430772974258d23df

	var schema = this;
	//var com = {}
	
	//var qbJsonSchema = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../lib/intuit/v2/common/IntuitSchema.json')))['xs:schema']

	var _mapping = qbXML;
	
	this._xmlmap = _mapping.intuit.sb.cdm.v2;

	var modules = [_mapping.intuit.sb.cdm.v2]
	
	schema.context = new Jsonix.Context(modules)


	schema._rawXSD = fs.readFileSync(path.resolve(__dirname,'../lib/intuit/v2/common/IntuitSchema.xsd')).toString();

	//console.log(schema._rawXSD)
	schema.compiled = false;

	schema.Collections = {}

//console.log(json)
	// this._jsonSchema = {
	// 	defaultNamespace = qbJsonSchema.xmlns

	// }


	// var _mapping = qbXML;
	
	// this._xmlmap = _mapping.intuit.sb.cdm.v2;

	// var modules = [_mapping.intuit.sb.cdm.v2]
	
	// this.context = new Jsonix.Context(modules)
	


	//console.log(context['scopedElementInfosMap'])

	

// else{
// 	cb(null,{})
// }
// }
	
	schema.compileXSD(function(err,_compiledSchema){



		delete schema._rawXSD;
		schema.compiled = true;
		schema.qbXML = _compiledSchema;


		//console.log(schema.qbXML.CdmBase)
	})
	
	return schema;	
}




var QBCollection = function(qbSchema,objectName){

	var _collection = this;

	//console.log(objectName)

	var _object = qbSchema.qbXML[objectName]


	if(_object._extends){

		var _base = new QBCollection(qbSchema,_object._extends)

		_collection.attributes = _.extend(_object.attributes,_base.attributes)

	}
	else{

		
		_collection.attributes = _object.attributes
	}

	//console.log(_object)
	
	


	return _collection;
	
}








qbSchema.prototype.describe = function(collectionName,done){







	var schema = this;

	//console.log(schema)
	var _qbXObject = schema.qbXML[collectionName] 

	var _qbCollection = {

		types : {},
		attributes : {}
	}

	if(_qbXObject){

		if(schema.Collections[collectionName]){
			done(null,schema.Collections[collectionName].attributes) 
		}

		else{
			qbCollectionObject = new QBCollection(schema,collectionName)

			schema.Collections[collectionName] = qbCollectionObject

		//console.log(qbCollectionObject)
		done(null,{})
		}
		

		// async.reduce(_qbXObject._derivedFrom,_qbCollection,function(qbCollection,baseInfo,complete){

		// 	//console.log(baseInfo)

		// 	var _type = schema.qbXML[castXSDName(baseInfo.type)]

			

		// 	console.log(_type)




		// 	//console.log(baseInfo)

			
			
		// 	complete(null,qbCollection)
		// },function(err,objectBase){


		// //	console.log(objectBase)
		// 	done(null,{})

		// })

		
	}

	else{

		done('qb collection not found')
	}
	
	
	

	//	console.log(this.schema.intuit.sb.cdm.v2)
	//console.log(collectionName)

	// var entity = this.schema.intuit.sb.cdm.v2[collectionName]
	//console.log(this._xmlmap[collectionName])

	// if(entity){

	// this._xmlmap[collectionName].build()

	// if(this._xmlmap[collectionName].structure){
		
	// 	attributesForQBEntity(this._xmlmap,collectionName,done)
	// }
	// else{
	// 	done('no model found')
	// }



	


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

qbSchema.prototype.compileXSD = function(complete){

	var schema = this;


	

	//delete schema._rawXSD;


	xsd.stringToFlatJSON(schema._rawXSD,function(err,rawSchema){

		rawSchema.qbXMLType = {};
//		console.log(rawSchema)

		
		delete schema._rawXSD
	
		// async.reduce(Object.keys(rawSchema),rawSchema,compileXSDObject,function(err,_schema){


		// //	console.log(_schema)

		// 	complete(err,_schema)

		// })

		var _newSchema = {}
		async.forEach(Object.keys(rawSchema),function(key,done){

			if(key == 'qbXMLType'){

				done()
			}

<<<<<<< HEAD
			},
		"Estimate" : {},
		"FixedAsset" : {},
		"InventoryAdjustment" : {},
		"InventorySite" : {},
		"InventoryTransfer" : {},
		"Invoice" : {},
		"item" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "item",
                "modelKey" : "Item",
                "responseCollectionKey" : "Items",
                "enableCache" : "true",
                "cacheName" : "items"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
		"ItemConsolidated" : {},
		"ItemGroupComponent" : {},
		"ItemReceipt" : {},
		"Job" : {},
		"JobType" : {},
		"JournalEntry" : {},
		"NameValue" : {},
		"OtherName" : {},
		"Payment" : {},
		"PaymentMethod" : {},
		"payrollitem" : {


            "attributes" : {

                "Name" : {
                    "type" : "String",
                    "required" : true
                }

            },
            "config" : {
                "path" : "payrollitem",
                "modelKey" : "PayrollItem",
                "responseCollectionKey" : "PayrollItems",
                "enableCache" : "true",
                "cacheName" : "payrollitem"
            },
            "validations" : {},
            "methods" : {
                "create" : false,
                "read" : false,
                "update" : false,
                "delete" : false
            }

        },
		"PayrollNonWageItem" : {},
		"Preferences" : {},
		"PurchaseOrder" : {},
		"SalesOrder" : {},
		"SalesReceipt" : {},
		"SalesRep" : {},
		"SalesTax" : {},
		"SalesTaxCode" : {},
		"SalesTaxGroup" : {},
		"SalesTerm" : {},
		"ShipMethod" : {},
		"SyncActivity" : {},
		"SyncStatus" :{},
		"Task" : {},
		"TemplateName" : {},
		"timeactivity" : {




			"attributes" : {

				"Synchronized" : {
					"type" : "String",
					"required" : true
				}
=======
			else{

				var _schemaType = rawSchema[key]

				compileXSDObject(_schemaType,function(err,_newSchemaType){

					if(_newSchemaType.name){
						_newSchema[_newSchemaType.name] = _newSchemaType;

					}


					delete rawSchema[key]
					
					done()



				})

>>>>>>> 1827df92267866a39b36ac7430772974258d23df

			}


		},function(err){

			//console.log(_newSchema)
			complete(null,_newSchema)

		})
		
	
	});



	





}






function attributesForQBEntity(xmlschema,collectionName,cb){


	var entity = xmlschema[collectionName].structure

	//console.log(entity)
	if(entity.elements){
		
		var _attrs = {}

		async.forEach(Object.keys(entity.elements),function(propKey,done){

			var _prop = entity.elements[propKey]
			
			var _propertyName = _prop.name

			_attrs[_propertyName] = {}

			if(_prop.typeInfo){

				async.forEach(Object.keys(_prop.typeInfo),function(typeInfoKey,done){

					//console.log(_prop.typeInfo[typeInfoKey])
					//console.log(typeInfoKey)
					if(typeInfoKey == 'name'){
						//console.log(propKey + ' : '+ _prop.typeInfo[typeInfoKey])
						//_attrs[_propertyName].type = _prop.typeInfo[typeInfoKey]

						done()
					}
					else if(typeInfoKey == 'LIST') {
						//console.log('LIST : ')
						//console.log(xmlschema[_prop.elementName.key])



						done()

					}
					else if(typeInfoKey == 'properties'){
						done()
					}
					
					else{

						done()
					}

				},function(err,attr){

					//console.log(attr)
					done()
				})


			}
			else{
				console.log('no type info')
				done()
			}

			
			// if(_prop.typeInfo.LIST){
			
			// 	//console.log(typeof _prop.typeInfo)
			// 	_attrs[_prop.name] = {
			// 		type : 'array'
			// 	}

			// }
			// else{
			// 	_attrs[_prop.name] = {
			// 		type : _prop.typeInfo.name
			// 	}
			// }

			

			


		},function(){
			//console.log(' ')
			//console.log(_attrs)

			cb(null,_attrs)
		})


	}
	else{
		cb(null,{})
	}



}


function compileXSDObject(_xsdObject,callback){


	var _newXSDObject = {}


	//console.log(objectKey)
	//var _xsdObject = _unschema[objectKey]
	
	// if(!_xsdObject.type){

	// 	_xsdObject.type = 'string'
	// }

	
	var _typeName = castXSDName(_xsdObject.type)



		//console.log(_typeName)
	
		compileComplexType(_xsdObject,function(err,_compiledComplexType){


				//_intuitSchema.qbXMLType[_compiledComplexType.name] = _compiledComplexType;
				// console.log(_compiledComplexType)
				//delete _intuitSchema[objectKey]
				


				callback(null,_compiledComplexType)
			})


	// if(_typeName == 'simplesType'){

	// 	//console.log(_typeName)
	// 	compileSimpleType(_xsdObject,function(err,_compiledSimpleType){

	// 		//console.log(_compiledSimpleType)

	// 		if(_compiledSimpleType.name){
				
				


				
	// 			//delete _intuitSchema[objectKey]
	// 			callback(null,_compiledSimpleType)
	// 		}
	// 		else{
	// 			//delete _intuitSchema[objectKey]
	// 			callback(null,_newXSDObject)
	// 		}
			

			
	// 	})

		

	// }
	// 	else if(_typeName == 'simpleType' || _typeName == 'complexType' || _typeName == 'group' || _typeName == 'element'){

	// 		compileComplexType(_xsdObject,function(err,_compiledComplexType){


	// 			//_intuitSchema.qbXMLType[_compiledComplexType.name] = _compiledComplexType;
	// 			// console.log(_compiledComplexType)
	// 			//delete _intuitSchema[objectKey]
				


	// 			callback(null,_compiledComplexType)
	// 		})
			
	// 	}

	// 	// else if(_typeName == 'group'){
		
	// 	// 	console.log(_xsdObject)


	// 	// 	callback(null,_newXSDObject)
	// 	// }
		

	// 	else{

	// 		//console.log(_xsdObject)
			
	// 		//delete _intuitSchema[objectKey]
	// 		callback(null,_newXSDObject)
	// 	}

	

	// //console.log(_xsdObject)

	// //console.log(Intuit)

	

}

function compileComplexType(_complexType,comCompiled){

	//console.log(_complexType)
		
	var _newComplexType = {
		attributes : {}
	}

	async.forEach(Object.keys(_complexType),function(complexTypeKey,done){

		//_comtype.test = '123'

		if(complexTypeKey =='name'){

			_newComplexType.name = castXSDName(_complexType[complexTypeKey])
			done(null,_newComplexType)
		}
		else if(complexTypeKey == 'type'){
			_newComplexType._xtype = castXSDName(_complexType[complexTypeKey])
			done(null,_newComplexType)
		}
		else if(complexTypeKey == 'derivedFrom'){


			var _baseObjects = _complexType[complexTypeKey]

			var _enums = undefined;
			var _elements = undefined;

	
			async.forEachSeries(_baseObjects,function(baseInfoObject,done){

				
				var _baseInfoType = baseInfoObject.name

				if(_baseInfoType == 'xs:extension'){

					_newComplexType._extends = castXSDName(baseInfoObject.base) 

					done()
				}

				else if(_baseInfoType == 'xs:sequence' || _baseInfoType == 'xs:choice'){


					done()
				}
				else if(_baseInfoType == 'xs:complexContent'){

					_newComplexType.hasComplexContent = true;


					

					done()
				}

				else if(_baseInfoType == 'xs:simpleContent'){

					_newComplexType.hasSimpleContent = true;
					

					done()
				}
				else if(_baseInfoType == 'xs:simpleType'){

					_newComplexType.isSimpleType = true;
					

					done()
				}
				else if(_baseInfoType == 'xs:complexType'){

				//	console.log(_complexType)
					_newComplexType.isComplexType = true;
					

					done()
				}
				else if(_baseInfoType == 'xs:element'){

					if(!_elements){
						_elements = []
					}
					_elements.push(castXSDName(baseInfoObject.ref))

					

					done()
				}
				else if(_baseInfoType == 'xs:restriction'){

					_newComplexType.type = castXSDName(baseInfoObject.base)
					

					done()
				}

				else if(_baseInfoType == 'xs:group'){



					_newComplexType.attributes[castXSDName(baseInfoObject.ref)] = {
						groupRef : baseInfoObject.ref
					}
					

					done()
				}

				else if(_baseInfoType == 'xs:enumeration'){

					if(!_enums){
						_enums = []
					}
					_enums.push(baseInfoObject.value)

					done()
				}

				else{

				
					var _attr = {
						type : castXSDName(baseInfoObject.type)
					}

					_newComplexType.attributes[castXSDName(baseInfoObject.name)] = _attr

					done()
				}

				

			},function(err){


				_newComplexType._derivedFrom = _baseObjects

				if(_enums){
					_newComplexType.enums = _enums;

				}
				if(_elements){
					_newComplexType.elements = _elements
				}


				//console.log(_newComplexType)
				done(null,_newComplexType)
			})


			
			
			
		}
		else if(complexTypeKey == 'abstract'){

			_newComplexType.abstract = true;
			done(null,_newComplexType)
		}
		else if(complexTypeKey == 'substitutionGroup'){

			_newComplexType._substitutionGroup = castXSDName(_complexType[complexTypeKey])
			done(null,_newComplexType)
		}
		else if(complexTypeKey == 'mixed'){

			_newComplexType._mixed = _complexType[complexTypeKey]
			
		//	console.log(_newComplexType)
			done(null,_newComplexType)
		}

		else{
			//console.log(complexTypeKey)
			done(_newComplexType)
		}
		//console.log(complexTypeKey)
		

	},function(err){

		//console.log(_complexType)

		comCompiled(null,_newComplexType)
	})
	//console.log(complexType)

	//comCompiled(null,{})
}



// function compileSimpleType(simpleType,compiled){

	
// 	var _newSimpleType = {}

// 	async.forEachSeries(Object.keys(simpleType),function(simpleTypeKey,done){
		
// 		//console.log(simpleTypeKey)
// 		if(simpleTypeKey == 'type'){

// 			_newSimpleType._xtype = castXSDName(simpleType[simpleTypeKey])


// 			done(null,_newSimpleType)

// 		}
// 		else if(simpleTypeKey == 'name'){
			
// 			_newSimpleType.name = castXSDName(simpleType[simpleTypeKey])
		
// 			done(null,_newSimpleType)
// 		}
// 		else if(simpleTypeKey == 'derivedFrom'){

// 			//console.log(simpleType[simpleTypeKey])

// 			var _baseInfo = simpleType[simpleTypeKey]
// 			var _enums = []
// 			var _extends = []

// 			async.forEachSeries(_baseInfo,function(derInfo,adone){

// 				if(derInfo.base){

// 					_extends.push(derInfo.base)

// 				}
// 				else if(derInfo.type == 'xs:enumeration'){

// 					_enums.push(derInfo.value)
// 				}			



// 				adone()

// 			},function(err){

// 				if(_enums.length){
// 					_newSimpleType.enums = _enums
// 				}
// 				if(_extends.length){
// 					_newSimpleType._extends = _extends
// 				}

// 				done(null,_newSimpleType)

// 			})
			

// 		}
// 		else{
// 			//console.log(simpleTypeKey)
// 			done(null,_newSimpleType)
// 		}



// 		//console.log()
		

// 	},function(err){

// 	//	console.log(_compiledSimpleType)
// 		compiled(null,_newSimpleType)


// 	})


	
// }

// function compileSimpleTypeDerive(_stype,obj,done){

	
// 	if(obj.type == 'xs:restriction'){

// 		//console.log('restict')
// 		//_stype.type = castXSDName(obj.base)
// 		done(null,_stype)
// 	}
// 	else if(obj.type == 'xs:enumeration'){

// 		//console.log(obj.value)

// 	//	_stype.enumValues.push(obj.value.toString())
// 		done(null,_stype)
// 	}
// 	else{
// 		done(null,_stype)
// 	}

	




// }


function castXSDName(type){



	var _nameParts = type.split(':')




	return _nameParts.pop();
}



module.exports = qbSchema;

// module.exports = schemaMapping;
