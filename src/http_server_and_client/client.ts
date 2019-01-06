import jayson = require('jayson');

var client = jayson.Client.http({
  port: 3000
});

client.request('multiply', [5, 5], function(err:any, error:any, result:any) {
  if(err) throw err;
  console.log(result); // 25
});
