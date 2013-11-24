/*
	test with jasmine-node
*/
var net = require('net'),
	Echoserver = require('../echoserver'),
	echoecho;

describe('echoserver tests', function() {

	beforeEach(function() {
	     echoecho = new Echoserver();
	   });

	it("should respond with Hello World", function(done) {
		// runs & passes, but doesn't exit at the end as I'd expect
		var client = net.connect({port: 54321, host: 'localhost'}, function() { 
			//'connect' listener
		});
		client.on('data', function(data) {
		    expect(data.toString()).toEqual("Hello World");
		    done();
		});
		client.write('Hello World');
	});

});