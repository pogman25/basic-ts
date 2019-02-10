import { createSelector } from 'reselect';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore) => store.people;

export const getPeopleFromState = createSelector(
	appReducer,
	i => i.people
);

export const getNextPage = createSelector(
	appReducer,
	i => i.nextPage
);

export const getTotalCountFromState = createSelector(
	appReducer,
	i => i.totalCount
);

export const getIsFetchingFromState = createSelector(
	appReducer,
	i => i.isFetching
);
