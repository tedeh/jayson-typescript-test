import jayson = require('../../../master');

var client = jayson.Client.http({
  port: 3000
});

client.request('myNameIs', {name: 'Mr. Creosote'}, function(err:any, error:any, result:any) {
  if(err) throw err;
  console.log(result); // 'Your name is: Mr. Creosote'
});
