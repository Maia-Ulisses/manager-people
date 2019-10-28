import { all, takeLatest } from 'redux-saga/effects';
import { ActionsTypes } from '../types';
import { getAll } from './user-sagas'


export default function* rootSaga() {
    return yield all([
      takeLatest(ActionsTypes.USER_GET_ALL_REQUEST,getAll),
    ]);             
  }