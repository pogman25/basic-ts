import { combineReducers, AnyAction, Reducer } from 'redux';
import people from 'src/pages/people/containers/People/duck';
import { IPeopleReducer } from 'src/pages/people/containers/People/interfaces';
import notify from '../../app/duck';
import users from '../../pages/catalog/duck/duck'
import { INotifyReducer } from '../../app/interfaces';

const reducer = combineReducers({
  people: people as Reducer<IPeopleReducer, AnyAction>,
  users,
  notify: notify as Reducer<INotifyReducer, AnyAction>,
});

export default reducer;
