var xml2js = require('xml2js').parseString;
var util = require('util');

var Parser = module.exports = {

  /**
  Parse the raw response from the IDS API
  **/
  parseResponse : function(collection,model,response,body,callback){

    


    console.log(collection)

    //console.log(model)
    switch(response.statusCode) {

      //successful REST request/response...
      case 200:

      xml2js(body, {mergeAttrs: true,explicitArray : false },function (err, result) {
    //    console.log(result)
        var objects = result.RestResponse[collection.config.qbCollectionKey][collection.config.qbObjectKey]

        async.map(objects,Parser.parseQBObject,function(err,objs){

              console.log(objs.length)
                callback(null,objs)



            })

            //qbCache.cacheObjects(model,objects)

          

        })

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
  }



}

