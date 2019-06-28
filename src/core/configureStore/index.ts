import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  const store =
    process.env.NODE_ENV === 'development'
      ? createStore(
          rootReducer,
          compose(
            applyMiddleware(sagaMiddleware, logger),
            (window as any).__REDUX_DEVTOOLS_EXTENSION__
              ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
              : (f: any) => f,
          ),
        )
      : createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

  return {
    ...store,
    runSaga: sagaMiddleware.run,
    injectedSagas: {},
    close: () => store.dispatch(END),
  };
};
