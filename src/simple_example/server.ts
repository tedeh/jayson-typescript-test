import jayson = require('jayson');

// create a server
var server = new jayson.Server({
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
});

server.http().listen(3000);
