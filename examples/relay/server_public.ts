import jayson = require('../../../master');

// create a server where "add" will relay a localhost-only server
var server = new jayson.Server({
  add: jayson.Client.http({
    port: 3001
  })
});

// let the frontend server listen to *:3000
server.http().listen(3000);
