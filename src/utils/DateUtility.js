import moment from 'moment';


export const DEFAULT_LOCALE = 'en';

export const DateTimeFormatter = {
  HH_MM_DD_MM_YYYY: ' HH:mm DD/MM/YYYY',
  DD_MM_YYYY_HH_MM: 'DD/MM/YYYY HH:mm',
  YYYY_MM_DD_HYPHEN: 'YYYY-MM-DD',
  DD_MM_YYYY: 'DD/MM/YYYY',
  HH_MM_DDD_DD_MM_YYYY: 'HH:mm ddd, DD/MM/YYYY'
};

const _languageToLocale = language => {
  if (!language.includes('zh')) {
    return language;
  }

  return language.includes('Hans') ? 'zh-cn' : 'zh-tw';
};

export const formatDateTime = (value, formatType) => {
  if (formatType === undefined) {
    formatType = DateTimeFormatter.DD_MM_YYYY_HH_MM;
  }
  moment.locale(DEFAULT_LOCALE);
  const date = moment(value);
  if (date.isValid()) {
    return moment(value).format(formatType);
  }

  return value;
};

/**
 *
 * @param {*} value : a UTC dateTime: 2030-04-17T00:00:00.000000Z
 * @param {*} formatType : example: DD_MM_YYYY_HH_MM
 * @param {*} language : en/jp/zh/....
 * @param {*} isKeepUtcTime : true/false: true: keep output datetime as UTC "17/04/2020 00:00 ", false: parse to local date time "17/04/2020 07:00 "
 */
export const formatDateTimeLocale = (
  value,
  formatType,
  language,
  isKeepUtcTime
) => {
  if (formatType === undefined) {
    formatType = DateTimeFormatter.DD_MM_YYYY_HH_MM;
  }
  if (language === undefined) {
    moment.locale(DEFAULT_LOCALE);
  } else {
    moment.locale(_languageToLocale(language));
  }
  const date = moment(value);
  if (date.isValid()) {
    if (isKeepUtcTime) {
      return moment.utc(value).format(formatType);
    } else {
      return moment(value).format(formatType);
    }
  }
  return value;
};

export default { formatDateTime, DateTimeFormatter, formatDateTimeLocale };
