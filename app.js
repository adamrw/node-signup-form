var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
	console.log('yeeee');
});

app.post('/formsubmit', function(req, res) {
	res.render();
	console.log('hoooray');
});
var server = app.listen(8622, function() {
	console.log('Express server listening on port ' + server.address().port);
});
