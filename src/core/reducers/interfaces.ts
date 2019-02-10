import { IPeopleReducer } from '../../app/containers/App/interfaces';
import { INotifyReducer } from 'src/app/containers/Notification/interfaces';

export interface IStore {
  people: IPeopleReducer;
  notify: INotifyReducer;
}
