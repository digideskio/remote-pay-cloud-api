/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var remotepay_TransactionType = require("../remotepay/TransactionType");
var payments_DataEntryLocation = require("../payments/DataEntryLocation");
var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var TransactionRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = TransactionRequest;
  this.orderId = undefined;
  this.signatureThreshold = undefined;
  this.cloverShouldHandleReceipts = undefined;
  this.disableReceiptSelection = undefined;
  this.disableDuplicateChecking = undefined;
  this.signatureEntryLocation = undefined;
  this.cardNotPresent = undefined;
  this.disableRestartTransactionOnFail = undefined;
  this.amount = undefined;
  this.cardEntryMethods = undefined;
  this.vaultedCard = undefined;
  this.externalId = undefined;
  this.type = undefined;
  this.autoAcceptPaymentConfirmations = undefined;
  this.autoAcceptSignature = undefined;
};

TransactionRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
TransactionRequest.prototype.constructor = TransactionRequest;

/**
* Set the field value
* Identifier for the order to apply this to.  The order must exist in the clover system.
*
* @memberof remotepay.TransactionRequest
* @param {String} orderId 
*/
TransactionRequest.prototype.setOrderId = function(orderId) {
  this.orderId = orderId;
};

/**
* Get the field value
* Identifier for the order to apply this to.  The order must exist in the clover system.
* @memberof remotepay.TransactionRequest
* @return {String} 
*/
TransactionRequest.prototype.getOrderId = function() {
  return this.orderId;
};

/**
* Set the field value
* If the amount is equal to or greater than this amount, then a signature should be obtained
*
* @memberof remotepay.TransactionRequest
* @param {Number} signatureThreshold must be a long integer
*/
TransactionRequest.prototype.setSignatureThreshold = function(signatureThreshold) {
  this.signatureThreshold = signatureThreshold;
};

/**
* Get the field value
* If the amount is equal to or greater than this amount, then a signature should be obtained
* @memberof remotepay.TransactionRequest
* @return {Number} must be a long integer
*/
TransactionRequest.prototype.getSignatureThreshold = function() {
  return this.signatureThreshold;
};

/**
* Set the field value
* If false, then do not print using the clover printer.  Return print information.
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} cloverShouldHandleReceipts 
*/
TransactionRequest.prototype.setCloverShouldHandleReceipts = function(cloverShouldHandleReceipts) {
  this.cloverShouldHandleReceipts = cloverShouldHandleReceipts;
};

/**
* Get the field value
* If false, then do not print using the clover printer.  Return print information.
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getCloverShouldHandleReceipts = function() {
  return this.cloverShouldHandleReceipts;
};

/**
* Set the field value
* Do not show the receipt options screen
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} disableReceiptSelection 
*/
TransactionRequest.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* Do not show the receipt options screen
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

/**
* Set the field value
* Do not do heuristic duplicate checking
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} disableDuplicateChecking 
*/
TransactionRequest.prototype.setDisableDuplicateChecking = function(disableDuplicateChecking) {
  this.disableDuplicateChecking = disableDuplicateChecking;
};

/**
* Get the field value
* Do not do heuristic duplicate checking
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getDisableDuplicateChecking = function() {
  return this.disableDuplicateChecking;
};

/**
* Set the field value
* Where the signature should be obtined from (paper, screen...etc)
*
* @memberof remotepay.TransactionRequest
* @param {payments.DataEntryLocation|Null} signatureEntryLocation 
*/
TransactionRequest.prototype.setSignatureEntryLocation = function(signatureEntryLocation) {
  this.signatureEntryLocation = signatureEntryLocation;
};

/**
* Get the field value
* Where the signature should be obtined from (paper, screen...etc)
* @memberof remotepay.TransactionRequest
* @return {payments.DataEntryLocation|Null} 
*/
TransactionRequest.prototype.getSignatureEntryLocation = function() {
  return this.signatureEntryLocation;
};

/**
* Set the field value
* If true then card not present is accepted
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} cardNotPresent 
*/
TransactionRequest.prototype.setCardNotPresent = function(cardNotPresent) {
  this.cardNotPresent = cardNotPresent;
};

/**
* Get the field value
* If true then card not present is accepted
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getCardNotPresent = function() {
  return this.cardNotPresent;
};

/**
* Set the field value
* If the transaction times out or fails because of decline, do not restart it
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} disableRestartTransactionOnFail 
*/
TransactionRequest.prototype.setDisableRestartTransactionOnFail = function(disableRestartTransactionOnFail) {
  this.disableRestartTransactionOnFail = disableRestartTransactionOnFail;
};

/**
* Get the field value
* If the transaction times out or fails because of decline, do not restart it
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getDisableRestartTransactionOnFail = function() {
  return this.disableRestartTransactionOnFail;
};

/**
* Set the field value
* Total amount paid
*
* @memberof remotepay.TransactionRequest
* @param {Number} amount must be a long integer
*/
TransactionRequest.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Total amount paid
* @memberof remotepay.TransactionRequest
* @return {Number} must be a long integer
*/
TransactionRequest.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Allowed entry methods
*
* @memberof remotepay.TransactionRequest
* @param {Number|Null} cardEntryMethods must be an integer, 
*/
TransactionRequest.prototype.setCardEntryMethods = function(cardEntryMethods) {
  this.cardEntryMethods = cardEntryMethods;
};

