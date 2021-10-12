import {ActionType} from 'actions/index';
import {GET_TRANSACTION_LIST} from 'actions/transactions';

const initialState = {
  transactionList: [],
  isGettingTransactionList: false,
  isGotTransactionList: false,
};

export default function merchant(state = initialState, action: ActionType) {
  switch (action.type) {
    case GET_TRANSACTION_LIST.REQUEST:
      return {
        ...state,
        isGettingTransactionList: true,
        isGotTransactionList: false,
      };

    case GET_TRANSACTION_LIST.SUCCESS:
      return {
        ...state,
        isGettingTransactionList: false,
        isGotTransactionList: true,
        transactionList: action.result,
      };

    case GET_TRANSACTION_LIST.FAIL:
      return {
        ...state,
        isGettingTransactionList: false,
        isGotTransactionList: false,
      };

    default:
      return state;
  }
}
