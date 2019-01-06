import jayson = require('../../../master');

var methods = {
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
};

var server = new jayson.Server(methods, {
  router: function(method:any, params:any) {
    // regular by-name routing first
    if(typeof(this._methods[method]) === 'function') return this._methods[method];
    if(method === 'add_2') {
      var fn = (server.getMethod('add') as jayson.Method).getHandler();
      return new jayson.Method(function(args:any, done:any) {
        args.unshift(2);
        fn(args, done);
      });
    }
  }
});

server.http().listen(3000);
