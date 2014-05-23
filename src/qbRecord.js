var async = require('async')



var QBIdType = function(){


}







var QBRecord = function (){


function reduceMetaData(rec,metadata,cb){

	// if(metadata.$name){
	// 	console.log('?')
	// 	console.log(metadata)
	// }

	if(metadata.$name == 'CreateTime'){

		rec.createdAt = metadata.$text
	}
	
	else if(metadata.$name == 'LastUpdatedTime'){

		rec.updatedAt = metadata.$text

	}

	else if(metadata.$name == 'SyncToken'){
		rec.syncToken = metadata.$text
	}

	cb(null,rec)



}

function reduceCustomField(newField,customfield,cb){


	if(customfield.$name == 'DefinitionId'){

		//console.log(customfield)
	}
	
	else if(customfield.$name == 'Name'){

		var key = customfield.$text.split('.').pop()
				
		key = key.replace(' ','')

		newField.key = key
	}

	else if(customfield.$name == 'Value'){
		newField.value = customfield.$text;
	}

	
	cb(null,newField)



}

function reduceComplexType(_rec,reference,cb){

	async.filter(Object.keys(reference),function(keyName,cb){

		cb(keyName.indexOf('$'))

	},function(keys){

		
		console.log(keys)

		cb(null,_rec)


	})


}


function filterKeys(key,cb){

			if(key.indexOf('$') == 0){
				return cb(false)
			}
			else{
				return cb(true)
			}

		}


function transformSimpleType(attr){

	//idType
	if(attr.$.idDomain){

		return attr.$text + ':' + attr.$.idDomain
	}

	else{
		return attr.$text
	}


}

function transformComplexType(complexType,cb){




	async.filter(Object.keys(complexType),filterKeys,function(attrKeys){

		var data = {}

		async.reduce(attrKeys,data,function(_data,key,cb){


			var typeAttr = complexType[key]

			if(!_data[key]){
				_data[key] = transformSimpleType(typeAttr)
			}
			
			else{

			}

			cb(null,_data)

		},function(err,attrData){


		//	console.log(attrData)

			cb(err,attrData)

		})



		


	})




}

	
return {

		create :function(qbData,cb){


		async.filter(Object.keys(qbData),filterKeys,function(keys){

			console.log(keys)
			var _rec = {}

			async.reduce(keys,_rec,function(rec,key,cb){

				var attr = qbData[key]

				// if(attr.$name == 'CustomField'){

				// 	console.log(attr.$children)
					
				// 	rec[attr.Name.$text.split('.').pop()] = attr.Value.$text;

				// 	cb(null,rec)

				// }

				if(attr.$children){


					transformComplexType(attr,function(err,data){
						
						console.log(data)
						rec[key] = data

						cb(null,rec)
					})
				}	
				
				else{

					rec[key] = transformSimpleType(attr)
					cb(null,rec)
				}			


				

			},function(err,rec){

				cb(null,rec)

			})



		})

		// async.reduce(qbData.$children,{},function(_rec,attr,cb){

		// 	if(attr.$children){


		// 		async.reduce(attr,_rec,reduceComplexType,function(){
		// 			cb(null,_rec)
		// 		})

				

		// 	}

		// 	else{

		// 		_rec[attr.$name] = attr.$text

		// 		cb(null,_rec)
		// 	}

			




		// },function(err,rec){

		// 	//console.log(_rec)
		// 	cb(null,rec)
		// })


}


	};
}


module.exports = QBRecord()