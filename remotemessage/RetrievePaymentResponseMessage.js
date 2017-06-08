/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");
var remotemessage_QueryStatus = require("../remotemessage/QueryStatus");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var RetrievePaymentResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = RetrievePaymentResponseMessage;
  this.setMethod(remotemessage_Method["RETRIEVE_PAYMENT_RESPONSE"]);
  this.reason = undefined;
  this.externalPaymentId = undefined;
  this.queryStatus = undefined;
  this.payment = undefined;
};

RetrievePaymentResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
RetrievePaymentResponseMessage.prototype.constructor = RetrievePaymentResponseMessage;

/**
* Set the field value
* May be populated when the operation fails.
*
* @memberof remotemessage.RetrievePaymentResponseMessage
* @param {String} reason 
*/
RetrievePaymentResponseMessage.prototype.setReason = function(reason) {
  this.reason = reason;
};

/**
* Get the field value
* May be populated when the operation fails.
* @memberof remotemessage.RetrievePaymentResponseMessage
* @return {String} 
*/
RetrievePaymentResponseMessage.prototype.getReason = function() {
  return this.reason;
};

/**
* Set the field value
* The externalPaymentId used when a payment was created
*
* @memberof remotemessage.RetrievePaymentResponseMessage
* @param {String} externalPaymentId 
*/
RetrievePaymentResponseMessage.prototype.setExternalPaymentId = function(externalPaymentId) {
  this.externalPaymentId = externalPaymentId;
};

/**
* Get the field value
* The externalPaymentId used when a payment was created
* @memberof remotemessage.RetrievePaymentResponseMessage
* @return {String} 
*/
RetrievePaymentResponseMessage.prototype.getExternalPaymentId = function() {
  return this.externalPaymentId;
};

/**
* Set the field value
* The status of the query
*
* @memberof remotemessage.RetrievePaymentResponseMessage
* @param {remotemessage.QueryStatus} queryStatus 
*/
RetrievePaymentResponseMessage.prototype.setQueryStatus = function(queryStatus) {
  this.queryStatus = queryStatus;
};

/**
* Get the field value
* The status of the query
* @memberof remotemessage.RetrievePaymentResponseMessage
* @return {remotemessage.QueryStatus} 
*/
RetrievePaymentResponseMessage.prototype.getQueryStatus = function() {
  return this.queryStatus;
};

/**
* Set the field value
* Payment information
*
* @memberof remotemessage.RetrievePaymentResponseMessage
* @param {payments.Payment} payment 
*/
RetrievePaymentResponseMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* Payment information
* @memberof remotemessage.RetrievePaymentResponseMessage
* @return {payments.Payment} 
*/
RetrievePaymentResponseMessage.prototype.getPayment = function() {
  return this.payment;
};

RetrievePaymentResponseMessage._meta_ =  {fields:  {}};
RetrievePaymentResponseMessage._meta_._class_ =  RetrievePaymentResponseMessage;
RetrievePaymentResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
RetrievePaymentResponseMessage._meta_.fields["reason"] = {};
RetrievePaymentResponseMessage._meta_.fields["reason"].type = String;
RetrievePaymentResponseMessage._meta_.fields["externalPaymentId"] = {};
RetrievePaymentResponseMessage._meta_.fields["externalPaymentId"].type = String;
RetrievePaymentResponseMessage._meta_.fields["queryStatus"] = {};
RetrievePaymentResponseMessage._meta_.fields["queryStatus"].type = remotemessage_QueryStatus;
RetrievePaymentResponseMessage._meta_.fields["payment"] = {};
RetrievePaymentResponseMessage._meta_.fields["payment"].type = payments_Payment;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrievePaymentResponseMessage;
}

