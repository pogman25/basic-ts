import { createAction, handleActions } from 'redux-actions';
import { IStackReducer } from './interfaces';

// Actions

export const STACK_REQUEST = 'STACK_REQUEST';
export const STACK_RECEIVE_SUCCESS = 'STACK_RECEIVE_SUCCESS';
export const STACK_RECEIVED = 'STACK_RECEIVED';

// Action Creators

// Locations Actions
export const fetchStack = createAction(STACK_REQUEST, () => true);
export const fetchStackSuccess = createAction(STACK_RECEIVE_SUCCESS);
export const fetchStackReceived = createAction(STACK_RECEIVED);

// Reducers

export const initialStackReducer: IStackReducer = {
  isFetching: false,
  stackByIds: {},
  stackIds: [],
};

const reducers = handleActions(
  {
    [STACK_REQUEST]: state => ({ ...state, isFetching: true }),
    [STACK_RECEIVED]: state => ({ ...state, isFetching: false }),
    [STACK_RECEIVE_SUCCESS]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          stackByIds: { ...state.stackByIds, ...action.payload.stackByIds },
          stackIds: Array.from(new Set([...state.stackIds, ...action.payload.stackIds])),
        };
      }
      return state;
    },
  },
  initialStackReducer,
);

export default reducers;
