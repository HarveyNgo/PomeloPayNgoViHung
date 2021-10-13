import React from 'react';
import renderer from 'react-test-renderer';
import {FlatList} from 'react-native';

import {transactionListData} from '../src/services/mocks/transactions';
import TransactionItem from '../src/containers/Home/components/TransactionItem';

const renderItem = ({item, index}) => {
  return <TransactionItem transaction={item} />;
};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <FlatList
        style={{flex: 1}}
        data={transactionListData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `list_item_${index}`}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
