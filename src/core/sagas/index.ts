import { all, fork } from 'redux-saga/effects';
import { userSaga } from 'src/pages/users';
import { locationsSaga } from 'src/app/duck/saga';

export default function*() {
  yield all([fork(userSaga), fork(locationsSaga)]);
}
