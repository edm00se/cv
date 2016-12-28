var express = require('express');
var app = express();
var compression = require('compression');
var host = (process.env.VCAP_APP_HOST || 'localhost');
var port = (process.env.PORT || 3000);

// enables and instantiates express-toobusy, which keeps it from melting under HIGH pressure
app.use(require('express-toobusy')());

// compress responses
app.use(compression());

// makes static site SEO friendly for Google, etc.
app.use(require('prerender-node'));

// serve static assets from /public
app.use(express.static('public'));

// require('./keep-alive');

app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
});
