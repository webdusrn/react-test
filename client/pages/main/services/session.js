import axios from 'axios';

export function getSession (callback) {
    return axios.get('/api/accounts/session').then(function (data) {
        callback(data.status, data.data);
    }).catch(function (error) {
        callback(error);
    });
}

export function postSession (body, callback) {
    return axios.post('/api/accounts/session', body).then(function (data) {
        callback(data.status, data.data);
    }).catch(function (error) {
        callback(error);
    });
}