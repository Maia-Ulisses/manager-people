import { all, takeLatest } from 'redux-saga/effects';
import { ActionsTypes } from '../types';
import * as UserSagas from './user-sagas';

export default function* rootSaga() {
    return yield all([
      takeLatest(ActionsTypes.USER_GET_ALL_REQUEST,UserSagas.getAll),
      takeLatest(ActionsTypes.USER_REMOVE_REQUEST,UserSagas.remove),
      takeLatest(ActionsTypes.OPEN_FORM_EDIT,UserSagas.openEditUser),
      takeLatest(ActionsTypes.CLOSE_FORM_EDIT,UserSagas.closeEditUser),
      takeLatest(ActionsTypes.USER_UPDATE_REQUEST,UserSagas.update),
      takeLatest(ActionsTypes.USER_CREATE_REQUEST,UserSagas.create),
    ]);             
  }