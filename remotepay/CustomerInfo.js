/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var customers_Customer = require("../customers/Customer");

/** Represents a customer that is linked to an external system.  This customer may be persisted in Clover, or it may not. */
/**
* @constructor
* @memberof remotepay
*/
var CustomerInfo = function() {
  this._class_ = CustomerInfo;
  this.customer = undefined;
  this.displayString = undefined;
  this.externalId = undefined;
  this.externalSystemName = undefined;
  this.extras = undefined;
};


/**
* Set the field value
* The customer object that Clover uses.  This is the base model for a Clover customer, any additional information external systems need should exist in other fields
*
* @memberof remotepay.CustomerInfo
* @param {customers.Customer} customer 
*/
CustomerInfo.prototype.setCustomer = function(customer) {
  this.customer = customer;
};

/**
* Get the field value
* The customer object that Clover uses.  This is the base model for a Clover customer, any additional information external systems need should exist in other fields
* @memberof remotepay.CustomerInfo
* @return {customers.Customer} 
*/
CustomerInfo.prototype.getCustomer = function() {
  return this.customer;
};

/**
* Set the field value
* A custom way to display this customer for an external system
*
* @memberof remotepay.CustomerInfo
* @param {String} displayString 
*/
CustomerInfo.prototype.setDisplayString = function(displayString) {
  this.displayString = displayString;
};

/**
* Get the field value
* A custom way to display this customer for an external system
* @memberof remotepay.CustomerInfo
* @return {String} 
*/
CustomerInfo.prototype.getDisplayString = function() {
  return this.displayString;
};

/**
* Set the field value
* an id for an external system to use to reference this Customer.
*
* @memberof remotepay.CustomerInfo
* @param {String} externalId 
*/
CustomerInfo.prototype.setExternalId = function(externalId) {
  this.externalId = externalId;
};

/**
* Get the field value
* an id for an external system to use to reference this Customer.
* @memberof remotepay.CustomerInfo
* @return {String} 
*/
CustomerInfo.prototype.getExternalId = function() {
  return this.externalId;
};

/**
* Set the field value
* The name of the external system that 'owns' this.  It is the system that understands the link from the externalId to the Customer.
*
* @memberof remotepay.CustomerInfo
* @param {String} externalSystemName 
*/
CustomerInfo.prototype.setExternalSystemName = function(externalSystemName) {
  this.externalSystemName = externalSystemName;
};

/**
* Get the field value
* The name of the external system that 'owns' this.  It is the system that understands the link from the externalId to the Customer.
* @memberof remotepay.CustomerInfo
* @return {String} 
*/
CustomerInfo.prototype.getExternalSystemName = function() {
  return this.externalSystemName;
};

/**
* Set the field value
* Extra data used by external systems.
*
* @memberof remotepay.CustomerInfo
* @param {Object.<String,String>} extras A map of <String> to <>
*/
CustomerInfo.prototype.setExtras = function(extras) {
  this.extras = extras;
};

/**
* Get the field value
* Extra data used by external systems.
* @memberof remotepay.CustomerInfo
* @return {Object.<String,String>} A map of <String> to <>
*/
CustomerInfo.prototype.getExtras = function() {
  return this.extras;
};

/**
* @memberof remotepay.CustomerInfo
* @private
*/
CustomerInfo.prototype.getMetaInfo = function(fieldName) {
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

CustomerInfo.prototype.toString = function() {
  return JSON.stringify(this);
};

CustomerInfo._meta_ =  {fields:  {}};
CustomerInfo._meta_._class_ =  CustomerInfo;
CustomerInfo._meta_.fields["customer"] = {};
CustomerInfo._meta_.fields["customer"].type = customers_Customer;
CustomerInfo._meta_.fields["displayString"] = {};
CustomerInfo._meta_.fields["displayString"].type = String;
CustomerInfo._meta_.fields["externalId"] = {};
CustomerInfo._meta_.fields["externalId"].type = String;
CustomerInfo._meta_.fields["externalSystemName"] = {};
CustomerInfo._meta_.fields["externalSystemName"].type = String;
CustomerInfo._meta_.fields["extras"] = {};
CustomerInfo._meta_.fields["extras"].type = Object;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = CustomerInfo;
}

