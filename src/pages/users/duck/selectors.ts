import { IStore } from 'src/core/reducers/interfaces';

export const getUserState = (store: IStore) => {
  return {
    users: store.users.usersIds.map(i => store.users.usersByIds[i]),
  };
};
