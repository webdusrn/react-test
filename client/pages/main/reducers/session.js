import session from '../actions/session';

const sessionManagerInitialState = {
    session: {}
};

const sessionManager = (state = sessionManagerInitialState, action) => {
    switch(action.type) {
        case session.LOGIN:
            console.log(action.body);
            return Object.assign({}, state, {

            });
        case session.LOGOUT:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
};

export default sessionManager;