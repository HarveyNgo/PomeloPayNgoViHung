import {takeLatest, put, delay} from '@redux-saga/core/effects';
import {GET_TRANSACTION_LIST} from 'actions/transactions';
import {ActionType} from 'actions';
// import DebitCardService from '../../services/DebitCardService';

import {Transaction} from 'model/Transaction';
import {axiosPost, axiosGet} from 'axiosConfig';
import API from 'apis';

function* getTransactionList(obj: ActionType) {
  const result = yield axiosGet(
    API.TRANSACTION.GET_TRANSACTION_LIST,
    obj.payload,
  );

  if (result.success) {
    yield put({
      type: GET_TRANSACTION_LIST.SUCCESS,
      result: result.data.result,
    });
  } else {
    yield put({
      type: GET_TRANSACTION_LIST.FAIL,
      result,
    });
  }
}

export default function* transactionsWatcher() {
  yield takeLatest(GET_TRANSACTION_LIST.REQUEST, getTransactionList);
}
