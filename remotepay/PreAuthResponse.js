/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_PaymentResponse = require("../remotepay/PaymentResponse");

/**
* @constructor
* @augments remotepay.PaymentResponse
* @memberof remotepay
*/
var PreAuthResponse = function() {
  remotepay_PaymentResponse.call(this);
  this._superClass_ = remotepay_PaymentResponse;
  this._class_ = PreAuthResponse;
};

PreAuthResponse.prototype = Object.create(remotepay_PaymentResponse.prototype);
PreAuthResponse.prototype.constructor = PreAuthResponse;

PreAuthResponse._meta_ =  {fields:  {}};

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PreAuthResponse;
}
