import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as notify from 'src/app/duck/noty-duck';
import callAPI from 'src/app/duck/saga';
import * as duck from './user-duck';
import { IUsers } from './interfaces';

function* fetchUsers() {
  try {
    const resp = yield call(callAPI, '/api/v1/users', {});
    if (resp.status === 200) {
      const { data } = resp;

      const usersByIds = (data.users as IUsers[]).reduce<{
        [key: string]: IUsers;
      }>((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {});
      const usersIds = (data.users as IUsers[]).map(item => item.id);
      yield all([put(duck.getUsersSuccess({ usersIds, usersByIds }))]);
    } else {
      yield put(notify.showError('Что-то пошло не так'));
    }
  } catch (error) {
    yield put(notify.showError('Что-то пошло не так'));
  } finally {
    yield put(duck.getUsersReceived());
  }
}

export default function* rootSaga() {
  yield takeLatest(duck.USERS_REQUEST, fetchUsers);
}
