/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */


/** The base for requests */
/**
* @constructor
* @memberof remotepay
*/
var BaseRequest = function() {
  this._class_ = BaseRequest;
  this.requestId = undefined;
  this.version = undefined;
};


/**
* Set the field value
* Identifier for the request
*
* @memberof remotepay.BaseRequest
* @param {String|Null} requestId 
*/
BaseRequest.prototype.setRequestId = function(requestId) {
  this.requestId = requestId;
};

/**
* Get the field value
* Identifier for the request
* @memberof remotepay.BaseRequest
* @return {String|Null} 
*/
BaseRequest.prototype.getRequestId = function() {
  return this.requestId;
};

/**
* Set the field value
* Identifier for the version
*
* @memberof remotepay.BaseRequest
* @param {Number|Null} version must be an integer, 
*/
BaseRequest.prototype.setVersion = function(version) {
  this.version = version;
};

/**
* Get the field value
* Identifier for the version
* @memberof remotepay.BaseRequest
* @return {Number|Null} must be an integer, 
*/
BaseRequest.prototype.getVersion = function() {
  return this.version;
};

/**
* @memberof remotepay.BaseRequest
* @private
*/
BaseRequest.prototype.getMetaInfo = function(fieldName) {
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

BaseRequest.prototype.toString = function() {
  return JSON.stringify(this);
};

BaseRequest._meta_ =  {fields:  {}};
BaseRequest._meta_._class_ =  BaseRequest;
BaseRequest._meta_.fields["requestId"] = {};
BaseRequest._meta_.fields["requestId"].type = String;
BaseRequest._meta_.fields["version"] = {};
BaseRequest._meta_.fields["version"].type = Number;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = BaseRequest;
}

