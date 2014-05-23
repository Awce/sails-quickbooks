var assert = require("assert")






describe('testStream', function () {

	it('should not hang or encounter any errors', function (cb) {
		

		cb(null,'Awwww chyeaaa')


	});

	it('should create a new qbStreamClient', function (cb) {

		this.timeout(100000);
		
		var QBStreamClient = require('../src/qbStreamClient.js')
		
		var QBLogger = require('../src/qbLog.js')
		
		var client = new QBStreamClient({modelKey : 'Employee', chunkSize : 500})

		client.auth(_intuitConfig)
		

		


		var logger = new QBLogger()
		
		client.on('end',function(data){
			//console.log(data)
			
			console.log('count : ' + logger.count)
			cb()
			
		})
		//cb(null,client)

		client.pipe(logger)




	});

	// e.g.
	// it('should create a mysql connection pool', function () {})
	// it('should create an HTTP connection pool', function () {})
	// ... and so on.
});