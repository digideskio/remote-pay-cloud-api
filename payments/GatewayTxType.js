/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof payments
* @enum {string}
*/
GatewayTxType = {
  AUTH : "AUTH",
  PREAUTH : "PREAUTH",
  PREAUTHCAPTURE : "PREAUTHCAPTURE",
  ADJUST : "ADJUST",
  VOID : "VOID",
  VOIDRETURN : "VOIDRETURN",
  RETURN : "RETURN",
  REFUND : "REFUND",
  NAKEDREFUND : "NAKEDREFUND",
  GETBALANCE : "GETBALANCE",
  BATCHCLOSE : "BATCHCLOSE",
  ACTIVATE : "ACTIVATE",
  BALANCE_LOCK : "BALANCE_LOCK",
  LOAD : "LOAD",
  CASHOUT : "CASHOUT",
  CASHOUT_ACTIVE_STATUS : "CASHOUT_ACTIVE_STATUS",
  REDEMPTION : "REDEMPTION",
  REDEMPTION_UNLOCK : "REDEMPTION_UNLOCK",
  RELOAD : "RELOAD",
  CASH_ADVANCE : "CASH_ADVANCE",
  INTERNET_ACTIVATE : "INTERNET_ACTIVATE",
  TOKEN_REQUEST : "TOKEN_REQUEST",
  VERIFICATION : "VERIFICATION"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = GatewayTxType;
}

