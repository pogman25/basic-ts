import { combineReducers } from 'redux';
import notify from '../../app/duck/noty-duck';
import locations from '../../app/duck/locations-duck';
import stack from '../../app/duck/stack-duck';
import users from '../../pages/users/duck/user-duck';
import { IStore } from './interfaces';

const reducer = combineReducers<IStore>({
  users,
  notify,
  locations,
  stack,
});

export default reducer;
