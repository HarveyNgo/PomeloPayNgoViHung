export interface Transaction {
  id: String;
  created: String;
  updated: String;
  deleted: Boolean;
  amount: Number;
  merchantId: String;
  autocreditItemId: String;
  transactionReportId: String;
  currency: String;
  provider: String;
  state: String;
  qr: String;
}
