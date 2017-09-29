/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var payments_Payment = require("../payments/Payment");
var base_Signature = require("../base/Signature");
var payments_Refund = require("../payments/Refund");
var payments_Credit = require("../payments/Credit");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var FinishOkMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = FinishOkMessage;
  this.setMethod(remotemessage_Method["FINISH_OK"]);
  this.credit = undefined;
  this.payment = undefined;
  this.refund = undefined;
  this.signature = undefined;
  this.requestInfo = undefined;
};

FinishOkMessage.prototype = Object.create(remotemessage_Message.prototype);
FinishOkMessage.prototype.constructor = FinishOkMessage;

/**
* Set the field value
* A credit
*
* @memberof remotemessage.FinishOkMessage
* @param {payments.Credit} credit 
*/
FinishOkMessage.prototype.setCredit = function(credit) {
  this.credit = credit;
};

/**
* Get the field value
* A credit
* @memberof remotemessage.FinishOkMessage
* @return {payments.Credit} 
*/
FinishOkMessage.prototype.getCredit = function() {
  return this.credit;
};

/**
* Set the field value
* A payment
*
* @memberof remotemessage.FinishOkMessage
* @param {payments.Payment} payment 
*/
FinishOkMessage.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* A payment
* @memberof remotemessage.FinishOkMessage
* @return {payments.Payment} 
*/
FinishOkMessage.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* The refund
*
* @memberof remotemessage.FinishOkMessage
* @param {payments.Refund} refund 
*/
FinishOkMessage.prototype.setRefund = function(refund) {
  this.refund = refund;
};

/**
* Get the field value
* The refund
* @memberof remotemessage.FinishOkMessage
* @return {payments.Refund} 
*/
FinishOkMessage.prototype.getRefund = function() {
  return this.refund;
};

/**
* Set the field value
* A signature
*
* @memberof remotemessage.FinishOkMessage
* @param {base.Signature} signature 
*/
FinishOkMessage.prototype.setSignature = function(signature) {
  this.signature = signature;
};

/**
* Get the field value
* A signature
* @memberof remotemessage.FinishOkMessage
* @return {base.Signature} 
*/
FinishOkMessage.prototype.getSignature = function() {
  return this.signature;
};

/**
* Set the field value
* Extra information to include with the request, like type of request
*
* @memberof remotemessage.FinishOkMessage
* @param {String} requestInfo 
*/
FinishOkMessage.prototype.setRequestInfo = function(requestInfo) {
  this.requestInfo = requestInfo;
};

/**
* Get the field value
* Extra information to include with the request, like type of request
* @memberof remotemessage.FinishOkMessage
* @return {String} 
*/
FinishOkMessage.prototype.getRequestInfo = function() {
  return this.requestInfo;
};

FinishOkMessage._meta_ =  {fields:  {}};
FinishOkMessage._meta_._class_ =  FinishOkMessage;
FinishOkMessage._meta_._superMeta_ = remotemessage_Message._meta_;
FinishOkMessage._meta_.fields["credit"] = {};
FinishOkMessage._meta_.fields["credit"].type = payments_Credit;
FinishOkMessage._meta_.fields["payment"] = {};
FinishOkMessage._meta_.fields["payment"].type = payments_Payment;
FinishOkMessage._meta_.fields["refund"] = {};
FinishOkMessage._meta_.fields["refund"].type = payments_Refund;
FinishOkMessage._meta_.fields["signature"] = {};
FinishOkMessage._meta_.fields["signature"].type = base_Signature;
FinishOkMessage._meta_.fields["requestInfo"] = {};
FinishOkMessage._meta_.fields["requestInfo"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = FinishOkMessage;
}
