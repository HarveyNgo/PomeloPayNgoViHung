import {createRequestTypes} from './utils';
import {ActionType} from './index';

export const GET_TRANSACTION_LIST = createRequestTypes('GET_TRANSACTION_LIST');
export const getTransactionList = (): ActionType => ({
  type: GET_TRANSACTION_LIST.REQUEST,
  payload: '',
});
