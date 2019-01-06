import jayson = require('../../../master');

var client = jayson.Client.http({
  port: 3000
});

// the third parameter is set to "null" to indicate a notification
client.request('ping', [], null, function(err:any) {
  if(err) throw err;
  console.log('ok'); // request was received successfully
});
