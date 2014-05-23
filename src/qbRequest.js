var handlebars = require('handlebars')
var nodeuuid = require('node-uuid')
//var js2xml = require('data2xml')({"undefined" : "empty", "null" : "empty"});



var QBRequest = function(options){
  
      this.requestGUID = nodeuuid.v4().replace(/-/g, "");
      this.basePath = 'https://services.intuit.com/sb/' + options.modelKey.toLowerCase() + '/v2/'
      this.xTemplate = handlebars.compile('<{{modelName}}Query xmlns="http://www.intuit.com/sb/cdm/v2"><IteratorId>{{requestGUID}}</IteratorId><ChunkSize>{{chunkSize}}</ChunkSize><CustomFieldEnable>true</CustomFieldEnable></{{modelName}}Query>')
      this.modelKey = options.modelKey
      this.headers = options.headers || {'Content-Type' :'text/xml'}
      this.chunkSize = options.batchSize || 500;
    //  console.log(oauthSig)
      
    

}

QBRequest.prototype.request = function(auth){

  var self = this;

  var _modelKey = this.modelKey
  var _request = {}

  _request.url = this.basePath + auth.realm
  
  _request.oauth = {
    token: auth.token,
    token_secret: auth.verifier,
    consumer_key: auth.consumer_key,
    consumer_secret: auth.consumer_secret,
  }

  var _xdata = {
    modelName : _modelKey,
    requestGUID : self.requestGUID,
    chunkSize : self.chunkSize

  }




  _request.body = this.xTemplate(_xdata)
  _request.headers = this.headers;

  return _request

}







 module.exports = QBRequest;