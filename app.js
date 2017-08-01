//obtained from https://github.com/ericf/express-handlebars
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

//sets the viewing engine as being run with the handlebars pkg?
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//gets the / route and renders home for that route as requested by Michael
app.get('/', function (req, res) {
    res.render('home');
});

//the listening port
app.listen(80, function () {
  console.log('Listening on port 80')
})
