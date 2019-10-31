import { call, put } from 'redux-saga/effects';
import api from '../../services/api'
import {userGetAllSuccess, userGet} from '../actions/user-action'
import { openForm, closeForm } from '../actions/modal-action'

export function* remove(action) {
  try {
    yield call(api.delete,`/${action.id}`)
    yield getAll();
  } catch (err) {
  }
}

export function* update(action) {
  try {
    yield call(api.put,`/${action.payload.data.id}`,action.payload.data)
    yield getAll();
    yield put(closeForm())
  } catch (err) {
  }
}

export function* create(action) {
  try {
    yield call(api.post,`/`,action.payload.data)
    yield getAll();
    yield put(closeForm())
  } catch (err) {
  }
}

 export function* openEditUser(action) {
    try {
      yield put(openForm())
      const response = yield call(api.get,`/${action.id}`)
      yield put(userGet(response.data,true));
    } catch (err) {
    }
  }

  export function* closeEditUser() {
    try {
      yield put(closeForm())
      yield put(userGet({addresses:[]},false));
    } catch (err) {
    }
  }

 export function* getAll() {
    try {
      const response = yield call(api.get);
      yield put(userGetAllSuccess(response.data));
    } catch (err) {
    }
  }
