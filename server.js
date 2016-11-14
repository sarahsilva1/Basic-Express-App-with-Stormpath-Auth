var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(stormpath.init(app, {
  expand: {
    customData: true
  }
}));[]
// not this yet
app.get('/', stormpath.getUser, function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

// not this yet

app.use('/profile',stormpath.loginRequired,require('./profile')());


app.on('stormpath.ready',function(){
  console.log('Hey, your Stormpath App is ready on port 3000.');
});


app.listen(3000);
