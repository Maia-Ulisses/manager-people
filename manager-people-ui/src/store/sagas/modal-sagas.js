import { call, put } from 'redux-saga/effects';
import {userGet} from '../actions/user-action'
import { openForm, closeForm } from '../actions/modal-action'

 export function* openEditUser(action) {
    try {
      yield put(openForm())
      yield put(userGet(action.id,true));
    } catch (err) {
    }
  }

  export function* closeEditUser() {
    try {
      yield put(closeForm())
      yield put(userGet(null,false));
    } catch (err) {
    }
  }
