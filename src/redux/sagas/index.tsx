import {all, call} from 'redux-saga/effects';
import transactionsWatcher from './transactions';

export default function* rootSaga() {
  yield all([call(transactionsWatcher)]);
}
