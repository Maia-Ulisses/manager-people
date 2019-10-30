import { all, takeLatest,takeEvery } from 'redux-saga/effects';
import { ActionsTypes } from '../types';
import { getAll } from './user-sagas';
import { openEditUser,closeEditUser } from './modal-sagas';



export default function* rootSaga() {
    return yield all([
      takeLatest(ActionsTypes.USER_GET_ALL_REQUEST,getAll),
      takeLatest(ActionsTypes.OPEN_FORM_EDIT,openEditUser),
      takeLatest(ActionsTypes.CLOSE_FORM_EDIT,closeEditUser),

    ]);             
  }