import { combineReducers } from 'redux';
import userReducers from './user/user.reducer'

export default combineReducers({
    user: userReducers
})