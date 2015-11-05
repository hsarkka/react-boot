var api = require('../service/api.js')


exports.index = function (req, res) {

    api.get(function (data) {

        res.render('index', {
            title: "Hello from React-Boot-Hello",
            items: data
        });

    });

};
