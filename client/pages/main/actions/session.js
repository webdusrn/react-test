const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

function login(body) {
    return {
        type: LOGIN,
        body: body
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
    logout: logout
};