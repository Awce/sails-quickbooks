var _ = require('lodash')
var async = require('async')


var QBAttribute = function(){}




var QBModel = function(schema,objectName){

	//console.log(schema.qbObjects)
	var _model = {
		identity : objectName,
		attributes : {}
	}



	if(objectName =='Company'){

		return _model;		//todo : setup company model
	}

	else{
		var _element = schema.xml.elements[objectName]
	
		

		if(!_element){
			return _model;
		}
	
		else{
	//		console.log(_element.type)
		var _typeName = _element.type
		var _type = schema.xml.types[_element.type]

		_type.identity = objectName;
	//	console.log(schema.xml)
		//console.log(_type)


		return _type;;

	}
	}
	
	
// 	if(!_element){}
// 		//console.log(_element)
// 	else{
// 		//console.log(_element.type)
// 		var _type = schema.xml.types[_element.type]

// 	//	console.log(_type)

// 		if(_type && _type['xs:complexContent']){

// 			var baseType = _type['xs:complexContent']['xs:extension'].base

// 			console.log(baseType)


// 		//	var baseObject = schema.xml.types[]

// 			//console.log(baseObject)
// 			//
// 			//
// 			return 
// 		}


		
// 		//var _modelAttributes = attributeDefinitionsForType(schema,_type)

// 		//_model.attributes = _modelAttributes;

		
// }

//console.log(_model)

	

};

function attributesForExtension(schema,extension){

	//console.log(extension)
	
	var extensionBase = schema.xml.types[extension.base]
//	console.log(extensionBase)
	var extensionKeys = Object.keys(extensionBase)
	
//	console.log(extensionKeys)
	async.forEachSeries(extensionKeys,function(extensionKey,cb){

		
		cb()

	},function(){

		return {}

	})



}


function attributesForComplexContent(schema,complexContent){
	

	var _complexAttrs = {}

	async.forEachSeries(Object.keys(complexContent),function(complexKey,cb){

		if(complexKey == 'xs:extension'){

			var _extension = attributesForExtension(schema,complexContent['xs:extension'])


			cb()

		}
		else{
			cb()
		}


	},function(){



		return _complexAttrs;

	})





//	var extensionBaseName = complexContent['xs:extension'].base;

//	var extensionBaseType = schema.xml.types[extensionBaseName];

	



		//var extensionBaseAttrs = attributesForComplexContent;


		


	




	
	

	// if(sequence){

	// 	var _sequence = attributesFromSequence(sequence)
	// 	console.log(_sequence)

	// 	//console.log(_sequence)
	// 	//_seq = _sequence

	// 	//console.log(_attrs)
	// }

	//console.log(extension)
	//console.log(sequence)

	//['xs:sequence'])

//	var _attributes = _.merge(_base,_sequence)
	
//	console.log(_attributes)



}


function attributeFromElement(_element){

	var attr = {
		//name : _element.name,
		type : _element.type
	}

	return attr;


}

function attributesFromSequence(_sequence){


	var _seqAttrs = {}

	async.forEachSeries(Object.keys(_sequence),function(key,cb){

		
		if(key == 'xs:element'){

			var elementArray = _sequence[key];

			async.forEachSeries(elementArray,function(element,callback){

				var _attrs = attributeFromElement(element)
				//console.log(_attrs)
				_seqAttrs[element.name] = _attrs;

				callback()

			},function(){

				cb()
			})


		}
		else if(key == 'xs:group'){
			cb()
		}
		else{
			cb()
		}






	},function(){
		
		//console.log(_seqAttrs)
		return _seqAttrs;

	})

	
}

function attributeDefinitionsForType(schema,_type){

	//console.log(_type.name)


	//console.log(_type.name)




// 	var _typeAttributes = {}
 	var _typeKeys = Object.keys(_type)
	
	//console.log(_typeKeys)
	async.forEachSeries(_typeKeys,function(typeKey,cb){
			

			if(typeKey == 'xs:annotation' || typeKey == 'xs:notation'){
				//console.log('skip')

				cb()
			}
			else{


				if(typeKey == 'xs:complexContent'){
					
					var complexAttributes = attributesForComplexContent(schema,_type[typeKey])
					
				//	console.log(complexAttributes)

					cb()
				}
				else if(typeKey == 'xs:sequence'){
					cb()
				}
				else{
					cb()
				}





				
			}



		//	
		//	
		
	},function(){
		return {}

	})
// 			if(typeKey == 'xs:complexContent'){

// 				//console.log(_type)
// 				var _complexContent = attributesForComplexContent(schema,_type['xs:complexContent'])
				
// 				//console.log(_complexContent)
				
// 				//_attrs = _.merge(_attrs,_complexContent)
				
// 				cb()
// 			// 	return _complexContent

// 			}
// 			else if(typeKey == 'abstract'){

// 				//console.log('abstract')
// 				cb()
// 			}
// 			else{
// 				cb()
// 			}
			

// 		},function(){


// 			return _typeAttributes;

// 		})

// 		// if(_type.name == 'CdmBase'){

// 		// 	console.log(_type)
// 		// }
// 			//var _annotation = _type['xs:annotation']
			
// 			//console.log(_type)
			
// 			// if(_type['xs:complexContent']){
// 			// 	var _complexContent = attributesForComplexContent(schema,_type['xs:complexContent'])
// 			// 	//console.log(_complexContent)
// 			// 	return _complexContent
// 			// }



			 
			
			




	

}



module.exports = QBModel;