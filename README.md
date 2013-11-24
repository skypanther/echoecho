# echoecho

Simple node.js echo server and client

## Instructions

Install with:

```
[sudo] npm install git+https://git@github.com/skypanther/echoecho.git
```

### Echo server

Run as a standalone echo server:
```
Usage: ~/node_modules/echoecho/echoserver [-p port_number] [-v]
  Type `q` [Enter] to exit

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -p, --port [portnumber]  Specify port on which to listen [54321]
    -v, --verbose            Log data received to the console
```

Or, require as a module:
```
var Echoserver = require('echoserver');
echoecho = new Echoserver([port], [verbose]);

```

### Echo client

Note, the echo server must be running _first_. Then, run as a standalone echo client:
```
Usage: ~/node_modules/echoecho/echoclient.js [-p port_number] [-H ip_address]

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -p, --port [portnumber]  Specify port on which to send [54321]
    -H, --host [ip_address]  Specify IP address of the server [54321]
```

Or, require as a module:
```
var Echoclient = require('echoclient');
echoclient = new Echoclient();
echoclient.write('string'); // is echoed back by the server
echoclient.on('data', function(data) {
    console.log(data.toString());
});
```

## Unit tests

Included are simple tests for the server and client intended to be used with jasmine-node (other Jasmine packages might work). The following should test the server and client, respectively. Note, the server doesn't quit when the test is complete. Press Ctrl-C to close it.

```
jasmine-node ~/node_modules/echoecho/spec/echoserverSpec.js
jasmine-node ~/node_modules/echoecho/spec/echoclientSpec.js
```



# Author
Tim Poulsen, @skypanther

## License

MIT License

Copyright © 2013, Tim Poulsen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
