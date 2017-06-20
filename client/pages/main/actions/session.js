import axios from 'axios';

const URL = '/api/accounts/session';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

function sessionPost (body, callback) {
    axios.post(URL, body).then(function (data) {
        callback(data.status, data.data);
    }).catch(function (error) {
        callback(400, error);
    });
}

function login(session) {
    return {
        type: LOGIN,
        session: session
    };
}

function logout() {
    return {
        type: LOGOUT
    };
}

export default {
    LOGIN: LOGIN,
    LOGOUT: LOGOUT,
    login: login,
    logout: logout,
    sessionPost: sessionPost
};