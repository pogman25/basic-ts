import { all, fork } from 'redux-saga/effects';
import peopleSaga from 'src/pages/people/containers/People/saga';

export default function*() {
  yield all([
    fork(peopleSaga),
  ]);
}
