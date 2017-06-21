import api from '../services/api';

const URL = '/api/accounts/session';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';

function login(dispatch, body) {
    dispatch({
        type: LOGIN_REQUEST
    });
    var request = api(URL);
    request.post(body).then(data => {
        if (data.status == 200) {
            dispatch({
                type: LOGIN_SUCCESS,
                session: data.data
            });
        } else {
            dispatch({
                type: REQUEST_FAIL,
                data: data.data
            });
        }
    });
}

function logout(dispatch) {
    dispatch({
        type: LOGOUT_REQUEST
    });
    var request = api(URL);
    request.del().then(data => {
        if (data.status == 204) {
            dispatch({
                type: LOGOUT_SUCCESS,
                session: data.data
            });
        } else {
            dispatch({
                type: REQUEST_FAIL,
                data: data.data
            });
        }
    });
}

export default {
    URL: URL,
    LOGIN_REQUEST: LOGIN_REQUEST,
    LOGIN_SUCCESS: LOGIN_SUCCESS,
    LOGOUT_REQUEST: LOGOUT_REQUEST,
    LOGOUT_SUCCESS: LOGOUT_SUCCESS,
    REQUEST_FAIL: REQUEST_FAIL,
    login: login,
    logout: logout
};