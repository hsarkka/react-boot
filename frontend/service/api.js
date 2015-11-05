var request = require('request');

exports.get = function (callback) {

    var url = 'http://localhost:8080/hello'
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
