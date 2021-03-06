/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_PendingPaymentEntry = require("../base/PendingPaymentEntry");
var remotepay_BaseResponse = require("../remotepay/BaseResponse");

/**
* @constructor
* @augments remotepay.BaseResponse
* @memberof remotepay
*/
var RetrievePendingPaymentsResponse = function() {
  remotepay_BaseResponse.call(this);
  this._superClass_ = remotepay_BaseResponse;
  this._class_ = RetrievePendingPaymentsResponse;
  this.pendingPaymentEntries = undefined;
};

RetrievePendingPaymentsResponse.prototype = Object.create(remotepay_BaseResponse.prototype);
RetrievePendingPaymentsResponse.prototype.constructor = RetrievePendingPaymentsResponse;

/**
* Set the field value
* The pending payments.
*
* @memberof remotepay.RetrievePendingPaymentsResponse
* @param {Array.<base.PendingPaymentEntry>} pendingPaymentEntries An array of 
*/
RetrievePendingPaymentsResponse.prototype.setPendingPaymentEntries = function(pendingPaymentEntries) {
  this.pendingPaymentEntries = pendingPaymentEntries;
};

/**
* Get the field value
* The pending payments.
* @memberof remotepay.RetrievePendingPaymentsResponse
* @return {Array.<base.PendingPaymentEntry>} An array of 
*/
RetrievePendingPaymentsResponse.prototype.getPendingPaymentEntries = function() {
  return this.pendingPaymentEntries;
};

RetrievePendingPaymentsResponse._meta_ =  {fields:  {}};
RetrievePendingPaymentsResponse._meta_._class_ =  RetrievePendingPaymentsResponse;
RetrievePendingPaymentsResponse._meta_._superMeta_ = remotepay_BaseResponse._meta_;
RetrievePendingPaymentsResponse._meta_.fields["pendingPaymentEntries"] = {};
RetrievePendingPaymentsResponse._meta_.fields["pendingPaymentEntries"].type = Array;
RetrievePendingPaymentsResponse._meta_.fields["pendingPaymentEntries"].elementType = base_PendingPaymentEntry;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = RetrievePendingPaymentsResponse;
}

