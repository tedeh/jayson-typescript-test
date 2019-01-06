import jayson = require('../../../master');

var server = new jayson.Server({
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
});

// let the backend listen to *:3001
server.http().listen(3001);
