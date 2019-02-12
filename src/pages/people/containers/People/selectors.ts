import { createSelector } from 'reselect';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore) => store.people;

const peopleByName = createSelector(
  appReducer,
  i => i.peopleByName,
);

const peopleNames = createSelector(
  appReducer,
  i => i.peopleNames,
);

export const getPeopleFromState = createSelector(
  peopleNames,
  peopleByName,
  (names, byName) => names.map(i => byName[i]),
);

export const getNextPage = createSelector(
  appReducer,
  i => i.nextPage,
);

export const getTotalCountFromState = createSelector(
  appReducer,
  i => i.totalCount,
);

export const getIsFetchingFromState = createSelector(
  appReducer,
  i => i.isFetching,
);
