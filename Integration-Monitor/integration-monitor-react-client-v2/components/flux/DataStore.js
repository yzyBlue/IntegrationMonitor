import React from 'event-emitter';
var CHANGE_EVENT = "changeEvent";

var DataStore = function() {
  this.emitter = new EventEmitter();
};

// Basic event handling functions

DataStore.prototype.emitChange = function() {
  this.emitter.emit(CHANGE_EVENT);
};

DataStore.prototype.addChangeListener = function(callback) {
    this.emitter.on(CHANGE_EVENT, callback);
};

DataStore.prototype.removeChangeListener = function(callback) {
  this.emitter.removeListener(CHANGE_EVENT, callback);
};



// Survey-specific methods
DataStore.prototype.saveSurvey = function(survey) {
  console.debug("TODO: fire XHR to persist survey, then invoke this.emitChange() after the XHR has completed.");

  this.emitChange();
}

DataStore.prototype.deleteSurvey = function(id) {
  console.debug("TODO: delete survey", id);

  this.emitChange();
}

DataStore.prototype.recordSurvey = function(results) {
  console.debug("TODO: record the survey results", results);

  this.emitChange();
}

DataStore.prototype.listSurveys = function(callback) {
  console.debug("TODO: fetch surveys from server via XHR");

  callback([]);
}

DataStore.prototype.getSurvey = function(id) {
  console.debug("TODO: fetch survey by id from server via XHR");

  callback({});
}

// The SurveyStore is a singleton, so export only the one instance.
module.exports = new DataStore();
