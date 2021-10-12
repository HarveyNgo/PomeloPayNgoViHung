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
// import MerchantItem from './components/MerchantItem';
// import Merchant, {MerchantApiPayload} from '../models/merchant';
// import {debounce} from 'lodash';

export interface Props {
  getTransactionList: any;
  transactionList: Array<Transaction>;
  //   isGettingMerchantList: boolean;
  //   isGotMerchantList: boolean;
}
interface State {
  //   currentPage: number;
  //   maxPage: number;
  //   merchantList: Array<Merchant>;
}

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      //   currentPage: 1,
      //   maxPage: 1,
      //   merchantList: [],
    };
  }

  componentDidMount() {
    this.props.getTransactionList();
  }

  //   componentDidUpdate(prevProps: Props, prevState: State) {
  //     if (prevProps.isGettingMerchantList && !this.props.isGettingMerchantList) {
  //       if (this.props.isGotMerchantList) {
  //         const maxPage = this.props.merchantResult?.maxPage;
  //         const list = this.props.merchantResult?.data;
  //         const currentPage = this.props.merchantResult?.currentPage;
  //         this.setState(prevState => {
  //           return {
  //             ...prevState,
  //             merchantList: [...prevState.merchantList, ...list],
  //             maxPage,
  //             currentPage: currentPage + 1,
  //           };
  //         });
  //       }
  //     }
  //   }

  //   onEndReached = debounce(() => {
  //     const {currentPage, maxPage} = this.state;

  //     if (currentPage <= maxPage && !this.props.isGettingMerchantList) {
  //       this.props.getMerchantList({page: currentPage});
  //     }
  //   }, 50);

  //   renderItem({item}) {
  //     return <MerchantItem merchant={item} />;
  //   }
  render() {
    console.log('hung this.props.transactionList:', this.props.transactionList);

    return (
      <SafeAreaView style={styles.container}>
        {/* <DeliveryAddress />
        <Search />
        <Separator />
        <FlatList
          style={styles.listContainer}
          data={this.state.merchantList}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `list_item_${index}`}
          ListEmptyComponent={() => <View />}
          ListFooterComponent={() =>
            this.props.isGettingMerchantList && (
              <View style={styles.footerIndicator}>
                <ActivityIndicator />
              </View>
            )
          }
          onEndReachedThreshold={0.8}
          onEndReached={() => this.onEndReached()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListHeaderComponent={() => (
            <Text style={styles.listHeaderText}>Restaurants near you</Text>
          )}
        /> */}

        <Text>djsjjksjk</Text>
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
  //   isGettingMerchantList: state.merchant.isGettingMerchantList,
  //   isGotMerchantList: state.merchant.isGotMerchantList,
});

const mapDiaptchToProps = {
  getTransactionList,
};

export default connect(mapStateToProps, mapDiaptchToProps)(HomeScreen);
