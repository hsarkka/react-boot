var request = require('request');

var host = 'http://localhost:8080';

exports.getAll = function (callback) {

    var url = host + '/helloItems/';
    console.log("Getting " + url);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            callback(obj);
        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
    });

}


exports.getItem = function (id, callback) {

    var url = host + '/helloItems/' + id;
    console.log("Getting " + url);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            callback(obj);
        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
    });

}
