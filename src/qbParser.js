var xml2js = require('xml2js').parseString;
var util = require('util');

module.exports = {


  parseResponse : function(model,response,body,callback){


  switch(response.statusCode) {
    
    //successful REST request/response...
    case 200:
  
        xml2js(body, {mergeAttrs: true,explicitArray : false},function (err, result) {


            var objects = result.RestResponse[model.config.responseCollectionKey][model.config.modelKey]

            

            async.map(objects,function(obj,cb){


              console.log(obj)
              cb(null,{id : obj.Id._})


            },function(err,objs){

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





}



}

