import { combineReducers, AnyAction, Reducer } from 'redux';
import notify from 'src/app/containers/App/duck';
import people from 'src/pages/people/containers/People/duck';
import { IStore } from './interfaces';
import { IPeopleReducer } from 'src/pages/people/containers/People/interfaces';
import { INotifyReducer } from 'src/app/containers/App/interfaces';

const reducer = combineReducers<IStore, AnyAction>({
  people: people as Reducer<IPeopleReducer, AnyAction>,
  notify: notify as Reducer<INotifyReducer, AnyAction>,
});

export default reducer;
