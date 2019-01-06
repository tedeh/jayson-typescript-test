import jayson = require('../../../master');

var server = new jayson.Server({
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
});

var client = new jayson.Client(server);

var batch = [
  client.request('does_not_exist', [10, 5]),
  client.request('add', [1, 1]),
  client.request('add', [0, 0], null) // a notification
];

client.request(batch, function(err:any, errors:any, successes:any) {
  if(err) throw err;
  console.log('errors', errors); // array of requests that errored
  console.log('successes', successes); // array of requests that succeeded
});

client.request(batch, function(err:any, responses:any) {
  if(err) throw err;
  console.log('responses', responses); // all responses together
});
