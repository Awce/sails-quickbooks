//runtime collection object for storing random stuff about server side collections, record counts, sync data, etc
var _ = require('lodash')


var qbCollection = function(collection){


	var qbCollection = {}

	qbCollection.meta = {
		recordCount : 0
	}

	return _.extend(qbCollection,collection);


}

module.exports = qbCollection