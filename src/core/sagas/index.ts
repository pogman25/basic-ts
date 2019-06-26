import { all, fork } from 'redux-saga/effects';
import { userSaga } from 'src/pages/users';

export default function*() {
  yield all([fork(userSaga)]);
}
