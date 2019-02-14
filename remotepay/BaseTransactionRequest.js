/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 *
 * manually edited REMOVED orderId... we have skipServer flag in avro maybe need "skipSDK" Flag
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var remotepay_TransactionType = require("../remotepay/TransactionType");
var payments_VaultedCard = require("../payments/VaultedCard");

/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var BaseTransactionRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = BaseTransactionRequest;
  this.disablePrinting = undefined;
  this.disableReceiptSelection = undefined;
  this.disableDuplicateChecking = undefined;
  this.cardNotPresent = undefined;
  this.disableRestartTransactionOnFail = undefined;
  this.amount = undefined;
  this.cardEntryMethods = undefined;
  this.vaultedCard = undefined;
  this.externalId = undefined;
  this.type = undefined;
  this.autoAcceptPaymentConfirmations = undefined;
  this.extras = undefined;
  this.regionalExtras = undefined;
};

BaseTransactionRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
BaseTransactionRequest.prototype.constructor = BaseTransactionRequest;

/**
* Set the field value
* If true, then do not print using the clover printer.  Return print information.
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} disablePrinting 
*/
BaseTransactionRequest.prototype.setDisablePrinting = function(disablePrinting) {
  this.disablePrinting = disablePrinting;
};

/**
* Get the field value
* If true, then do not print using the clover printer.  Return print information.
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getDisablePrinting = function() {
  return this.disablePrinting;
};

/**
* Set the field value
* Do not show the receipt options screen
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} disableReceiptSelection 
*/
BaseTransactionRequest.prototype.setDisableReceiptSelection = function(disableReceiptSelection) {
  this.disableReceiptSelection = disableReceiptSelection;
};

/**
* Get the field value
* Do not show the receipt options screen
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getDisableReceiptSelection = function() {
  return this.disableReceiptSelection;
};

/**
* Set the field value
* Do not do heuristic duplicate checking
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} disableDuplicateChecking 
*/
BaseTransactionRequest.prototype.setDisableDuplicateChecking = function(disableDuplicateChecking) {
  this.disableDuplicateChecking = disableDuplicateChecking;
};

/**
* Get the field value
* Do not do heuristic duplicate checking
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getDisableDuplicateChecking = function() {
  return this.disableDuplicateChecking;
};

/**
* Set the field value
* If true then card not present is accepted
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} cardNotPresent 
*/
BaseTransactionRequest.prototype.setCardNotPresent = function(cardNotPresent) {
  this.cardNotPresent = cardNotPresent;
};

/**
* Get the field value
* If true then card not present is accepted
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getCardNotPresent = function() {
  return this.cardNotPresent;
};

/**
* Set the field value
* If the transaction times out or fails because of decline, do not restart it
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} disableRestartTransactionOnFail 
*/
BaseTransactionRequest.prototype.setDisableRestartTransactionOnFail = function(disableRestartTransactionOnFail) {
  this.disableRestartTransactionOnFail = disableRestartTransactionOnFail;
};

/**
* Get the field value
* If the transaction times out or fails because of decline, do not restart it
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getDisableRestartTransactionOnFail = function() {
  return this.disableRestartTransactionOnFail;
};

/**
* Set the field value
* Total amount paid
*
* @memberof remotepay.BaseTransactionRequest
* @param {Number} amount must be a long integer
*/
BaseTransactionRequest.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Total amount paid
* @memberof remotepay.BaseTransactionRequest
* @return {Number} must be a long integer
*/
BaseTransactionRequest.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Allowed entry methods
*
* @memberof remotepay.BaseTransactionRequest
* @param {Number|Null} cardEntryMethods must be an integer, 
*/
BaseTransactionRequest.prototype.setCardEntryMethods = function(cardEntryMethods) {
  this.cardEntryMethods = cardEntryMethods;
};

/**
* Get the field value
* Allowed entry methods
* @memberof remotepay.BaseTransactionRequest
* @return {Number|Null} must be an integer, 
*/
BaseTransactionRequest.prototype.getCardEntryMethods = function() {
  return this.cardEntryMethods;
};

/**
* Set the field value
* A saved card
*
* @memberof remotepay.BaseTransactionRequest
* @param {payments.VaultedCard|Null} vaultedCard 
*/
BaseTransactionRequest.prototype.setVaultedCard = function(vaultedCard) {
  this.vaultedCard = vaultedCard;
};

/**
* Get the field value
* A saved card
* @memberof remotepay.BaseTransactionRequest
* @return {payments.VaultedCard|Null} 
*/
BaseTransactionRequest.prototype.getVaultedCard = function() {
  return this.vaultedCard;
};

/**
* Set the field value
* An id that will be persisted with transactions.
*
* @memberof remotepay.BaseTransactionRequest
* @param {String} externalId 
*/
BaseTransactionRequest.prototype.setExternalId = function(externalId) {
  this.externalId = externalId;
};

