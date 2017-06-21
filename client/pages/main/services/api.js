import axios from 'axios';

function Api (url) {
    this.url = url;
}

Api.prototype.post = function (body) {
    return axios.post(this.url, body).then(response => {
        return response;
    }).catch(error => {
        return {status: 400, data: error};
    });
};

Api.prototype.get = function (query) {
    return axios.get(this.url + generateQuery(query));
};

Api.prototype.del = function () {
    return axios({
        method: 'delete',
        url: this.url
    });
};

function generateQuery (query) {
    if (query && query instanceof Object) {
        const keys = Object.keys(query);
        if (keys.length) {
            let queryString = '?';
            keys.forEach(function (key, index) {
                if (index) queryString += '&';
                queryString += key + '=' + query[key];
            });
            return queryString;
        } else {
            return '';
        }
    } else {
        return '';
    }
}

function generate (url) {
    return new Api(url);
}

export default generate;