import jayson = require('../../../master');
var fs = require('fs');
var path = require('path');

var options = {
};

// create a server
var server = new jayson.Server({
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
});

// Bind a http interface to the server and let it listen to localhost:3000
server.tcp(options).listen(3000);
