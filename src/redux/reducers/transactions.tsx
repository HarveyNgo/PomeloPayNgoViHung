import {ActionType} from 'actions/index';
import {GET_TRANSACTION_LIST} from 'actions/transactions';

const initialState = {
  transactionList: [],
};

export default function merchant(state = initialState, action: ActionType) {
  switch (action.type) {
    case GET_TRANSACTION_LIST.REQUEST:
      return {
        ...state,
      };

    case GET_TRANSACTION_LIST.SUCCESS:
      return {
        ...state,
        transactionList: action.result,
      };

    case GET_TRANSACTION_LIST.FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}
