import jayson = require('jayson');
var shared = require('./shared');

var client = jayson.Client.http({
  port: 3000,
  reviver: shared.reviver,
  replacer: shared.replacer
});

// create the object
var params = {
  counter: new shared.Counter(2)
};

// invoke "increment"
client.request('increment', params, function(err:any, response:any) {
  if(err) throw err;
  var result = response.result;
  console.log(
    result instanceof shared.Counter, // true
    result.count, // 3
    params.counter === result // false - result is a new object
  );
});
