import jayson = require('../../../master');

var server = new jayson.Server({
  add: function(a, b, callback) {
    callback(null, a + b);
  }
}, {
  collect: false // don't collect params in a single argument
});

server.http().listen(3000);
