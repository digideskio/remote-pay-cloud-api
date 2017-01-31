/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var printer_PrinterType = require("../printer/PrinterType");

/**
* @constructor
* @memberof printer
*/
var Printer = function() {
  this._class_ = Printer;
  this.id = undefined;
  this.mac = undefined;
  this.model = undefined;
  this.name = undefined;
  this.ipAddress = undefined;
  this.type = undefined;
};


/**
* Set the field value
* Unique identifier
*
* @memberof printer.Printer
* @param {String} id 
*/
Printer.prototype.setId = function(id) {
  this.id = id;
};

/**
* Get the field value
* Unique identifier
* @memberof printer.Printer
* @return {String} 
*/
Printer.prototype.getId = function() {
  return this.id;
};

/**
* Set the field value
* MAC address of a network printer
*
* @memberof printer.Printer
* @param {String} mac 
*/
Printer.prototype.setMac = function(mac) {
  this.mac = mac;
};

/**
* Get the field value
* MAC address of a network printer
* @memberof printer.Printer
* @return {String} 
*/
Printer.prototype.getMac = function() {
  return this.mac;
};

/**
* Set the field value
* @memberof printer.Printer
* @param {String} model 
*/
Printer.prototype.setModel = function(model) {
  this.model = model;
};

/**
* Get the field value
* @memberof printer.Printer
* @return {String} 
*/
Printer.prototype.getModel = function() {
  return this.model;
};

/**
* Set the field value
* @memberof printer.Printer
* @param {String} name 
*/
Printer.prototype.setName = function(name) {
  this.name = name;
};

/**
* Get the field value
* @memberof printer.Printer
* @return {String} 
*/
Printer.prototype.getName = function() {
  return this.name;
};

/**
* Set the field value
* IP address of a network printer
*
* @memberof printer.Printer
* @param {String} ipAddress 
*/
Printer.prototype.setIpAddress = function(ipAddress) {
  this.ipAddress = ipAddress;
};

/**
* Get the field value
* IP address of a network printer
* @memberof printer.Printer
* @return {String} 
*/
Printer.prototype.getIpAddress = function() {
  return this.ipAddress;
};

/**
* Set the field value
* NETWORK is a printer that's directly connected to the network.  MY_LOCAL represents the printer that's connected to the device that's making the request.
*
* @memberof printer.Printer
* @param {printer.PrinterType} type 
*/
Printer.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* NETWORK is a printer that's directly connected to the network.  MY_LOCAL represents the printer that's connected to the device that's making the request.
* @memberof printer.Printer
* @return {printer.PrinterType} 
*/
Printer.prototype.getType = function() {
  return this.type;
};

/**
* @memberof printer.Printer
* @private
*/
Printer.prototype.getMetaInfo = function(fieldName) {
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

Printer.prototype.toString = function() {
  return JSON.stringify(this);
};

Printer._meta_ =  {fields:  {}};
Printer._meta_.fields["id"] = {};
Printer._meta_.fields["id"].type = String;
Printer._meta_.fields["mac"] = {};
Printer._meta_.fields["mac"].type = String;
Printer._meta_.fields["model"] = {};
Printer._meta_.fields["model"].type = String;
Printer._meta_.fields["name"] = {};
Printer._meta_.fields["name"].type = String;
Printer._meta_.fields["ipAddress"] = {};
Printer._meta_.fields["ipAddress"].type = String;
Printer._meta_.fields["type"] = {};
Printer._meta_.fields["type"].type = printer_PrinterType;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = Printer;
}
