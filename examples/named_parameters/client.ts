import jayson = require('jayson');

var client = jayson.Client.http({
  port: 3000
});

client.request('add', {b: 1, a: 2}, function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 3!
});
