import { createAction, handleActions, Action } from 'redux-actions';
import { INotifyReducer } from './interfaces';

// Actions

export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

// Action Creators

// Notification Actions

export const showError = createAction(SHOW_ERROR);
export const showSuccess = createAction(SHOW_SUCCESS);
export const hideError = createAction(HIDE_ERROR);
export const hideSuccess = createAction(HIDE_SUCCESS);

// Reducers

const initialStore: INotifyReducer = {
  error: '',
  success: '',
};

const reducers = handleActions(
  {
    [SHOW_ERROR]: (state, { payload }: Action<string>) => ({
      ...state,
      error: !!payload ? payload : '',
    }),
    [HIDE_ERROR]: (state, action: Action<string>) => ({ ...state, error: '' }),
    [SHOW_SUCCESS]: (state, { payload }: Action<string>) => ({
      ...state,
      success: !!payload ? payload : '',
    }),
    [HIDE_SUCCESS]: (state, action: Action<string>) => ({ ...state, success: '' }),
  },
  initialStore,
);

export default reducers;
