import Users from './containers';
import userReducer from './duck/user-duck';
import userSaga from './duck/saga';
import * as userSelectors from './duck/selectors';

export default Users;
export { userReducer, userSaga, userSelectors }