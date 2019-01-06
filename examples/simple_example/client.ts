import jayson = require('jayson');

// create a client
var client = jayson.Client.http({
  port: 3000
});

// invoke "add"
client.request('add', [1, 1], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 2
});
