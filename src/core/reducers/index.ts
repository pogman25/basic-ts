import { combineReducers, AnyAction, Reducer } from 'redux';
import people from '../../app/containers/App/duck';
import notify from '../../app/containers/Notification/duck';
import { IStore } from './interfaces';
import { IPeopleReducer } from 'src/app/containers/App/interfaces';
import { INotifyReducer } from 'src/app/containers/Notification/interfaces';

const reducer = combineReducers<IStore, AnyAction>({
  people: people as Reducer<IPeopleReducer, AnyAction>,
  notify: notify as Reducer<INotifyReducer, AnyAction>,
});

export default reducer;
