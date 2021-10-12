import numeral from 'numeral';

/**
 * roundCeil(2.9648,2) --> 2.97
 *
 * @param {*} value
 * @param {*} ceilNum
 */
export const roundCeil = (value, ceilNum) => {
  ceilNum = ceilNum === undefined || ceilNum === '' ? 2 : ceilNum;
  var factor = Math.pow(10, ceilNum);
  var a = value * factor;
  var b = Math.ceil(a);
  var c = b / factor;
  return c;
};

/**
 * roundFloor(2.9658,2) --> 2.96
 * @param {*} value
 * @param {*} floorNum
 */
export const roundFloor = (value, floorNum) => {
  floorNum = floorNum === undefined || floorNum === '' ? 2 : floorNum;
  var factor = Math.pow(10, floorNum);
  var a = value * factor;
  var b = Math.floor(a);
  var c = b / factor;
  return c;
};

export const formatMoney = (value, formatter) => {
  if (formatter === undefined) {
    formatter = MoneyFormatter.TWO_DECIMAL_FORMAT;
  }
  return numeral(value).format(formatter, Math.floor);
};

export const MoneyFormatter = {
  ZERO_DECIMAL_FORMAT: '0,0.',
  ONE_DECIMAL_FORMAT: '0,0.0',
  TWO_DECIMAL_FORMAT: '0,0.00',
  SEVEN_DECIMAL_FORMAT: '0,0.0000000',
  CUSTOM_DECIMAL_FORMAT: '0,0.[0000000]',
  TWO_DECIMAL_FORMAT_NO_COMMAS: '0.00',
  FIVE_DECIMAL_FORMAT_NO_COMMAS: '0.00000',
  SEVEN_DECIMAL_FORMAT_NO_COMMAS: '0.0000000'
};

export default { formatMoney, MoneyFormatter };
