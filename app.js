var express = require('express');
var app = express();

app.set('vew engine', 'ejs');


// express route
app.get('/', function(req, res) {
	res.render('index.ejs');
});

//error handler, catch other routes
app.get('*', function(req, res) {
	res.send('<h1>Invalid Page</h1>');
})


// server running
app.listen(3000, function() {
	console.log('server running on port 3000');
});
