import jayson = require('jayson');

var cors = require('cors');
var connect = require('connect');
var jsonParser = require('body-parser').json;
var app = connect();

var server = new jayson.Server({
  myNameIs: function(args:any, callback:any) {
    callback(null, 'Your name is: ' + args.name);
  }
});

app.use(cors({methods: ['POST']}));
app.use(jsonParser());
app.use(server.middleware());

app.listen(3000);
