import jayson = require('../../../master');

var server = new jayson.Server({
  multiply: function(args, callback) {
    callback(null, args[0] * args[1]);
  }
});

server.http().listen(3000, function() {
  console.log('Server listening on http://localhost:3000');
});
