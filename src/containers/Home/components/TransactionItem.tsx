import * as React from 'react';
import {View, Text, ViewStyle, StyleSheet, Image} from 'react-native';
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
`;

const StatusRow = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AmountDiv = styled(View)`
  flex-direction: row;
`;

const TransactionItem: React.FC<IProps> = ({transaction}) => {
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
        <Text>{transaction.state}</Text>
        <Text>
          {formatDateTime(
            transaction.created,
            DateTimeFormatter.DD_MM_YYYY_HH_MM,
          )}
        </Text>
      </StatusRow>
      {/* <View style={styles.merchantImageContainer}>
        <Image
          source={{uri: merchant?.image}}
          style={styles.merchantImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.merchantDescriptionContainer}>
          <View style={styles.merchantNameContainer}>
            <Image
              source={imgMerchantChecked}
              style={styles.merchantChecked}
              resizeMode={'contain'}
            />
            <Text>{merchant?.name}</Text>
          </View>
          <Text style={styles.descriptionText}>{merchant?.description}</Text>
        </View>
        <View style={styles.merchantDetailContainer}>
          <Image source={imgStar} style={styles.star} resizeMode={'contain'} />

          <StyledText
            tag={'c'}
            color={'#000'}
            matchStyle={styles.numberOfOrderText}>
            {formatStringWithParams(
              '{rating} <c>({numberOfOrder}++)</c>  .  {distance} km',
              {
                rating: merchant?.rating ?? 0,
                numberOfOrder: merchant?.numOfOrder ?? 0,
                distance: formatNumber((merchant?.distance ?? 0) / 1000),
              },
            )}
          </StyledText>
        </View>
      </View> */}
    </Container>
  );
};

type Style = {
  container: ViewStyle;
  merchantImage: ViewStyle;
  detailContainer: ViewStyle;
  merchantDescriptionContainer: ViewStyle;
  merchantDetailContainer: ViewStyle;
  merchantNameContainer: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    // marginHorizontal: 20,
    // marginVertical: 15,
  },
  merchantImageContainer: {
    flex: 1,
  },
  merchantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  merchantDescriptionContainer: {},
  merchantDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  merchantNameContainer: {
    flexDirection: 'row',
  },
  merchantChecked: {
    width: 20,
    height: 20,
  },
  star: {
    width: 15,
    height: 15,
    marginEnd: 5,
    marginBottom: 2,
  },
  numberOfOrderText: {
    color: '#7F8893',
  },
  descriptionText: {
    color: '#646D7A',
  },
});

export default TransactionItem;
