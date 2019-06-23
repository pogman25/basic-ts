import { all, fork } from 'redux-saga/effects';
import peopleSaga from 'src/pages/people/containers/People/saga';
import userSaga from 'src/pages/catalog/duck/saga';

export default function*() {
  yield all([fork(peopleSaga), fork(userSaga)]);
}
