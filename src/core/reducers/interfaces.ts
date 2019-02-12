import * as IPeopleInterfaces from 'src/pages/people/interfaces';
import * as IAppInterfaces from 'src/app/interfaces';

export interface IStore {
  people: IPeopleInterfaces.IPeopleReducer;
  notify: IAppInterfaces.INotifyReducer;
}
