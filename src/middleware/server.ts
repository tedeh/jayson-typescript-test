import jayson = require('jayson');
var jsonParser = require('body-parser').json;
var connect = require('connect');
var app = connect();

var server = new jayson.Server({
  add: function(args:any, callback:any) {
    callback(null, args[0] + args[1]);
  }
});

// parse request body before the jayson middleware
app.use(jsonParser());
app.use(server.middleware());

app.listen(3000);
