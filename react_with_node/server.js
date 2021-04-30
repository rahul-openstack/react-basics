var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});


app.listen(8087);
console.log('8087 is the magic port');