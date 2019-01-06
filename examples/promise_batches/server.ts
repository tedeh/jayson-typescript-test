import jayson = require('../../../master/promise');
var _ = require('lodash');

var server = new jayson.Server({

  add: function(args:any) {
    return new Promise(function(resolve, reject) {
      var sum = _.reduce(args, function(sum:number, value:number) { return sum + value; }, 0);
      resolve(sum);
    });
  }

});

server.http().listen(3000);
