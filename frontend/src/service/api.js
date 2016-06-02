import axios from 'axios';

var API_HOST = typeof window === 'undefined' ? 'http://localhost:8080' : '/api';

exports.getAll = function (callback) {

    var url = API_HOST + '/helloItems/';
    console.log("Getting " + url);

    axios.get(url).then(({ status, data, headers }) => {
        if (status === 200) {
            callback(null, data);
        } else {
            console.log("Non-OK status: " + status);
        }
    }).catch(function (response) {
        console.log("Error: " + response);
    });

}


exports.getItem = function (id, callback) {

    var url = API_HOST + '/helloItems/' + id;
    console.log("Getting " + url);

    axios.get(url).then(({ status, data, headers }) => {
        if (status === 200) {
            callback(null, data);
        } else {
            console.log("Non-OK status: " + status);
        }
    }).catch(function (response) {
        console.log("Error: " + response);
    });

}
