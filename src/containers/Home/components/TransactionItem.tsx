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
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import imgSetting from 'resource/setting.png';

interface IProps {
  transaction: Transaction;
}

const Container = styled(View)`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const SettingImg = styled(Image).attrs(({source}) => ({
  source: source,
  resizeMode: 'contain',
}))`
  width: 15px;
  height: 15px;
`;

const InfoDiv = styled(View)`
  flex: 1;
`;
const SettingDiv = styled(View)`
  margin-horizontal: 10px;
`;

const MenuItemVIew = styled(MenuItem).attrs(({isRefund, onPress}) => ({
  disabled: isRefund,
  onPress: onPress,
}))``;

const TransactionItem: React.FC<IProps> = ({transaction}) => {
  const [isRefund, setIsRefund] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const refundHanlder = () => {
    setIsRefund(true);
    setShowMenu(false);
  };

  const hideMenuHandler = () => {
    setShowMenu(false);
  };
  const showMenuHandler = () => {
    setShowMenu(true);
  };

  return (
    <Container>
      <InfoDiv>
        <ProviderRow>
          <Text>{transaction.initiatorDetails?.contactName}</Text>
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
          </StateDiv>
          <Text>
            {formatDateTime(
              transaction.created,
              DateTimeFormatter.DD_MM_YYYY_HH_MM,
            )}
          </Text>
        </StatusRow>
      </InfoDiv>
      <SettingDiv>
        <Menu
          visible={showMenu}
          anchor={
            <TouchableOpacity onPress={() => showMenuHandler()}>
              <SettingImg source={imgSetting} />
            </TouchableOpacity>
          }
          onRequestClose={() => hideMenuHandler()}>
          <MenuItemVIew isRefund={isRefund} onPress={() => refundHanlder()}>
            Refund
          </MenuItemVIew>
        </Menu>
      </SettingDiv>
    </Container>
  );
};

export default TransactionItem;
