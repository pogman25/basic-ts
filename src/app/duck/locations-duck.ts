import { createAction, handleActions } from 'redux-actions';
import { ILocationsReducer } from './interfaces';

// Actions

export const LOCATIONS_REQUEST = 'LOCATIONS_REQUEST';
export const LOCATIONS_RECEIVE_SUCCESS = 'LOCATIONS_RECEIVE_SUCCESS';
export const LOCATIONS_RECEIVED = 'LOCATIONS_RECEIVED';

// Action Creators

// Locations Actions
export const fetchLocations = createAction(LOCATIONS_REQUEST, () => true);
export const fetchLocationsSuccess = createAction(LOCATIONS_RECEIVE_SUCCESS);
export const fetchLocationsReceived = createAction(LOCATIONS_RECEIVED);

// Reducers

export const initialLocationsReducer: ILocationsReducer = {
  isFetching: false,
  locationsByIds: {},
  locationsIds: [],
};

const reducers = handleActions(
  {
    [LOCATIONS_REQUEST]: state => ({ ...state, isFetching: true }),
    [LOCATIONS_RECEIVED]: state => ({ ...state, isFetching: false }),
    [LOCATIONS_RECEIVE_SUCCESS]: (state, action) => {
      if (action.payload) {
        return {
          ...state,
          locationsByIds: { ...state.locationsByIds, ...action.payload.locationsByIds },
          locationsIds: Array.from(new Set([...state.locationsIds, ...action.payload.locationsIds])),
        };
      }
      return state;
    },
  },
  initialLocationsReducer,
);

export default reducers;
