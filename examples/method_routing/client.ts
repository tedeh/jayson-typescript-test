import jayson = require('../../../master');

// create a client
var client = jayson.Client.http({
  port: 3000
});

// invoke "add_2"
client.request('add_2', [3], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 5!
});
