/**
 * Manually edited. Extend PaymentResponse
 */

var remotepay_PaymentResponse = require("../remotepay/PaymentResponse");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var VoidPaymentResponse = function() {
  remotepay_PaymentResponse.call(this);
  this._superClass_ = remotepay_PaymentResponse;
  this._class_ = VoidPaymentResponse;
  this.paymentId = undefined;
};

VoidPaymentResponse.prototype = Object.create(remotepay_PaymentResponse.prototype);
VoidPaymentResponse.prototype.constructor = VoidPaymentResponse;

/**
* Set the field value
* The id of the payment voided
*
* @memberof remotepay.VoidPaymentResponse
* @param {String} paymentId 
*/
VoidPaymentResponse.prototype.setPaymentId = function(paymentId) {
  this.paymentId = paymentId;
};

/**
* Get the field value
* The id of the payment voided
* @memberof remotepay.VoidPaymentResponse
* @return {String} 
*/
VoidPaymentResponse.prototype.getPaymentId = function() {
  return this.paymentId;
};

VoidPaymentResponse._meta_ =  {fields:  {}};
VoidPaymentResponse._meta_._class_ =  VoidPaymentResponse;
VoidPaymentResponse._meta_._superMeta_ = remotepay_PaymentResponse._meta_;
VoidPaymentResponse._meta_.fields["paymentId"] = {};
VoidPaymentResponse._meta_.fields["paymentId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = VoidPaymentResponse;
}

