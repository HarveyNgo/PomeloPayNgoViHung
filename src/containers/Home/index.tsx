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
import TransactionItem from './components/TransactionItem';

export interface Props {
  getTransactionList: any;
  transactionList: Array<Transaction>;
  isGettingTransactionList: boolean;
  isGotTransactionList: boolean;
}
interface State {
  transactionList: Array<Transaction>;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
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

  renderItem({item}) {
    return <TransactionItem transaction={item} />;
  }
  render() {
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
