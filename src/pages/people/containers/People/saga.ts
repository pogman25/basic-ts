import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as notify from 'src/app/duck';
import callAPI from 'src/app/saga';
import * as duck from './duck';
import { getNextPage, getTotalCountFromState } from './selectors';
import { IPeopleModel } from './interfaces';

function* fetchPeople() {
  const count = yield select(getNextPage);
  const totalCount = yield select(getTotalCountFromState);
  if (!!count) {
    try {
      const resp = yield call(callAPI, 'people/', { params: { page: count } });
      if (resp.status === 200) {
        const { data } = resp;
        const nextPage = !!data.next ? data.next.replace(/\D/g, '') : null;
        const byName = (data.results as IPeopleModel[]).reduce<{
          [key: string]: IPeopleModel;
        }>((sum, item) => {
          sum[item.name] = item;
          return sum;
        }, {});
        yield all([
          yield put(duck.getPeopleSuccess({ names: Object.keys(byName), byName })),
          put(duck.setNextLink(+nextPage)),
        ]);
        if (totalCount !== data.count) {
          yield put(duck.setTotalCount(data.count));
        }
      } else {
        yield put(notify.showError('Что-то пошло не так'));
      }
    } catch (error) {
      yield put(notify.showError('Что-то пошло не так'));
    } finally {
      yield put(duck.getPeopleReceived());
    }
  }
}

export default function* rootSaga() {
  yield takeLatest(duck.PEOPLE_REQUEST, fetchPeople);
}
