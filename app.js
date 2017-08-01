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

//the listening port. this command STARTS the server, and sets it to port 80 which is the default port for http
//the function() is a callback intentionally left blank. it is the callback for the function: app.listen
//read both for info on callbacks they are ESSENTIAL
//https://developers.google.com/web/fundamentals/getting-started/primers/promises
//http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
app.listen(80, function () {
  console.log('Listening on port 80')
})
