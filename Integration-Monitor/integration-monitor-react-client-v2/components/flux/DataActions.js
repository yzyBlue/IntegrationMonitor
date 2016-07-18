import Dispatcher from './Dispatcher';
import ActionConstants from './ActionConstants';

var DataActions = {
  save: function(survey) {
    Dispatcher.dispatch({
      actionType: ActionConstants.SAVE_SURVEY,
      survey: survey
    });
  },

  delete: function(id) {
    Dispatcher.dispatch({
      actionType: ActionConstants.DELETE_SURVEY,
      id: id
    });
  },

  record: function(results) {
    Dispatcher.dispatch({
      actionType: ActionConstants.RECORD_SURVEY,
      results: results
    });
  }
};

exports default DataActions;
