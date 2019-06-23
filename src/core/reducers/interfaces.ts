import { IUserReducer } from 'src/pages/catalog/duck/interfaces';
import * as IPeopleInterfaces from 'src/pages/people/interfaces';
import * as IAppInterfaces from 'src/app/interfaces';

export interface IStore {
  users: IUserReducer;
  people: IPeopleInterfaces.IPeopleReducer;
  notify: IAppInterfaces.INotifyReducer;
}
