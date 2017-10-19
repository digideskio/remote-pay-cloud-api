/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @memberof remotemessage
* @enum {string}
*/
TransactionType = {
  PAYMENT : "PAYMENT",
  CREDIT : "CREDIT",
  AUTH : "AUTH",
  DATA : "DATA",
  BALANCE_INQUIRY : "BALANCE_INQUIRY",
  PAYMENT_REVERSAL : "PAYMENT_REVERSAL",
  CREDIT_REVERSAL : "CREDIT_REVERSAL"
};


//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionType;
}
