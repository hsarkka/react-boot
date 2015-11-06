var api = require('../service/api.js')


var callback = function (req, res) {

    api.getItem(req.params.id, function (obj) {

        res.render('item', {
            title: obj.name,
            item: obj
        });

    });

};

module.exports = callback;
