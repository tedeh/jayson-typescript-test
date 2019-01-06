import jayson = require('jayson');

var server = new jayson.Server({
  add: function(a:any, b:any, callback:any) {
    callback(null, a + b);
  }
}, {
  collect: false // don't collect params in a single argument
});

server.http().listen(3000);
