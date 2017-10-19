/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");

/** Captures a previously made pre auth */
/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var CapturePreAuthRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = CapturePreAuthRequest;
  this.amount = undefined;
  this.tipAmount = undefined;
  this.paymentId = undefined;
};

CapturePreAuthRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
CapturePreAuthRequest.prototype.constructor = CapturePreAuthRequest;

/**
* Set the field value
* Total amount paid
*
* @memberof remotepay.CapturePreAuthRequest
* @param {Number} amount must be a long integer
*/
CapturePreAuthRequest.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Total amount paid
* @memberof remotepay.CapturePreAuthRequest
* @return {Number} must be a long integer
*/
CapturePreAuthRequest.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Amount paid in tips
*
* @memberof remotepay.CapturePreAuthRequest
* @param {Number|Null} tipAmount must be a long integer, 
*/
CapturePreAuthRequest.prototype.setTipAmount = function(tipAmount) {
  this.tipAmount = tipAmount;
};

/**
* Get the field value
* Amount paid in tips
* @memberof remotepay.CapturePreAuthRequest
* @return {Number|Null} must be a long integer, 
*/
CapturePreAuthRequest.prototype.getTipAmount = function() {
  return this.tipAmount;
};

/**
* Set the field value
* Unique identifier for a payment
*
* @memberof remotepay.CapturePreAuthRequest
* @param {String} paymentId 
*/
CapturePreAuthRequest.prototype.setPaymentId = function(paymentId) {
  this.paymentId = paymentId;
};

/**
* Get the field value
* Unique identifier for a payment
* @memberof remotepay.CapturePreAuthRequest
* @return {String} 
*/
CapturePreAuthRequest.prototype.getPaymentId = function() {
  return this.paymentId;
};

CapturePreAuthRequest._meta_ =  {fields:  {}};
CapturePreAuthRequest._meta_._class_ =  CapturePreAuthRequest;
CapturePreAuthRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
CapturePreAuthRequest._meta_.fields["amount"] = {};
CapturePreAuthRequest._meta_.fields["amount"].type = Number;
CapturePreAuthRequest._meta_.fields["tipAmount"] = {};
CapturePreAuthRequest._meta_.fields["tipAmount"].type = Number;
CapturePreAuthRequest._meta_.fields["paymentId"] = {};
CapturePreAuthRequest._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CapturePreAuthRequest;
}
