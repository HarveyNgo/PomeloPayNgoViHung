import * as React from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {getTransactionList} from 'actions/transactions';
import {Transaction} from 'model/Transaction';
// import {ActionType} from '../actions/index';

// import DeliveryAddress from './components/DeliveryAddress';
// import Search from './components/Search';
// import Separator from './components/Separator';
import TransactionItem from './components/TransactionItem';
// import Merchant, {MerchantApiPayload} from '../models/merchant';
// import {debounce} from 'lodash';

export interface Props {
  getTransactionList: any;
  transactionList: Array<Transaction>;
  isGettingTransactionList: boolean;
  isGotTransactionList: boolean;
}
interface State {
  //   currentPage: number;
  //   maxPage: number;
  transactionList: Array<Transaction>;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      //   currentPage: 1,
      //   maxPage: 1,
      transactionList: [],
    };
  }

  componentDidMount() {
    this.props.getTransactionList();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      prevProps.isGettingTransactionList &&
      !this.props.isGettingTransactionList
    ) {
      if (this.props.isGotTransactionList) {
        this.setState(prevState => {
          return {
            ...prevState,
            transactionList: this.props.transactionList,
          };
        });
      }
    }
  }

  //   onEndReached = debounce(() => {
  //     const {currentPage, maxPage} = this.state;

  //     if (currentPage <= maxPage && !this.props.isGettingMerchantList) {
  //       this.props.getMerchantList({page: currentPage});
  //     }
  //   }, 50);

  renderItem({item}) {
    return <TransactionItem transaction={item} />;
  }
  render() {
    console.log('hung this.props.transactionList:', this.props.transactionList);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.listContainer}
          data={this.state.transactionList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `list_item_${index}`}
          ListEmptyComponent={() => <View />}
          //   ListFooterComponent={() =>
          //     this.props.isGettingMerchantList && (
          //       <View style={styles.footerIndicator}>
          //         <ActivityIndicator />
          //       </View>
          //     )
          //   }
          //   onEndReachedThreshold={0.8}
          //   onEndReached={() => this.onEndReached()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => (
            <Text style={styles.listHeaderText}>TransactionList</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {},
  listContainer: {
    marginTop: 20,
  },
  separator: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#D1D7D8',
  },
  listHeaderText: {
    color: '#141619',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  footerIndicator: {
    padding: 10,
  },
});

const mapStateToProps = state => ({
  transactionList: state.transactions.transactionList,
  isGettingTransactionList: state.transactions.isGettingTransactionList,
  isGotTransactionList: state.transactions.isGotTransactionList,
});

const mapDiaptchToProps = {
  getTransactionList,
};

export default connect(mapStateToProps, mapDiaptchToProps)(HomeScreen);
