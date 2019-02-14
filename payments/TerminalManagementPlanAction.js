/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */

var payments_ManagementPlanDataType = require("../payments/ManagementPlanDataType");
var payments_ManagementPlanActionTriggerType = require("../payments/ManagementPlanActionTriggerType");
var payments_TerminalManagementErrorAction = require("../payments/TerminalManagementErrorAction");
var payments_TerminalManagementTimeCondition = require("../payments/TerminalManagementTimeCondition");
var payments_ManagementPlanActionAdditionalProcess = require("../payments/ManagementPlanActionAdditionalProcess");
var payments_ManagementPlanActionType = require("../payments/ManagementPlanActionType");

/**
* @constructor
* @memberof payments
*/
var TerminalManagementPlanAction = function() {
  this._class_ = TerminalManagementPlanAction;
  this.type = undefined;
  this.dataSetName = undefined;
  this.dataSetType = undefined;
  this.dataSetVersion = undefined;
  this.dataSetCreateDate = undefined;
  this.triggerType = undefined;
  this.additionalProcesses = undefined;
  this.retry = undefined;
  this.retryDelay = undefined;
  this.maxRetries = undefined;
  this.timeCondition = undefined;
  this.endTime = undefined;
  this.errorActions = undefined;
};


/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {payments.ManagementPlanActionType} type 
*/
TerminalManagementPlanAction.prototype.setType = function(type) {
  this.type = type;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {payments.ManagementPlanActionType} 
*/
TerminalManagementPlanAction.prototype.getType = function() {
  return this.type;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {String} dataSetName 
*/
TerminalManagementPlanAction.prototype.setDataSetName = function(dataSetName) {
  this.dataSetName = dataSetName;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {String} 
*/
TerminalManagementPlanAction.prototype.getDataSetName = function() {
  return this.dataSetName;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {payments.ManagementPlanDataType} dataSetType 
*/
TerminalManagementPlanAction.prototype.setDataSetType = function(dataSetType) {
  this.dataSetType = dataSetType;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {payments.ManagementPlanDataType} 
*/
TerminalManagementPlanAction.prototype.getDataSetType = function() {
  return this.dataSetType;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {String} dataSetVersion 
*/
TerminalManagementPlanAction.prototype.setDataSetVersion = function(dataSetVersion) {
  this.dataSetVersion = dataSetVersion;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {String} 
*/
TerminalManagementPlanAction.prototype.getDataSetVersion = function() {
  return this.dataSetVersion;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {Number} dataSetCreateDate must be a long integer
*/
TerminalManagementPlanAction.prototype.setDataSetCreateDate = function(dataSetCreateDate) {
  this.dataSetCreateDate = dataSetCreateDate;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {Number} must be a long integer
*/
TerminalManagementPlanAction.prototype.getDataSetCreateDate = function() {
  return this.dataSetCreateDate;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {payments.ManagementPlanActionTriggerType} triggerType 
*/
TerminalManagementPlanAction.prototype.setTriggerType = function(triggerType) {
  this.triggerType = triggerType;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {payments.ManagementPlanActionTriggerType} 
*/
TerminalManagementPlanAction.prototype.getTriggerType = function() {
  return this.triggerType;
};

/**
* Set the field value
* Additional processing before or after the action
*
* @memberof payments.TerminalManagementPlanAction
* @param {Array.<payments.ManagementPlanActionAdditionalProcess>} additionalProcesses An array of 
*/
TerminalManagementPlanAction.prototype.setAdditionalProcesses = function(additionalProcesses) {
  this.additionalProcesses = additionalProcesses;
};

/**
* Get the field value
* Additional processing before or after the action
* @memberof payments.TerminalManagementPlanAction
* @return {Array.<payments.ManagementPlanActionAdditionalProcess>} An array of 
*/
TerminalManagementPlanAction.prototype.getAdditionalProcesses = function() {
  return this.additionalProcesses;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {Boolean} retry 
*/
TerminalManagementPlanAction.prototype.setRetry = function(retry) {
  this.retry = retry;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {Boolean} 
*/
TerminalManagementPlanAction.prototype.getRetry = function() {
  return this.retry;
};

/**
* Set the field value
* MMDDhhmm formatted time to wait before retrying
*
* @memberof payments.TerminalManagementPlanAction
* @param {String} retryDelay 
*/
TerminalManagementPlanAction.prototype.setRetryDelay = function(retryDelay) {
  this.retryDelay = retryDelay;
};

/**
* Get the field value
* MMDDhhmm formatted time to wait before retrying
* @memberof payments.TerminalManagementPlanAction
* @return {String} 
*/
TerminalManagementPlanAction.prototype.getRetryDelay = function() {
  return this.retryDelay;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {Number} maxRetries must be an integer
*/
TerminalManagementPlanAction.prototype.setMaxRetries = function(maxRetries) {
  this.maxRetries = maxRetries;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {Number} must be an integer
*/
TerminalManagementPlanAction.prototype.getMaxRetries = function() {
  return this.maxRetries;
};

/**
* Set the field value
* Condition for when to start this task
*
* @memberof payments.TerminalManagementPlanAction
* @param {payments.TerminalManagementTimeCondition} timeCondition 
*/
TerminalManagementPlanAction.prototype.setTimeCondition = function(timeCondition) {
  this.timeCondition = timeCondition;
};

/**
* Get the field value
* Condition for when to start this task
* @memberof payments.TerminalManagementPlanAction
* @return {payments.TerminalManagementTimeCondition} 
*/
TerminalManagementPlanAction.prototype.getTimeCondition = function() {
  return this.timeCondition;
};

/**
* Set the field value
* Time after which this task should NOT be run
*
* @memberof payments.TerminalManagementPlanAction
* @param {Number} endTime must be a long integer
*/
TerminalManagementPlanAction.prototype.setEndTime = function(endTime) {
  this.endTime = endTime;
};

/**
* Get the field value
* Time after which this task should NOT be run
* @memberof payments.TerminalManagementPlanAction
* @return {Number} must be a long integer
*/
TerminalManagementPlanAction.prototype.getEndTime = function() {
  return this.endTime;
};

/**
* Set the field value
* @memberof payments.TerminalManagementPlanAction
* @param {Array.<payments.TerminalManagementErrorAction>} errorActions An array of 
*/
TerminalManagementPlanAction.prototype.setErrorActions = function(errorActions) {
  this.errorActions = errorActions;
};

/**
* Get the field value
* @memberof payments.TerminalManagementPlanAction
* @return {Array.<payments.TerminalManagementErrorAction>} An array of 
*/
TerminalManagementPlanAction.prototype.getErrorActions = function() {
  return this.errorActions;
};

/**
* @memberof payments.TerminalManagementPlanAction
* @private
*/
TerminalManagementPlanAction.prototype.getMetaInfo = function(fieldName) {
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

TerminalManagementPlanAction.prototype.toString = function() {
  return JSON.stringify(this);
};

TerminalManagementPlanAction._meta_ =  {fields:  {}};
TerminalManagementPlanAction._meta_._class_ =  TerminalManagementPlanAction;
TerminalManagementPlanAction._meta_.fields["type"] = {};
TerminalManagementPlanAction._meta_.fields["type"].type = payments_ManagementPlanActionType;
TerminalManagementPlanAction._meta_.fields["dataSetName"] = {};
TerminalManagementPlanAction._meta_.fields["dataSetName"].type = String;
TerminalManagementPlanAction._meta_.fields["dataSetType"] = {};
TerminalManagementPlanAction._meta_.fields["dataSetType"].type = payments_ManagementPlanDataType;
TerminalManagementPlanAction._meta_.fields["dataSetVersion"] = {};
TerminalManagementPlanAction._meta_.fields["dataSetVersion"].type = String;
TerminalManagementPlanAction._meta_.fields["dataSetCreateDate"] = {};
TerminalManagementPlanAction._meta_.fields["dataSetCreateDate"].type = Number;
TerminalManagementPlanAction._meta_.fields["triggerType"] = {};
TerminalManagementPlanAction._meta_.fields["triggerType"].type = payments_ManagementPlanActionTriggerType;
TerminalManagementPlanAction._meta_.fields["additionalProcesses"] = {};
TerminalManagementPlanAction._meta_.fields["additionalProcesses"].type = Array;
TerminalManagementPlanAction._meta_.fields["additionalProcesses"].elementType = payments_ManagementPlanActionAdditionalProcess;
TerminalManagementPlanAction._meta_.fields["retry"] = {};
TerminalManagementPlanAction._meta_.fields["retry"].type = Boolean;
TerminalManagementPlanAction._meta_.fields["retryDelay"] = {};
TerminalManagementPlanAction._meta_.fields["retryDelay"].type = String;
TerminalManagementPlanAction._meta_.fields["maxRetries"] = {};
TerminalManagementPlanAction._meta_.fields["maxRetries"].type = Number;
TerminalManagementPlanAction._meta_.fields["timeCondition"] = {};
TerminalManagementPlanAction._meta_.fields["timeCondition"].type = payments_TerminalManagementTimeCondition;
TerminalManagementPlanAction._meta_.fields["endTime"] = {};
TerminalManagementPlanAction._meta_.fields["endTime"].type = Number;
TerminalManagementPlanAction._meta_.fields["errorActions"] = {};
TerminalManagementPlanAction._meta_.fields["errorActions"].type = Array;
TerminalManagementPlanAction._meta_.fields["errorActions"].elementType = payments_TerminalManagementErrorAction;

//
// Expose the module.
//
if ('undefined' !== typeof module) {
module.exports = TerminalManagementPlanAction;
}

