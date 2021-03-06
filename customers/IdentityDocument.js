/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/**
* @constructor
* @memberof customers
*/
var IdentityDocument = function() {
  this._class_ = IdentityDocument;
  this.type = undefined;
  this.number = undefined;
};


/**
* Set the field value
* Type of personal identification: National Document, Passport, etc
*
* @memberof customers.IdentityDocument
* @param {String} type 
*/
IdentityDocument.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* Type of personal identification: National Document, Passport, etc
* @memberof customers.IdentityDocument
* @return {String} 
*/
IdentityDocument.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* The identification number
*
* @memberof customers.IdentityDocument
* @param {String} number 
*/
IdentityDocument.prototype.setNumber = function(number) {
  this.number = number;
};

/**
* Get the field value
* The identification number
* @memberof customers.IdentityDocument
* @return {String} 
*/
IdentityDocument.prototype.getNumber = function() {
  return this.number;
};

/**
* @memberof customers.IdentityDocument
* @private
*/
IdentityDocument.prototype.getMetaInfo = function(fieldName) {
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

IdentityDocument.prototype.toString = function() {
  return JSON.stringify(this);
};

IdentityDocument._meta_ =  {fields:  {}};
IdentityDocument._meta_._class_ =  IdentityDocument;
IdentityDocument._meta_.fields["type"] = {};
IdentityDocument._meta_.fields["type"].type = String;
IdentityDocument._meta_.fields["number"] = {};
IdentityDocument._meta_.fields["number"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = IdentityDocument;
}

