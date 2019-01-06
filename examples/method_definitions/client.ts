import jayson = require('jayson');

var client = jayson.Client.http({
  port: 3000
});

// invoke "sumCollect" with array
client.request('sumCollect', [3, 5, 9, 11], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 28
});

// invoke "sumCollect" with object
client.request('sumCollect', {a: 2, b: 3, c: 4}, function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 9
});

// invoke "sumDefault" with object missing some defined members
client.request('sumDefault', {b: 10}, function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 12
});

// invoke "isArray" with an Object
client.request('isArray', {a: 5, b: 2, c: 9}, function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // true
});

client.request('sum', [1, 2, 3], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 6
});
