/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var remotepay_BaseRequest = require("../remotepay/BaseRequest");
var remotepay_Img = require("../remotepay/Img");

/** Request to print an image, text, or an image from a URL. Current intention is to only have one. */
/**
* @constructor
* @augments remotepay.BaseRequest
* @memberof remotepay
*/
var PrintRequest = function() {
  remotepay_BaseRequest.call(this);
  this._superClass_ = remotepay_BaseRequest;
  this._class_ = PrintRequest;
  this.image = undefined;
  this.text = undefined;
  this.imageUrl = undefined;
  this.printRequestId = undefined;
  this.printDeviceId = undefined;
};

PrintRequest.prototype = Object.create(remotepay_BaseRequest.prototype);
PrintRequest.prototype.constructor = PrintRequest;

/**
* Set the field value
* The image to be printed (put in an array for future extensibility).
*
* @memberof remotepay.PrintRequest
* @param {Array.<remotepay.Img>} image An array of 
*/
PrintRequest.prototype.setImage = function(image) {
  this.image = image;
};

/**
* Get the field value
* The image to be printed (put in an array for future extensibility).
* @memberof remotepay.PrintRequest
* @return {Array.<remotepay.Img>} An array of 
*/
PrintRequest.prototype.getImage = function() {
  return this.image;
};

/**
* Set the field value
* The text to be printed.
*
* @memberof remotepay.PrintRequest
* @param {Array.<String>} text An array of 
*/
PrintRequest.prototype.setText = function(text) {
  this.text = text;
};

/**
* Get the field value
* The text to be printed.
* @memberof remotepay.PrintRequest
* @return {Array.<String>} An array of 
*/
PrintRequest.prototype.getText = function() {
  return this.text;
};

/**
* Set the field value
* The image URLs to be printed (put in an array for future extensibility).
*
* @memberof remotepay.PrintRequest
* @param {Array.<String>} imageUrl An array of 
*/
PrintRequest.prototype.setImageUrl = function(imageUrl) {
  this.imageUrl = imageUrl;
};

/**
* Get the field value
* The image URLs to be printed (put in an array for future extensibility).
* @memberof remotepay.PrintRequest
* @return {Array.<String>} An array of 
*/
PrintRequest.prototype.getImageUrl = function() {
  return this.imageUrl;
};

/**
* Set the field value
* The ID associated with the request (for Status checks and similar use).
*
* @memberof remotepay.PrintRequest
* @param {String|Null} printRequestId 
*/
PrintRequest.prototype.setPrintRequestId = function(printRequestId) {
  this.printRequestId = printRequestId;
};

/**
* Get the field value
* The ID associated with the request (for Status checks and similar use).
* @memberof remotepay.PrintRequest
* @return {String|Null} 
*/
PrintRequest.prototype.getPrintRequestId = function() {
  return this.printRequestId;
};

/**
* Set the field value
* The ID of the device the print job should print from.
*
* @memberof remotepay.PrintRequest
* @param {String|Null} printDeviceId 
*/
PrintRequest.prototype.setPrintDeviceId = function(printDeviceId) {
  this.printDeviceId = printDeviceId;
};

/**
* Get the field value
* The ID of the device the print job should print from.
* @memberof remotepay.PrintRequest
* @return {String|Null} 
*/
PrintRequest.prototype.getPrintDeviceId = function() {
  return this.printDeviceId;
};

PrintRequest._meta_ =  {fields:  {}};
PrintRequest._meta_._class_ =  PrintRequest;
PrintRequest._meta_._superMeta_ = remotepay_BaseRequest._meta_;
PrintRequest._meta_.fields["image"] = {};
PrintRequest._meta_.fields["image"].type = Array;
PrintRequest._meta_.fields["image"].elementType = remotepay_Img;
PrintRequest._meta_.fields["text"] = {};
PrintRequest._meta_.fields["text"].type = Array;
PrintRequest._meta_.fields["imageUrl"] = {};
PrintRequest._meta_.fields["imageUrl"].type = Array;
PrintRequest._meta_.fields["printRequestId"] = {};
PrintRequest._meta_.fields["printRequestId"].type = String;
PrintRequest._meta_.fields["printDeviceId"] = {};
PrintRequest._meta_.fields["printDeviceId"].type = String;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = PrintRequest;
}

