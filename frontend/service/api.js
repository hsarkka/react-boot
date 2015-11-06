var request = require('request');

var HOST = 'http://localhost:8080';

exports.getAll = function (callback) {

    var url = HOST + '/helloItems/';
    console.log("Getting " + url);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            callback(null, obj);
        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode);
            var error = new Error(response.statusCode);
            callback(error, null);
        }
    });

}


exports.getItem = function (id, callback) {

    var url = HOST + '/helloItems/' + id;
    console.log("Getting " + url);

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = JSON.parse(body);
            callback(null, obj);
        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode);
            var error = new Error(response.statusCode);
            callback(error, null);
        }
    });

}
