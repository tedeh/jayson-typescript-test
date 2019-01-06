import jayson = require('jayson');

var server = new jayson.Server({
  ping: function(args:any, callback:any) {
    // do something, do nothing
    callback();
  }
});

server.http().listen(3000);
