function testZero() {
	assertNotNull(org.hisrc.jsonix.tests.zero);
	var context = new Jsonix.Context([ org.hisrc.jsonix.tests.zero ]);
	var marshaller = context.createMarshaller();
}

function testSubstitutionMembers() {
	var context = new Jsonix.Context([ org.hisrc.jsonix.tests.zero ]);
	var substitutionMemebers = context.getSubstitutionMembers(new Jsonix.XML.QName('base'));
	assertEquals(1, substitutionMemebers.length);
}

function testString0() {
	function roundtrip(resource, zero) {
		var context = new Jsonix.Context([ org.hisrc.jsonix.tests.zero ]);
		var unmarshallerOne = context.createUnmarshaller();
		var unmarshallerTwo = context.createUnmarshaller();
		var marshallerOne = context.createMarshaller();
		var marshallerTwo = context.createMarshaller();
		logger.debug('Unmarshalling [' + resource + '].');
		unmarshallerOne.unmarshalURL(resource, function(one) {
			assertTrue('Roundtrip [' + resource + '] failed in phase one. Objects must be equal.', Jsonix.Util.Type.equals(zero, one), function(text) {
				logger.error(text);
			});
			var documentOne = marshallerOne.marshalDocument(one);
			var two = unmarshallerTwo.unmarshalDocument(documentOne);
			var stringTwo = marshallerTwo.marshalString(two);
			logger.debug(stringTwo);
			assertTrue('Roundtrip [' + resource + '] failed in phase two. Objects must be equal.', Jsonix.Util.Type.equals(one, two), function(text) {
				logger.error(text);
			});
		}, null, {
			async : false
		});
	}

	var resources = org.hisrc.jsonix.tests.zero.Data;

	for ( var name in resources) {
		if (resources.hasOwnProperty(name)) {
			roundtrip(name, resources[name]);
		}
	}
}