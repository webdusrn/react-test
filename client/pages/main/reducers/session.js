import session from '../actions/session';

const sessionManagerInitialState = {
    session: window.session
};

const sessionManager = (state = sessionManagerInitialState, action) => {
    switch(action.type) {
        case session.LOGIN_REQUEST:
            return Object.assign({}, state, {});
        case session.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                session: action.session
            });
        case session.REQUEST_FAIL:
            return Object.assign({}, state, {});
        case session.LOGOUT_REQUEST:
            return Object.assign({}, state, {});
        case session.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                session: {}
            });
        default:
            return state;
    }
};

export default sessionManager;