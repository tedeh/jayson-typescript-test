import jayson = require('../../../master/promise');
var _ = require('lodash');

var server = new jayson.Server({

  add: function(args:any) {
    return new Promise(function(resolve, reject) {
      var sum = _.reduce(args, function(sum:any, value:any) { return sum + value; }, 0);
      resolve(sum);
    });
  },

  // example on how to reject
  rejection: function(args:any) {
    return new Promise(function(resolve, reject) {
      // server.error just returns {code: 501, message: 'not implemented'}
      reject(server.error(501, 'not implemented'));
    });
  }

});

server.http().listen(3000);
