var express = require('express');
var path = require('path');
var reactViews = require('express-react-views');

var routes = require('./routes');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', routes.index);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
