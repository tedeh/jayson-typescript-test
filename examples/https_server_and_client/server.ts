import jayson = require('../../../master');

var server = new jayson.Server({
  multiply: function(args:any, callback:any) {
    callback(null, args[0] * args[1]);
  }
});

server.https().listen(3000, function() {
  console.log('Server listening on http://localhost:3000');
});
