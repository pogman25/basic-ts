import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosRequestConfig } from 'axios';
import fetchData from '../../utils/fetch';
import * as duck from './noty-duck';
import * as locationsDuck from './locations-duck';
import * as stackDuck from './stack-duck';
import { ILocations, IStack } from './interfaces';

// saga запросов к серверу
export default function* callAPI(url: string, params: AxiosRequestConfig) {
  try {
    return yield call(fetchData, url, params);
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      yield put(duck.showError('Проблемы с сервером, попробуйте позже.'));
    }
    if (error.code === 'ECONNREFUSED') {
      yield put(duck.showError('Нет связи с сервером.'));
    }
    const { response } = error;
    if (!response) {
      yield put(duck.showError('Обрыв связи, проверьте настройки сети'));
    } else {
      const { status } = response;
      switch (status) {
        case 401:
          yield put(duck.showError('Ошибка авторизации, попробуйте авторизоваться снова'));
          return { status };
        case 403:
          yield put(duck.showError('У вас нет прав для просмотра этой страницы'));
          return { status };
        default:
          yield put(duck.showError('Внутрення ошибка сервера, попробуйте позже'));
          return { status };
      }
    }
  }
}

function* fetchLocations() {
  try {
    const resp = yield call(callAPI, '/api/v1/locations', {});
    if (resp.status === 200) {
      const { data } = resp;

      const locationsByIds = (data.locations as ILocations[]).reduce<{
        [key: string]: ILocations;
      }>((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {});
      const locationsIds = (data.locations as ILocations[]).map(item => item.id);
      yield put(locationsDuck.fetchLocationsSuccess({ locationsIds, locationsByIds }));
    } else {
      yield put(duck.showError('Что-то пошло не так'));
    }
  } catch (error) {
    yield put(duck.showError(`Что-то пошло не так: ${error}`));
  } finally {
    yield put(locationsDuck.fetchLocationsReceived());
  }
}

function* fetchStack() {
  try {
    const resp = yield call(callAPI, '/api/v1/stack', {});
    if (resp.status === 200) {
      const { data } = resp;

      const stackByIds = (data.stack as IStack[]).reduce<{
        [key: string]: IStack;
      }>((sum, item) => {
        sum[item.id] = item;
        return sum;
      }, {});
      const stackIds = (data.stack as IStack[]).map(item => item.id);
      yield put(stackDuck.fetchStackSuccess({ stackIds, stackByIds }));
    } else {
      yield put(duck.showError('Что-то пошло не так'));
    }
  } catch (error) {
    yield put(duck.showError(`Что-то пошло не так: ${error}`));
  } finally {
    yield put(stackDuck.fetchStackReceived());
  }
}

export function* locationsSaga() {
  yield takeLatest(locationsDuck.fetchLocations, fetchLocations);
  yield takeLatest(stackDuck.fetchStack, fetchStack);
}
