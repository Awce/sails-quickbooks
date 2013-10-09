var xml2js = require('xml2js').parseString;
var util = require('util');

var Parser = module.exports = {

  /**
  Parse the raw response from the IDS API
  **/
  parseResponse : function(model,response,body,callback){

    switch(response.statusCode) {

      //successful REST request/response...
      case 200:

      xml2js(body, {mergeAttrs: true,explicitArray : false},function (err, result) {

        var objects = result.RestResponse[model.config.responseCollectionKey][model.config.modelKey]

        async.map(objects,Parser.parseBaseObject,function(err,objs){

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
    case 401:
  
      break;

    default:
    // error
      
      break;
    }
  },

  parseBaseObject : function(rawObject,callback){

    if(rawObject){

      var qbModelObject = {}

      qbModelObject.id = rawObject.Id._
      qbModelObject.domain = rawObject.Id.idDomain;
      qbModelObject.createdAt = rawObject.MetaData.CreateTime;
      qbModelObject.updatedAt = rawObject.MetaData.LastUpdatedTime;
      qbModelObject.syncToken = rawObject.SyncToken;
      qbModelObject.externalKey = rawObject.Id._
      qbModelObject.externalDomain = rawObject.Id.idDomain;
      qbModelObject.isDraft = rawObject.Draft == 'true';
      qbModelObject.isSynchronized = rawObject.Synchronized == 'true';
      qbModelObject.objectState = rawObject.ObjectState;


      qbModelObject.employeeName = rawObject.Name;

      callback(null,qbModelObject);

    }
    else{
      callback('no object found')
    }
  }



}

