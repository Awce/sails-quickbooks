var Jsonix = require('../jsonix').Jsonix;
module.exports =
{
	"QName": function(test) {
		test.equal("test", (new Jsonix.XML.QName("test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test")).key);
		test.equal("{urn:test}test:test", (new Jsonix.XML.QName("urn:test", "test", "test")).toString());
		test.equal("{urn:test}test", (new Jsonix.XML.QName("urn:test", "test", "test")).key);
		test.done();
	},
	"Output": function(test) {
		var output = new Jsonix.XML.Output();
		var doc = output.writeStartDocument();
		output.writeStartElement(new Jsonix.XML.QName("test"));
		output.writeAttribute(new Jsonix.XML.QName("test"), 'test');
		output.writeCharacters('test');

		output.writeEndElement();
		output.writeEndDocument();
		test.notEqual(null, doc.documentElement);
		var serializedDocument = Jsonix.DOM.serialize(doc);
		console.log(serializedDocument);
		test.done();
	},
	"Input":
	{
		"One": function(test) {
			var doc = Jsonix.DOM
					.parse('<!DOCTYPE a [<!ENTITY g2 "g2" >]><a>b<c>d</c>e<f> <g>h</g><![CDATA[g1]]>&g2;</f><!-- a --></a>');
			test.notEqual(null, doc);
			{
				var input = new Jsonix.XML.Input(doc);
                
				var result = [];
				while (input.hasNext()) {
					var eventType = input.next();
					var name = input.getName();
					result.push(eventType);
				}
				// entity reference 9
				// attribute 10
				// dtd 11
				// namespace 13
				// NOTATION_DECLARATION 14
				// entity declaration 15
                
				var etalon = [ 7, 1, 4, 1, 4, 2, 4, 1, 6, 1, 4, 2, 12, 4, 2, 5, 2, 8 ];
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
				}
			}
			{
				var input = new Jsonix.XML.Input(doc.documentElement);
                
				var result = [];
				while (input.hasNext()) {
					var eventType = input.next();
					result.push(eventType);
				}
                
				var etalon = [ 1, 4, 1, 4, 2, 4, 1, 6, 1, 4, 2, 12, 4, 2, 5, 2 ];
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
				}
			}
			test.done();
		},
		"Two": function(test) {
			var doc = Jsonix.DOM
					.parse('<a>b<c>d</c>e<f> <g><![CDATA[h0]]> <!-- ... -->h<?pi?> <![CDATA[h1]]></g><![CDATA[g1]]>g2</f><!-- a --></a>');
			{
				var input = new Jsonix.XML.Input(doc.documentElement);
                
				var result = [];
				// input.next();
				while (input.hasNext()) {
					var eventType = input.nextTag();
					var name = input.getName();
					result.push(eventType);
				}
                
				var etalon = [ 1, 1, 2, 1, 1, 2, 2, 2 ];
                
				test.equal(etalon.length, result.length);
				for ( var index = 0; index < result.length; index++) {
					test.equal(etalon[index], result[index]);
				}
			}
			{
				var input = new Jsonix.XML.Input(doc.documentElement);
				input.nextTag();
				input.nextTag();
				input.nextTag();
				input.nextTag();
				input.nextTag();
				test.equal('h0 h h1', input.getElementText());
			}
			test.done();
		}
	}
};