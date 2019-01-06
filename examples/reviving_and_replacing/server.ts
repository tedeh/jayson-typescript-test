import jayson = require('../../../master');
var shared = require('./shared');

// Set the reviver/replacer options
var options = {
  reviver: shared.reviver,
  replacer: shared.replacer
};

// create a server
var server = new jayson.Server({
  increment: function(args:any, callback:any) {
    args.counter.increment();
    callback(null, args.counter);
  }
}, options);

server.http().listen(3000);
