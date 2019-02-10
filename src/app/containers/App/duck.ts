import { createAction, handleActions, Action } from 'redux-actions';
import { IPeopleReducer } from './interfaces';
import { Reducer } from 'react';
import { AnyAction } from 'redux';

// Actions

export const PEOPLE_REQUEST = 'app/PEOPLE_REQUEST';
export const PEOPLE_RECEIVE_SUCCESS = 'app/PEOPLE_RECEIVE_SUCCESS';
export const PEOPLE_RECEIVED = 'app/PEOPLE_RECEIVED';
export const GET_TOTAL_COUNT = 'app/GET_TOTAL_COUNT';
export const SET_NEXT_PEOPLE_LINK = 'app/SET_NEXT_PEOPLE_LINK';

// Action Creators

// People Actions
export const getPeople = createAction(PEOPLE_REQUEST, () => true);
export const getPeopleSuccess = createAction(PEOPLE_RECEIVE_SUCCESS);
export const getPeopleReceived = createAction(PEOPLE_RECEIVED);
export const setTotalCount = createAction(GET_TOTAL_COUNT);
export const setNextLink = createAction(SET_NEXT_PEOPLE_LINK);

// Reducers

export const initialPeopleReducer: IPeopleReducer = {
  isFetching: false,
  people: [],
  totalCount: 0,
  nextPage: 1,
};

const reducers: Reducer<IPeopleReducer, AnyAction> = handleActions(
  {
    [PEOPLE_REQUEST]: state => ({ ...state, isFetching: true }),
    [PEOPLE_RECEIVED]: state => ({ ...state, isFetching: false }),
    [PEOPLE_RECEIVE_SUCCESS]: (state, action: AnyAction) => ({
      ...state,
      people: [...state.people, ...action.payload],
    }),
    [GET_TOTAL_COUNT]: (state, action: Action<number>) => ({
      ...state,
      totalCount: action.payload || 0,
    }),
    [SET_NEXT_PEOPLE_LINK]: (state, action: Action<number>) => ({
      ...state,
      totalCount: action.payload || 0,
    }),
  },
  initialPeopleReducer,
);

export default reducers;
