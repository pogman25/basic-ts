import { createSelector } from 'reselect';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore) => store.notify;

export const getError = createSelector(
  appReducer,
  i => i.error,
);
export const getSuccess = createSelector(
  appReducer,
  i => i.success,
);
