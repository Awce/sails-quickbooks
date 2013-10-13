var Jsonix = require('jsonix').Jsonix;
var Zero = require('./Zero/Mappings').org_hisrc_jsonix_samples_zero;
module.exports =
{
	"Context" : function (test)
	{
		var context = new Jsonix.Context([ Zero ]);
		test.equal(19, context.elementInfos.length);
		test.done();
	}
};