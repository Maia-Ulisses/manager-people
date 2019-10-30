import { call, put } from 'redux-saga/effects';
import api from '../../services/api'
//import api from '../../services/post-service';
import {userGetAllSuccess} from '../actions/user-action'

 export function* getAll() {
    try {
      const response = yield call(api.get);
      yield put(userGetAllSuccess(response.data));
    } catch (err) {
      console.log(err);
   //   yield put(loadFailure());
    }
  }
