var express = require('express');
var path = require('path');
var reactViews = require('express-react-views');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// Routes
app.get('/', require('./routes/itemList'));
app.get('/items/:id', require('./routes/item'));

// Error-handling middleware
app.use(function (err, req, res, next) {
    if (!err) {
        return next();
    }
    console.log(err.stack);
    res.send("Sorry, there was an internal error");
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
