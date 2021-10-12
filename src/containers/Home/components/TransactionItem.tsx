import React, {useState} from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Transaction} from 'model/Transaction';
import styled from 'styled-components';
import {formatDateTime, DateTimeFormatter} from 'utils/DateUtility';
import {formatMoney, MoneyFormatter} from 'utils/MoneyFormatter';

interface IProps {
  transaction: Transaction;
}

const Container = styled(View)`
  padding: 10px;
`;

const ProviderRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 2px;
`;

const StatusRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AmountDiv = styled(View)`
  flex-direction: row;
`;
const StateDiv = styled(View)`
  flex-direction: row;
`;

const BlueText = styled(Text)`
  color: blue;
`;

const TransactionItem: React.FC<IProps> = ({transaction}) => {
  const [isRefund, setIsRefund] = useState(false);
  const refundHanlder = () => {
    setIsRefund(true);
  };
  return (
    <Container>
      <ProviderRow>
        <Text>{transaction.provider}</Text>
        <AmountDiv>
          <Text>
            {formatMoney(
              transaction.amount,
              MoneyFormatter.ZERO_DECIMAL_FORMAT,
            )}{' '}
          </Text>

          <Text>{transaction.currency}</Text>
        </AmountDiv>
      </ProviderRow>
      <StatusRow>
        <StateDiv>
          <Text>{isRefund ? 'REFUND' : transaction.state} </Text>
          {!isRefund ? (
            <TouchableOpacity onPress={() => refundHanlder()}>
              <BlueText>refund</BlueText>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </StateDiv>
        <Text>
          {formatDateTime(
            transaction.created,
            DateTimeFormatter.DD_MM_YYYY_HH_MM,
          )}
        </Text>
      </StatusRow>
    </Container>
  );
};

export default TransactionItem;
