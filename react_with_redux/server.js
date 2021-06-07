const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=10')
     .then(response => {
       res.send(response.data);
    });
});


app.listen(8087);
console.log('8087 is the magic port');