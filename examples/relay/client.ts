import jayson = require('../../../master');

var client = jayson.Client.http({
  port: 3000 // the port of the frontend server
});

client.request('add', [5, 9], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 14
});
