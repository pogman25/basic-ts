import { createAction, handleActions } from 'redux-actions';
import { IUserReducer } from './interfaces';

// Actions

export const USERS_REQUEST = 'app/USERS_REQUEST';
export const USERS_RECEIVE_SUCCESS = 'app/USERS_RECEIVE_SUCCESS';
export const USERS_RECEIVED = 'app/USERS_RECEIVED';

// Action Creators

// Users Actions
export const getUsers = createAction(USERS_REQUEST, () => true);
export const getUsersSuccess = createAction(USERS_RECEIVE_SUCCESS);
export const getUsersReceived = createAction(USERS_RECEIVED);

// Reducers

export const initialUsersReducer: IUserReducer = {
  isFetching: false,
  usersByIds: {},
  usersIds: [],
};

const reducers = handleActions(
  {
    [USERS_REQUEST]: state => ({ ...state, isFetching: true }),
    [USERS_RECEIVED]: state => ({ ...state, isFetching: false }),
    [USERS_RECEIVE_SUCCESS]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          usersByIds: { ...state.usersByIds, ...action.payload.usersByIds },
          usersIds: Array.from(new Set([...state.usersIds, ...action.payload.usersIds])),
        };
      }
      return state;
    },
  },
  initialUsersReducer,
);

export default reducers;
