var xml2js = require('xml2js').parseString;
var util = require('util');

var Parser = module.exports = {

  /**
  Parse the raw response from the IDS API
  **/
<<<<<<< HEAD
  parseResponse : function(collection,model,response,body,callback){

    


    console.log(collection)

    //console.log(model)
=======
  parseQueryResponse : function(query,response,data,callback){


    //console.log(query)
   // console.log(response)
    //console.log(response.statusCode)
>>>>>>> 1827df92267866a39b36ac7430772974258d23df
    switch(response.statusCode) {

      //successful REST request/response...
      case 200:

<<<<<<< HEAD
      xml2js(body, {mergeAttrs: true,explicitArray : false },function (err, result) {
    //    console.log(result)
        var objects = result.RestResponse[collection.config.qbCollectionKey][collection.config.qbObjectKey]

        async.map(objects,Parser.parseQBObject,function(err,objs){
=======
      

>>>>>>> 1827df92267866a39b36ac7430772974258d23df

       Parser.parseQueryResponseData(query,data,callback)

       // // console.log(responseData)

       //  async.map(responseData,function(rawObject,cb){

       //    Parser.parseQbObject(qbCollection,rawObject,cb)

       //  },function(err,objects){

       //    //console.log(objects)
       //    callback(null,objects)
       //  })

       //  })

      break;

    //OAuth tokens are invalid
    case 401:
  
      break;

    //404
    case 404:
  
      break;

    default:
    // error
      
      break;
    }
  },

<<<<<<< HEAD
  parseQBObject : function(rawObject,callback){

    var _qbObject = {}

    function firstCharLowerCase(str) {
    
      return str.charAt(0).toLowerCase() + str.slice(1);
    };

    function transformEmbeddedObj(key,embeddedObj,cb){

      var _embedObject = {}

      async.forEach(Object.keys(embeddedObj),function(eObjKey,cb){

          if(eObjKey == 'Id'){

            _embedObject.id = embeddedObj.Id._ + ':' + embeddedObj.Id.idDomain;

            cb()
          }

          else{
            _embedObject[firstCharLowerCase(eObjKey)] = embeddedObj[eObjKey]

            cb()

          }
       

      },function(){

        _qbObject[firstCharLowerCase(key)] = _embedObject

        cb()

      })




    }



    function transformIdType (key,idTypeObj,cb){

       _qbObject[firstCharLowerCase(key)] = idTypeObj._ + ':' + idTypeObj.idDomain;

       
       cb()

    }

    function transformEmployeeType (key,employeeObj,cb){

       _qbObject.employee = employeeObj.EmployeeId._ + ':'+employeeObj.EmployeeId.idDomain;
       _qbObject.employeeName = employeeObj.EmployeeName;

       
       cb()

    }

    function transformMetaData(key,metaDataObj,cb){

      _qbObject.createdAt = metaDataObj.CreateTime;
      _qbObject.updatedAt = metaDataObj.LastUpdatedTime;
=======
  parseQueryResponseData : function(query,restResponse,complete){


    //console.log(query)
    var parser = query.context.createUnmarshaller()

    var _data = parser.unmarshalString(restResponse)

    console.log()


    //console.log(_data.value.systemResponse.value)
    //
    //
    //

 //   console.log(_data.value.systemResponse.value[query.collectionKey].length)
    

    complete(null,_data.value.systemResponse.value[query.collectionKey])
   
    // console.log(qbCollection)
    //  xml2js(data, {mergeAttrs: true,explicitArray : true, normalize : true},function (err, result) {

    //   var responseKeys = Object.keys(result)
    //   var responseKey = responseKeys[0]
    //   console.log(result)

    //   if(schema.xml.elements[responseKey]){

        

          
    //     callback(null,[])

    //   }
    //   else{
    //     callback('no parser found for data')
    //   }

     
      






    //  })


  },

  parseQbObject : function(qbCollection,rawObject,callback){

    
    if(rawObject){
>>>>>>> 1827df92267866a39b36ac7430772974258d23df


<<<<<<< HEAD
      cb()
    }


    function transformExpenseAccountRef(key,expenseAccountRef,cb){
    
      _qbObject.expenseAccount = expenseAccountRef.AccountId._ + ':' + expenseAccountRef.AccountId.idDomain
      _qbObject.expenseAccountName = expenseAccountRef.AccountName
      _qbObject.expenseAccountType = expenseAccountRef.AccountType

      cb()
    }

    function transformIncomeAccountRef(key,incomeAccountRef,cb){
    
      _qbObject.incomeAccount = incomeAccountRef.AccountId._ + ':' + incomeAccountRef.AccountId.idDomain
      _qbObject.incomeAccountName = incomeAccountRef.AccountName
      _qbObject.incomeAccountType = incomeAccountRef.AccountType
=======
      var def = qbCollection.definition;

      //console.log(rawObject)

      async.each(Object.keys(def),function(key,cb){


        switch(key) {

        // case 'id':
  
        //   qbModelObject.id = rawObject.Id._
        //   qbModelObject.domain = rawObject.Id.idDomain;

        //   qbModelObject.externalKey = rawObject.Id._
        //   qbModelObject.externalDomain = rawObject.Id.idDomain;

        //   cb()

        // break;

        case 'createdAt':
          qbModelObject.createdAt = rawObject.MetaData.CreateTime;

          cb()
        break;

        case 'updatedAt':
          qbModelObject.updatedAt = rawObject.MetaData.LastUpdatedTime;
          qbModelObject.syncToken = rawObject.SyncToken;
          qbModelObject.isDraft = rawObject.Draft == 'true';
          qbModelObject.isSynchronized = rawObject.Synchronized == 'true';
          qbModelObject.objectState = rawObject.ObjectState;

          cb()
        break;

        default:

          Parser.parseQbObjectProperty(def,rawObject,key,function callback(err,value){

           // console.log(key)
              

              qbModelObject[key] = value;

              if(key == 'id'){


             //   console.log(rawObject ['Id'])
              }

              var type = typeof value;

              
              cb()
          })

           break;


    // error
      
       
    }


        // if(key == 'id'){

          
        // }
        // else if(key == 'createdAt'){

        //   qbModelObject.createdAt = rawObject.MetaData.CreateTime;

        // }
        // else if(key = 'updatedAt'){
        //   qbModelObject.updatedAt = rawObject.MetaData.LastUpdatedTime;
        //   qbModelObject.syncToken = rawObject.SyncToken;
        //   qbModelObject.isDraft = rawObject.Draft == 'true';
        //   qbModelObject.isSynchronized = rawObject.Synchronized == 'true';
        //   qbModelObject.objectState = rawObject.ObjectState;
        // }
        // else {

          
        //   console.log(qbModelObject[key])
        // }


        
      },function(){

        callback(null,qbModelObject)

      })


        
       



      

      

      //qbModelObject.employeeName = rawObject.Name;

>>>>>>> 1827df92267866a39b36ac7430772974258d23df

      cb()
    }

    function transformCOGSAccountRef(key,cogsAccountRef,cb){
    
      _qbObject.cogsAccount = cogsAccountRef.AccountId._ + ':' + cogsAccountRef.AccountId.idDomain
      _qbObject.cogsAccountName = cogsAccountRef.AccountName
      _qbObject.cogsAccountType = cogsAccountRef.AccountType

      cb()
    }

    function transformMoney(key,money,cb){

       _qbObject[firstCharLowerCase(key)] = money.Amount
       cb()
    }
<<<<<<< HEAD


    var handlers = {

      'Id' : transformIdType,
      'ExternalKey' : transformIdType,
      'ItemId' : transformIdType,
      'PayItemId' : transformIdType,
      'MetaData' : transformMetaData,
      'PartyReferenceId' : transformIdType,
      'Address' : transformEmbeddedObj,
      'JobId' : transformIdType,
      'CustomerId' : transformIdType,
      'Employee' : transformEmployeeType,
      'ExpenseAccountRef' : transformExpenseAccountRef,
      'PurchaseCost' : transformMoney,
      'UnitPrice' : transformMoney,
      'IncomeAccountRef' : transformIncomeAccountRef,
      'ItemParentId' : transformIdType,
      'cOGSAccountRef' : transformCOGSAccountRef


    }


    async.forEach(Object.keys(rawObject),function(key,cb){

      if(key in handlers){

          handlers[key](key,rawObject[key],cb)

         


      }

     else{

      _qbObject[firstCharLowerCase(key)] = rawObject[key]


      cb()
     }



    },function(){

      callback(null,_qbObject)

    })

    // console.log(Object.keys(rawObject))

    // if(rawObject){

    //   var qbModelObject = {}

    //   qbModelObject.id = rawObject.Id._
    //   qbModelObject.domain = rawObject.Id.idDomain;
    //   qbModelObject.createdAt = rawObject.MetaData.CreateTime;
    //   qbModelObject.updatedAt = rawObject.MetaData.LastUpdatedTime;
    //   qbModelObject.syncToken = rawObject.SyncToken;
    //   qbModelObject.externalKey = rawObject.Id._
    //   qbModelObject.externalDomain = rawObject.Id.idDomain;
    //   qbModelObject.isDraft = rawObject.Draft;
    //   qbModelObject.isSynchronized = rawObject.Synchronized;
    //   qbModelObject.objectState = rawObject.ObjectState;

    //   callback(null,qbModelObject);

    // }
    // else{
    //   callback('no object found')
    // }
=======
  },

  parseQbObjectProperty : function(qbModel,rawObject,key,callback){
    

    var _prop = rawObject[key]


    
   // console.log(qbModel)

  




    callback(null,_prop)




>>>>>>> 1827df92267866a39b36ac7430772974258d23df
  }



}

