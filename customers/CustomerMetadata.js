/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");

/**
* @constructor
* @memberof customers
*/
var CustomerMetadata = function() {
  this._class_ = CustomerMetadata;
  this.businessName = undefined;
  this.note = undefined;
  this.dobYear = undefined;
  this.dobMonth = undefined;
  this.dobDay = undefined;
  this.modifiedTime = undefined;
  this.customer = undefined;
};


/**
* Set the field value
* The name of the business the customer is associated with.
*
* @memberof customers.CustomerMetadata
* @param {String} businessName 
*/
CustomerMetadata.prototype.setBusinessName = function(businessName) {
  this.businessName = businessName;
};

/**
* Get the field value
* The name of the business the customer is associated with.
* @memberof customers.CustomerMetadata
* @return {String} 
*/
CustomerMetadata.prototype.getBusinessName = function() {
  return this.businessName;
};

/**
* Set the field value
* A note about the customer.
*
* @memberof customers.CustomerMetadata
* @param {String} note 
*/
CustomerMetadata.prototype.setNote = function(note) {
  this.note = note;
};

/**
* Get the field value
* A note about the customer.
* @memberof customers.CustomerMetadata
* @return {String} 
*/
CustomerMetadata.prototype.getNote = function() {
  return this.note;
};

/**
* Set the field value
* The year part of the date of birth for this customer. This part of the date of birth is optional, i.e., it's possible that only dobMonth and dobDay are populated.
*
* @memberof customers.CustomerMetadata
* @param {Number} dobYear must be an integer
*/
CustomerMetadata.prototype.setDobYear = function(dobYear) {
  this.dobYear = dobYear;
};

/**
* Get the field value
* The year part of the date of birth for this customer. This part of the date of birth is optional, i.e., it's possible that only dobMonth and dobDay are populated.
* @memberof customers.CustomerMetadata
* @return {Number} must be an integer
*/
CustomerMetadata.prototype.getDobYear = function() {
  return this.dobYear;
};

/**
* Set the field value
* The month part of the date of birth for this customer.
*
* @memberof customers.CustomerMetadata
* @param {Number} dobMonth must be an integer
*/
CustomerMetadata.prototype.setDobMonth = function(dobMonth) {
  this.dobMonth = dobMonth;
};

/**
* Get the field value
* The month part of the date of birth for this customer.
* @memberof customers.CustomerMetadata
* @return {Number} must be an integer
*/
CustomerMetadata.prototype.getDobMonth = function() {
  return this.dobMonth;
};

/**
* Set the field value
* The day part of the date of birth for this customer.
*
* @memberof customers.CustomerMetadata
* @param {Number} dobDay must be an integer
*/
CustomerMetadata.prototype.setDobDay = function(dobDay) {
  this.dobDay = dobDay;
};

/**
* Get the field value
* The day part of the date of birth for this customer.
* @memberof customers.CustomerMetadata
* @return {Number} must be an integer
*/
CustomerMetadata.prototype.getDobDay = function() {
  return this.dobDay;
};

/**
* Set the field value
* The timestamp from when this customer's data was last updated.
*
* @memberof customers.CustomerMetadata
* @param {Number} modifiedTime must be a long integer
*/
CustomerMetadata.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* The timestamp from when this customer's data was last updated.
* @memberof customers.CustomerMetadata
* @return {Number} must be a long integer
*/
CustomerMetadata.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Set the field value
* Customer who this metadata belongs to.
*
* @memberof customers.CustomerMetadata
* @param {base.Reference} customer 
*/
CustomerMetadata.prototype.setCustomer = function(customer) {
  this.customer = customer;
};

/**
* Get the field value
* Customer who this metadata belongs to.
* @memberof customers.CustomerMetadata
* @return {base.Reference} 
*/
CustomerMetadata.prototype.getCustomer = function() {
  return this.customer;
};

/**
* @memberof customers.CustomerMetadata
* @private
*/
CustomerMetadata.prototype.getMetaInfo = function(fieldName) {
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

CustomerMetadata.prototype.toString = function() {
  return JSON.stringify(this);
};

CustomerMetadata._meta_ =  {fields:  {}};
CustomerMetadata._meta_._class_ =  CustomerMetadata;
CustomerMetadata._meta_.fields["businessName"] = {};
CustomerMetadata._meta_.fields["businessName"].type = String;
CustomerMetadata._meta_.fields["note"] = {};
CustomerMetadata._meta_.fields["note"].type = String;
CustomerMetadata._meta_.fields["dobYear"] = {};
CustomerMetadata._meta_.fields["dobYear"].type = Number;
CustomerMetadata._meta_.fields["dobMonth"] = {};
CustomerMetadata._meta_.fields["dobMonth"].type = Number;
CustomerMetadata._meta_.fields["dobDay"] = {};
CustomerMetadata._meta_.fields["dobDay"].type = Number;
CustomerMetadata._meta_.fields["modifiedTime"] = {};
CustomerMetadata._meta_.fields["modifiedTime"].type = Number;
CustomerMetadata._meta_.fields["customer"] = {};
CustomerMetadata._meta_.fields["customer"].type = base_Reference;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CustomerMetadata;
}

