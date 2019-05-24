import { combineReducers, AnyAction, Reducer } from 'redux';
import people from 'src/pages/people/containers/People/duck';
import { IPeopleReducer } from 'src/pages/people/containers/People/interfaces';
import notify from '../../app/duck';
import { INotifyReducer } from '../../app/interfaces';
import { IStore } from './interfaces';

const reducer = combineReducers<IStore, AnyAction>({
  people: people as Reducer<IPeopleReducer, AnyAction>,
  notify: notify as Reducer<INotifyReducer, AnyAction>,
});

export default reducer;
