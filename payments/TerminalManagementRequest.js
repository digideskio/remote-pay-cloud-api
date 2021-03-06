/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_ManagementPlanDataType = require("../payments/ManagementPlanDataType");
var payments_TerminalManagementComponent = require("../payments/TerminalManagementComponent");

/**
* @constructor
* @memberof payments
*/
var TerminalManagementRequest = function() {
  this._class_ = TerminalManagementRequest;
  this.requestDataType = undefined;
  this.production = undefined;
  this.profile = undefined;
  this.components = undefined;
};


/**
* Set the field value
* The requested data type
*
* @memberof payments.TerminalManagementRequest
* @param {payments.ManagementPlanDataType} requestDataType 
*/
TerminalManagementRequest.prototype.setRequestDataType = function(requestDataType) {
  this.requestDataType = requestDataType;
};

/**
* Get the field value
* The requested data type
* @memberof payments.TerminalManagementRequest
* @return {payments.ManagementPlanDataType} 
*/
TerminalManagementRequest.prototype.getRequestDataType = function() {
  return this.requestDataType;
};

/**
* Set the field value
* True if request is for prod (used for capk loading)
*
* @memberof payments.TerminalManagementRequest
* @param {Boolean} production 
*/
TerminalManagementRequest.prototype.setProduction = function(production) {
  this.production = production;
};

/**
* Get the field value
* True if request is for prod (used for capk loading)
* @memberof payments.TerminalManagementRequest
* @return {Boolean} 
*/
TerminalManagementRequest.prototype.getProduction = function() {
  return this.production;
};

/**
* Set the field value
* Optional name for a capk profile to load
*
* @memberof payments.TerminalManagementRequest
* @param {String} profile 
*/
TerminalManagementRequest.prototype.setProfile = function(profile) {
  this.profile = profile;
};

/**
* Get the field value
* Optional name for a capk profile to load
* @memberof payments.TerminalManagementRequest
* @return {String} 
*/
TerminalManagementRequest.prototype.getProfile = function() {
  return this.profile;
};

/**
* Set the field value
* @memberof payments.TerminalManagementRequest
* @param {Array.<payments.TerminalManagementComponent>} components An array of 
*/
TerminalManagementRequest.prototype.setComponents = function(components) {
  this.components = components;
};

/**
* Get the field value
* @memberof payments.TerminalManagementRequest
* @return {Array.<payments.TerminalManagementComponent>} An array of 
*/
TerminalManagementRequest.prototype.getComponents = function() {
  return this.components;
};

/**
* @memberof payments.TerminalManagementRequest
* @private
*/
TerminalManagementRequest.prototype.getMetaInfo = function(fieldName) {
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

TerminalManagementRequest.prototype.toString = function() {
  return JSON.stringify(this);
};

TerminalManagementRequest._meta_ =  {fields:  {}};
TerminalManagementRequest._meta_._class_ =  TerminalManagementRequest;
TerminalManagementRequest._meta_.fields["requestDataType"] = {};
TerminalManagementRequest._meta_.fields["requestDataType"].type = payments_ManagementPlanDataType;
TerminalManagementRequest._meta_.fields["production"] = {};
TerminalManagementRequest._meta_.fields["production"].type = Boolean;
TerminalManagementRequest._meta_.fields["profile"] = {};
TerminalManagementRequest._meta_.fields["profile"].type = String;
TerminalManagementRequest._meta_.fields["components"] = {};
TerminalManagementRequest._meta_.fields["components"].type = Array;
TerminalManagementRequest._meta_.fields["components"].elementType = payments_TerminalManagementComponent;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TerminalManagementRequest;
}

