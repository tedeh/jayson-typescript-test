import jayson = require('jayson');

var client = jayson.Client.https({
  port: 3000
});

client.request('multiply', [5, 5], function(err, error, result) {
  if(err) throw err;
  console.log(result); // 25
});
