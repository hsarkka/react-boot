import axios from 'axios';

var API_HOST = typeof window === 'undefined' ? 'http://localhost:8080' : '/api';

exports.getAll = function (callback) {
    var url = API_HOST + '/helloItems/';
    getUrl(url, callback);
}


exports.getItem = function (id, callback) {
    var url = API_HOST + '/helloItems/' + id;
    getUrl(url, callback);
}

function getUrl(url, callback) {
    console.log("Getting " + url);

    axios.get(url).then(({ status, data, headers }) => {
        if (status === 200) {
            callback(null, data);
        } else {
            console.log("Non-OK status: " + status);
        }
    }).catch(function (response) {
        if (response instanceof Error) {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', response.message);
        } else {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Response: " + JSON.stringify(response.data));
            console.log("Status: " + response.status);
            //console.log(response.headers);
            //console.log(response.config);
        }
    });
}
