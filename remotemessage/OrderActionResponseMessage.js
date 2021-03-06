/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotemessage_Method = require("../remotemessage/Method");
var remotemessage_Message = require("../remotemessage/Message");
var remotemessage_OrderActionResponse = require("../remotemessage/OrderActionResponse");

/**
* @constructor
* @augments remotemessage.Message
* @memberof remotemessage
*/
var OrderActionResponseMessage = function() {
  remotemessage_Message.call(this);
  this._superClass_ = remotemessage_Message;
  this._class_ = OrderActionResponseMessage;
  this.setMethod(remotemessage_Method["ORDER_ACTION_RESPONSE"]);
  this.orderActionResponse = undefined;
};

OrderActionResponseMessage.prototype = Object.create(remotemessage_Message.prototype);
OrderActionResponseMessage.prototype.constructor = OrderActionResponseMessage;

/**
* Set the field value
* @memberof remotemessage.OrderActionResponseMessage
* @param {remotemessage.OrderActionResponse} orderActionResponse 
*/
OrderActionResponseMessage.prototype.setOrderActionResponse = function(orderActionResponse) {
  this.orderActionResponse = orderActionResponse;
};

/**
* Get the field value
* @memberof remotemessage.OrderActionResponseMessage
* @return {remotemessage.OrderActionResponse} 
*/
OrderActionResponseMessage.prototype.getOrderActionResponse = function() {
  return this.orderActionResponse;
};

OrderActionResponseMessage._meta_ =  {fields:  {}};
OrderActionResponseMessage._meta_._class_ =  OrderActionResponseMessage;
OrderActionResponseMessage._meta_._superMeta_ = remotemessage_Message._meta_;
OrderActionResponseMessage._meta_.fields["orderActionResponse"] = {};
OrderActionResponseMessage._meta_.fields["orderActionResponse"].type = remotemessage_OrderActionResponse;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = OrderActionResponseMessage;
}