/**
* Get the field value
* Allowed entry methods
* @memberof remotepay.TransactionRequest
* @return {Number|Null} must be an integer, 
*/
TransactionRequest.prototype.getCardEntryMethods = function() {
  return this.cardEntryMethods;
};

/**
* Set the field value
* A saved card
*
* @memberof remotepay.TransactionRequest
* @param {payments.VaultedCard|Null} vaultedCard 
*/
TransactionRequest.prototype.setVaultedCard = function(vaultedCard) {
  this.vaultedCard = vaultedCard;
};

/**
* Get the field value
* A saved card
* @memberof remotepay.TransactionRequest
* @return {payments.VaultedCard|Null} 
*/
TransactionRequest.prototype.getVaultedCard = function() {
  return this.vaultedCard;
};

/**
* Set the field value
* An id that will be persisted with transactions.
*
* @memberof remotepay.TransactionRequest
* @param {String} externalId 
*/
TransactionRequest.prototype.setExternalId = function(externalId) {
  this.externalId = externalId;
};

/**
* Get the field value
* An id that will be persisted with transactions.
* @memberof remotepay.TransactionRequest
* @return {String} 
*/
TransactionRequest.prototype.getExternalId = function() {
  return this.externalId;
};

/**
* Set the field value
* The type of the transaction.
*
* @memberof remotepay.TransactionRequest
* @param {remotepay.TransactionType} type 
*/
TransactionRequest.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* The type of the transaction.
* @memberof remotepay.TransactionRequest
* @return {remotepay.TransactionType} 
*/
TransactionRequest.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* Do not show/send potential duplicate challenges
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} autoAcceptPaymentConfirmations 
*/
TransactionRequest.prototype.setAutoAcceptPaymentConfirmations = function(autoAcceptPaymentConfirmations) {
  this.autoAcceptPaymentConfirmations = autoAcceptPaymentConfirmations;
};

/**
* Get the field value
* Do not show/send potential duplicate challenges
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getAutoAcceptPaymentConfirmations = function() {
  return this.autoAcceptPaymentConfirmations;
};

/**
* Set the field value
* Do not show/send signature verification challenges
*
* @memberof remotepay.TransactionRequest
* @param {Boolean|Null} autoAcceptSignature 
*/
TransactionRequest.prototype.setAutoAcceptSignature = function(autoAcceptSignature) {
  this.autoAcceptSignature = autoAcceptSignature;
};

/**
* Get the field value
* Do not show/send signature verification challenges
* @memberof remotepay.TransactionRequest
* @return {Boolean|Null} 
*/
TransactionRequest.prototype.getAutoAcceptSignature = function() {
  return this.autoAcceptSignature;
};

TransactionRequest._meta_ =  {fields:  {}};
TransactionRequest._meta_.fields["orderId"] = {};
TransactionRequest._meta_.fields["orderId"].type = String;
TransactionRequest._meta_.fields["signatureThreshold"] = {};
TransactionRequest._meta_.fields["signatureThreshold"].type = Number;
TransactionRequest._meta_.fields["cloverShouldHandleReceipts"] = {};
TransactionRequest._meta_.fields["cloverShouldHandleReceipts"].type = Boolean;
TransactionRequest._meta_.fields["disableReceiptSelection"] = {};
TransactionRequest._meta_.fields["disableReceiptSelection"].type = Boolean;
TransactionRequest._meta_.fields["disableDuplicateChecking"] = {};
TransactionRequest._meta_.fields["disableDuplicateChecking"].type = Boolean;
TransactionRequest._meta_.fields["signatureEntryLocation"] = {};
TransactionRequest._meta_.fields["signatureEntryLocation"].type = payments_DataEntryLocation;
TransactionRequest._meta_.fields["cardNotPresent"] = {};
TransactionRequest._meta_.fields["cardNotPresent"].type = Boolean;
TransactionRequest._meta_.fields["disableRestartTransactionOnFail"] = {};
TransactionRequest._meta_.fields["disableRestartTransactionOnFail"].type = Boolean;
TransactionRequest._meta_.fields["amount"] = {};
TransactionRequest._meta_.fields["amount"].type = Number;
TransactionRequest._meta_.fields["cardEntryMethods"] = {};
TransactionRequest._meta_.fields["cardEntryMethods"].type = Number;
TransactionRequest._meta_.fields["vaultedCard"] = {};
TransactionRequest._meta_.fields["vaultedCard"].type = payments_VaultedCard;
TransactionRequest._meta_.fields["externalId"] = {};
TransactionRequest._meta_.fields["externalId"].type = String;
TransactionRequest._meta_.fields["type"] = {};
TransactionRequest._meta_.fields["type"].type = remotepay_TransactionType;
TransactionRequest._meta_.fields["autoAcceptPaymentConfirmations"] = {};
TransactionRequest._meta_.fields["autoAcceptPaymentConfirmations"].type = Boolean;
TransactionRequest._meta_.fields["autoAcceptSignature"] = {};
TransactionRequest._meta_.fields["autoAcceptSignature"].type = Boolean;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionRequest;
}

