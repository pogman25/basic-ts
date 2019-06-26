import { IUserReducer } from 'src/pages/users/duck/interfaces';
import * as IAppInterfaces from 'src/app/duck/interfaces';

export interface IStore {
  users: IUserReducer;
  notify: IAppInterfaces.INotifyReducer;
}
