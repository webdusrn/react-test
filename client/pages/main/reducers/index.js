import { combineReducers } from 'redux';

import session from './session';

const app = combineReducers({
    session
});

export default app;