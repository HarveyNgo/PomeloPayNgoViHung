// import {CardInfo, SpendingLimitSuggestion} from '../models/debitCard';
// import AsyncStorage from '@react-native-community/async-storage';
import {Transaction} from 'model/Transaction';
import {axiosPost, axiosGet} from 'axiosConfig';
import API from 'apis';
import {transactionListData} from './mocks/transactions';

class TransactionService {
  //   public getTransactionList = async (): Array<Transaction> => {
  //     const result = await axiosGet(API.TRANSACTION.GET_TRANSACTION_LIST);
  //     return result;
  //   };

  public getTransactionList = (): Array<Transaction> => {
    return transactionListData?.items;
  };
}

export default TransactionService;
