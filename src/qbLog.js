var stream = require('stream')
var util = require('util')

function QBLogger (cb) {
  stream.Writable.call(this, { objectMode : true });


  this.count = 0

  this.cb = cb;


}

util.inherits(QBLogger, stream.Writable);

QBLogger.prototype._write = function (data, encoding, callback) {
  
 	var self = this;

 	console.log(data)

 	self.count++

 	callback()

};



module.exports = QBLogger;