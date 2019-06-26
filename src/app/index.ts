import App from './components/App';
import rootReducer from './duck/duck';
import rootSaga from './duck/saga';
import * as rootSelectors from './duck/selectors';
import * as rootInterfaces from './duck/interfaces';

export default App;
export { rootReducer, rootSaga, rootSelectors, rootInterfaces };
