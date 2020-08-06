import { combineReducers } from 'redux';
import users from './users';
import session from './session';

export default combineReducers({
    users,
    session,
});
