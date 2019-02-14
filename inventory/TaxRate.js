/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var base_Reference = require("../base/Reference");
var inventory_TaxType = require("../inventory/TaxType");

/**
* @constructor
* @memberof inventory
*/
var TaxRate = function() {
  this._class_ = TaxRate;
  this.id = undefined;
  this.lineItemRef = undefined;
  this.name = undefined;
  this.taxType = undefined;
  this.rate = undefined;
  this.isDefault = undefined;
  this.items = undefined;
  this.taxAmount = undefined;
  this.deletedTime = undefined;
  this.modifiedTime = undefined;
};


/**
* Set the field value
* @memberof inventory.TaxRate
* @param {String} id 
*/
TaxRate.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* @memberof inventory.TaxRate
* @return {String} 
*/
TaxRate.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* The line item with which the tax rate is associated
*
* @memberof inventory.TaxRate
* @param {base.Reference} lineItemRef 
*/
TaxRate.prototype.setLineItemRef = function(lineItemRef) {
  this.lineItemRef = lineItemRef;
};

/**
* Get the field value
* The line item with which the tax rate is associated
* @memberof inventory.TaxRate
* @return {base.Reference} 
*/
TaxRate.prototype.getLineItemRef = function() {
  return this.lineItemRef;
};

/**
* Set the field value
* @memberof inventory.TaxRate
* @param {String} name 
*/
TaxRate.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* @memberof inventory.TaxRate
* @return {String} 
*/
TaxRate.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* to support Argentina's tax type
*
* @memberof inventory.TaxRate
* @param {inventory.TaxType} taxType 
*/
TaxRate.prototype.setTaxType = function(taxType) {
  this.taxType = taxType;
};

/**
* Get the field value
* to support Argentina's tax type
* @memberof inventory.TaxRate
* @return {inventory.TaxType} 
*/
TaxRate.prototype.getTaxType = function() {
  return this.taxType;
};

/**
* Set the field value
* For percentage based discounts like sales tax
*
* @memberof inventory.TaxRate
* @param {Number} rate must be a long integer
*/
TaxRate.prototype.setRate = function(rate) {
  this.rate = rate;
};

/**
* Get the field value
* For percentage based discounts like sales tax
* @memberof inventory.TaxRate
* @return {Number} must be a long integer
*/
TaxRate.prototype.getRate = function() {
  return this.rate;
};

/**
* Set the field value
* @memberof inventory.TaxRate
* @param {Boolean} isDefault 
*/
TaxRate.prototype.setIsDefault = function(isDefault) {
  this.isDefault = isDefault;
};

/**
* Get the field value
* @memberof inventory.TaxRate
* @return {Boolean} 
*/
TaxRate.prototype.getIsDefault = function() {
  return this.isDefault;
};

/**
* Set the field value
* Items associated with this tax rate
*
* @memberof inventory.TaxRate
* @param {Array.<base.Reference>} items An array of 
*/
TaxRate.prototype.setItems = function(items) {
  this.items = items;
};

/**
* Get the field value
* Items associated with this tax rate
* @memberof inventory.TaxRate
* @return {Array.<base.Reference>} An array of 
*/
TaxRate.prototype.getItems = function() {
  return this.items;
};

/**
* Set the field value
* For a flat tax like recycling redemption fee, expressed as number of cents
*
* @memberof inventory.TaxRate
* @param {Number} taxAmount must be a long integer
*/
TaxRate.prototype.setTaxAmount = function(taxAmount) {
  this.taxAmount = taxAmount;
};

/**
* Get the field value
* For a flat tax like recycling redemption fee, expressed as number of cents
* @memberof inventory.TaxRate
* @return {Number} must be a long integer
*/
TaxRate.prototype.getTaxAmount = function() {
  return this.taxAmount;
};

/**
* Set the field value
* Timestamp when tax rate was last deleted
*
* @memberof inventory.TaxRate
* @param {Number} deletedTime must be a long integer
*/
TaxRate.prototype.setDeletedTime = function(deletedTime) {
  this.deletedTime = deletedTime;
};

/**
* Get the field value
* Timestamp when tax rate was last deleted
* @memberof inventory.TaxRate
* @return {Number} must be a long integer
*/
TaxRate.prototype.getDeletedTime = function() {
  return this.deletedTime;
};

/**
* Set the field value
* Timestamp when tax rate was last modified
*
* @memberof inventory.TaxRate
* @param {Number} modifiedTime must be a long integer
*/
TaxRate.prototype.setModifiedTime = function(modifiedTime) {
  this.modifiedTime = modifiedTime;
};

/**
* Get the field value
* Timestamp when tax rate was last modified
* @memberof inventory.TaxRate
* @return {Number} must be a long integer
*/
TaxRate.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* @memberof inventory.TaxRate
* @private
*/
TaxRate.prototype.getMetaInfo = function(fieldName) {
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

TaxRate.prototype.toString = function() {
  return JSON.stringify(this);
};

TaxRate._meta_ =  {fields:  {}};
TaxRate._meta_._class_ =  TaxRate;
TaxRate._meta_.fields["id"] = {};
TaxRate._meta_.fields["id"].type = String;
TaxRate._meta_.fields["lineItemRef"] = {};
TaxRate._meta_.fields["lineItemRef"].type = base_Reference;
TaxRate._meta_.fields["name"] = {};
TaxRate._meta_.fields["name"].type = String;
TaxRate._meta_.fields["taxType"] = {};
TaxRate._meta_.fields["taxType"].type = inventory_TaxType;
TaxRate._meta_.fields["rate"] = {};
TaxRate._meta_.fields["rate"].type = Number;
TaxRate._meta_.fields["isDefault"] = {};
TaxRate._meta_.fields["isDefault"].type = Boolean;
TaxRate._meta_.fields["items"] = {};
TaxRate._meta_.fields["items"].type = Array;
TaxRate._meta_.fields["items"].elementType = base_Reference;
TaxRate._meta_.fields["taxAmount"] = {};
TaxRate._meta_.fields["taxAmount"].type = Number;
TaxRate._meta_.fields["deletedTime"] = {};
TaxRate._meta_.fields["deletedTime"].type = Number;
TaxRate._meta_.fields["modifiedTime"] = {};
TaxRate._meta_.fields["modifiedTime"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TaxRate;
}

