import jayson = require('../../../master');

var server = new jayson.Server({
  ping: function(args, callback) {
    // do something, do nothing
    callback();
  }
});

server.http().listen(3000);
