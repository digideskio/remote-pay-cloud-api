/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_CardType = require("../payments/CardType");
var payments_Payment = require("../payments/Payment");
var payments_Type = require("../payments/Type");

/**
* @constructor
* @memberof payments
*/
var Authorization = function() {
  this._class_ = Authorization;
  this.id = undefined;
  this.payment = undefined;
  this.tabName = undefined;
  this.amount = undefined;
  this.cardType = undefined;
  this.last4 = undefined;
  this.authcode = undefined;
  this.token = undefined;
  this.type = undefined;
  this.note = undefined;
  this.closingPayment = undefined;
  this.createdTime = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof payments.Authorization
* @param {String} id 
*/
Authorization.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof payments.Authorization
* @return {String} 
*/
Authorization.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* Payment that the auth was opened with
*
* @memberof payments.Authorization
* @param {payments.Payment} payment 
*/
Authorization.prototype.setPayment = function(payment) {
  this.payment = payment;
};

/**
* Get the field value
* Payment that the auth was opened with
* @memberof payments.Authorization
* @return {payments.Payment} 
*/
Authorization.prototype.getPayment = function() {
  return this.payment;
};

/**
* Set the field value
* Name of tab
*
* @memberof payments.Authorization
* @param {String|Null} tabName 
*/
Authorization.prototype.setTabName = function(tabName) {
  this.tabName = tabName;
};

/**
* Get the field value
* Name of tab
* @memberof payments.Authorization
* @return {String|Null} 
*/
Authorization.prototype.getTabName = function() {
  return this.tabName;
};

/**
* Set the field value
* Amount authorized
*
* @memberof payments.Authorization
* @param {Number} amount must be a long integer
*/
Authorization.prototype.setAmount = function(amount) {
  this.amount = amount;
};

/**
* Get the field value
* Amount authorized
* @memberof payments.Authorization
* @return {Number} must be a long integer
*/
Authorization.prototype.getAmount = function() {
  return this.amount;
};

/**
* Set the field value
* Type of credit card used for authorization
*
* @memberof payments.Authorization
* @param {payments.CardType} cardType 
*/
Authorization.prototype.setCardType = function(cardType) {
  this.cardType = cardType;
};

/**
* Get the field value
* Type of credit card used for authorization
* @memberof payments.Authorization
* @return {payments.CardType} 
*/
Authorization.prototype.getCardType = function() {
  return this.cardType;
};

/**
* Set the field value
* Last 4 digits of credit card used for authorization
*
* @memberof payments.Authorization
* @param {String} last4 
*/
Authorization.prototype.setLast4 = function(last4) {
  this.last4 = last4;
};

/**
* Get the field value
* Last 4 digits of credit card used for authorization
* @memberof payments.Authorization
* @return {String} 
*/
Authorization.prototype.getLast4 = function() {
  return this.last4;
};

/**
* Set the field value
* Authorization code
*
* @memberof payments.Authorization
* @param {String} authcode 
*/
Authorization.prototype.setAuthcode = function(authcode) {
  this.authcode = authcode;
};

/**
* Get the field value
* Authorization code
* @memberof payments.Authorization
* @return {String} 
*/
Authorization.prototype.getAuthcode = function() {
  return this.authcode;
};

/**
* Set the field value
* Token used for the authorization
*
* @memberof payments.Authorization
* @param {String} token 
*/
Authorization.prototype.setToken = function(token) {
  this.token = token;
};

/**
* Get the field value
* Token used for the authorization
* @memberof payments.Authorization
* @return {String} 
*/
Authorization.prototype.getToken = function() {
  return this.token;
};

/**
* Set the field value
* @memberof payments.Authorization
* @param {payments.Type} type 
*/
Authorization.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* @memberof payments.Authorization
* @return {payments.Type} 
*/
Authorization.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* @memberof payments.Authorization
* @param {String|Null} note 
*/
Authorization.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* @memberof payments.Authorization
* @return {String|Null} 
*/
Authorization.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* Payment that the auth was closed with
*
* @memberof payments.Authorization
* @param {payments.Payment} closingPayment 
*/
Authorization.prototype.setClosingPayment = function(closingPayment) {
  this.closingPayment = closingPayment;
};

/**
* Get the field value
* Payment that the auth was closed with
* @memberof payments.Authorization
* @return {payments.Payment} 
*/
Authorization.prototype.getClosingPayment = function() {
  return this.closingPayment;
};

/**
* Set the field value
* Time authorization was recorded on server
*
* @memberof payments.Authorization
* @param {Number} createdTime must be a long integer
*/
Authorization.prototype.setCreatedTime = function(createdTime) {
  this.createdTime = createdTime;
};

/**
* Get the field value
* Time authorization was recorded on server
* @memberof payments.Authorization
* @return {Number} must be a long integer
*/
Authorization.prototype.getCreatedTime = function() {
  return this.createdTime;
};

/**
* @memberof payments.Authorization
* @private
*/
Authorization.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    if(curclass._meta_._superMeta_) {
      curclass = curclass._meta_._superMeta_._class_;
    } else {
      curclass = null;
    }
  } while(curclass);
  return null;
};

Authorization.prototype.toString = function() {
  return JSON.stringify(this);
};

Authorization._meta_ =  {fields:  {}};
Authorization._meta_._class_ =  Authorization;
Authorization._meta_.fields["id"] = {};
Authorization._meta_.fields["id"].type = String;
Authorization._meta_.fields["payment"] = {};
Authorization._meta_.fields["payment"].type = payments_Payment;
Authorization._meta_.fields["tabName"] = {};
Authorization._meta_.fields["tabName"].type = String;
Authorization._meta_.fields["amount"] = {};
Authorization._meta_.fields["amount"].type = Number;
Authorization._meta_.fields["cardType"] = {};
Authorization._meta_.fields["cardType"].type = payments_CardType;
Authorization._meta_.fields["last4"] = {};
Authorization._meta_.fields["last4"].type = String;
Authorization._meta_.fields["authcode"] = {};
Authorization._meta_.fields["authcode"].type = String;
Authorization._meta_.fields["token"] = {};
Authorization._meta_.fields["token"].type = String;
Authorization._meta_.fields["type"] = {};
Authorization._meta_.fields["type"].type = payments_Type;
Authorization._meta_.fields["note"] = {};
Authorization._meta_.fields["note"].type = String;
Authorization._meta_.fields["closingPayment"] = {};
Authorization._meta_.fields["closingPayment"].type = payments_Payment;
Authorization._meta_.fields["createdTime"] = {};
Authorization._meta_.fields["createdTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Authorization;
}