/**
* Get the field value
* An id that will be persisted with transactions.
* @memberof remotepay.BaseTransactionRequest
* @return {String} 
*/
BaseTransactionRequest.prototype.getExternalId = function() {
  return this.externalId;
};

/**
* Set the field value
* The type of the transaction.
*
* @memberof remotepay.BaseTransactionRequest
* @param {remotepay.TransactionType} type 
*/
BaseTransactionRequest.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* The type of the transaction.
* @memberof remotepay.BaseTransactionRequest
* @return {remotepay.TransactionType} 
*/
BaseTransactionRequest.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* Do not show/send potential duplicate challenges
*
* @memberof remotepay.BaseTransactionRequest
* @param {Boolean|Null} autoAcceptPaymentConfirmations 
*/
BaseTransactionRequest.prototype.setAutoAcceptPaymentConfirmations = function(autoAcceptPaymentConfirmations) {
  this.autoAcceptPaymentConfirmations = autoAcceptPaymentConfirmations;
};

/**
* Get the field value
* Do not show/send potential duplicate challenges
* @memberof remotepay.BaseTransactionRequest
* @return {Boolean|Null} 
*/
BaseTransactionRequest.prototype.getAutoAcceptPaymentConfirmations = function() {
  return this.autoAcceptPaymentConfirmations;
};

/**
* Set the field value
* Extra pass-through data used by external systems.
*
* @memberof remotepay.BaseTransactionRequest
* @param {Object.<String,String>} extras A map of <String> to <>
*/
BaseTransactionRequest.prototype.setExtras = function(extras) {
  this.extras = extras;
};

/**
* Get the field value
* Extra pass-through data used by external systems.
* @memberof remotepay.BaseTransactionRequest
* @return {Object.<String,String>} A map of <String> to <>
*/
BaseTransactionRequest.prototype.getExtras = function() {
  return this.extras;
};

/**
* Set the field value
* A map of values for regional specific data
*
* @memberof remotepay.BaseTransactionRequest
* @param {Object.<String,String>} regionalExtras A map of <String> to <>
*/
BaseTransactionRequest.prototype.setRegionalExtras = function(regionalExtras) {
  this.regionalExtras = regionalExtras;
};

/**
* Get the field value
* A map of values for regional specific data
* @memberof remotepay.BaseTransactionRequest
* @return {Object.<String,String>} A map of <String> to <>
*/
BaseTransactionRequest.prototype.getRegionalExtras = function() {
  return this.regionalExtras;
};

BaseTransactionRequest._meta_ =  {fields:  {}};
BaseTransactionRequest._meta_._class_ =  BaseTransactionRequest;
BaseTransactionRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
BaseTransactionRequest._meta_.fields["disablePrinting"] = {};
BaseTransactionRequest._meta_.fields["disablePrinting"].type = Boolean;
BaseTransactionRequest._meta_.fields["disableReceiptSelection"] = {};
BaseTransactionRequest._meta_.fields["disableReceiptSelection"].type = Boolean;
BaseTransactionRequest._meta_.fields["disableDuplicateChecking"] = {};
BaseTransactionRequest._meta_.fields["disableDuplicateChecking"].type = Boolean;
BaseTransactionRequest._meta_.fields["cardNotPresent"] = {};
BaseTransactionRequest._meta_.fields["cardNotPresent"].type = Boolean;
BaseTransactionRequest._meta_.fields["disableRestartTransactionOnFail"] = {};
BaseTransactionRequest._meta_.fields["disableRestartTransactionOnFail"].type = Boolean;
BaseTransactionRequest._meta_.fields["amount"] = {};
BaseTransactionRequest._meta_.fields["amount"].type = Number;
BaseTransactionRequest._meta_.fields["cardEntryMethods"] = {};
BaseTransactionRequest._meta_.fields["cardEntryMethods"].type = Number;
BaseTransactionRequest._meta_.fields["vaultedCard"] = {};
BaseTransactionRequest._meta_.fields["vaultedCard"].type = payments_VaultedCard;
BaseTransactionRequest._meta_.fields["externalId"] = {};
BaseTransactionRequest._meta_.fields["externalId"].type = String;
BaseTransactionRequest._meta_.fields["type"] = {};
BaseTransactionRequest._meta_.fields["type"].type = remotepay_TransactionType;
BaseTransactionRequest._meta_.fields["autoAcceptPaymentConfirmations"] = {};
BaseTransactionRequest._meta_.fields["autoAcceptPaymentConfirmations"].type = Boolean;
BaseTransactionRequest._meta_.fields["extras"] = {};
BaseTransactionRequest._meta_.fields["extras"].type = Object;
BaseTransactionRequest._meta_.fields["regionalExtras"] = {};
BaseTransactionRequest._meta_.fields["regionalExtras"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BaseTransactionRequest;
}

