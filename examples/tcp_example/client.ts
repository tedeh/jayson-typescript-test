import jayson = require('../../../master');
var fs = require('fs');
var path = require('path');

var options = {
  port: 3000,
  host: 'localhost'
};

// create a client
var client = jayson.Client.tcp(options);

// invoke "add"
client.request('add', [1, 1], function(err:any, response:any) {
  if(err) throw err;
  console.log(response.result); // 2
});
