import { combineReducers } from 'redux';
import notify from '../../app/duck/duck';
import users from '../../pages/users/duck/user-duck'

const reducer = combineReducers({
  users,
  notify,
});

export default reducer;
