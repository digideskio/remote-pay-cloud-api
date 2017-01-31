/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_TransactionType = require("../remotepay/TransactionType");

/**
* @constructor
* @memberof remotepay
*/
var TransactionTypeEnum = function() {
  this._class_ = TransactionTypeEnum;
  this.status = undefined;
};


/**
* Set the field value
* @memberof remotepay.TransactionTypeEnum
* @param {remotepay.TransactionType} status 
*/
TransactionTypeEnum.prototype.setStatus = function(status) {
  this.status = status;
};

/**
* Get the field value
* @memberof remotepay.TransactionTypeEnum
* @return {remotepay.TransactionType} 
*/
TransactionTypeEnum.prototype.getStatus = function() {
  return this.status;
};

/**
* @memberof remotepay.TransactionTypeEnum
* @private
*/
TransactionTypeEnum.prototype.getMetaInfo = function(fieldName) {
  var curclass = this._class_;
  do {
    var fieldMetaInfo = curclass._meta_.fields[fieldName];
    if(fieldMetaInfo) {
      return fieldMetaInfo;
    }
    curclass = curclass.superclass;
  } while(curclass);
  return null;
};

TransactionTypeEnum.prototype.toString = function() {
  return JSON.stringify(this);
};

TransactionTypeEnum._meta_ =  {fields:  {}};
TransactionTypeEnum._meta_.fields["status"] = {};
TransactionTypeEnum._meta_.fields["status"].type = remotepay_TransactionType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TransactionTypeEnum;
}
