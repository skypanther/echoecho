/*
	test with jasmine-node
*/
var net = require('net'),
	Echoclient = require('../echoclient'),
	echoclient;

describe('echoclient tests', function() {

	beforeEach(function() {
	});

	it("should respond with Hello World", function(done) {
		// passes if server is running
		echoclient = new Echoclient();
		echoclient.on('data', function(data) {
		    expect(data.toString()).toEqual("Hello World");
		    done();
		});
		echoclient.write('Hello World');
	});

});