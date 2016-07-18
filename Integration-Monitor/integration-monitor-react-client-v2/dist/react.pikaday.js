webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _reactPikaday = __webpack_require__(158);

	var _reactPikaday2 = _interopRequireDefault(_reactPikaday);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ManualExample = _react2.default.createClass({
	  displayName: 'ManualExample',

	  getInitialState: function getInitialState() {
	    return {
	      date: null
	    };
	  },

	  handleChange: function handleChange(date) {
	    this.setState({
	      date: date
	    });
	  },

	  render: function render() {
	    var _this = this;

	    var date = this.state.date;
	    var formattedDate = date ? date.toDateString() : 'not set';

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        'The date is ',
	        formattedDate
	      ),
	      _react2.default.createElement(
	        'p',
	        null,
	        _react2.default.createElement(_reactPikaday2.default, { value: date, onChange: this.handleChange })
	      ),
	      _react2.default.createElement(
	        'button',
	        { onClick: function onClick() {
	            _this.handleChange(null);
	          } },
	        'Clear date'
	      )
	    );
	  }
	});

	var Examples = _react2.default.createClass({
	  displayName: 'Examples',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Manual Example'
	      ),
	      _react2.default.createElement(ManualExample, null)
	    );
	  }
	});

	(0, _reactDom.render)(_react2.default.createElement(Examples, null), document.getElementById('container'));

/***/ }
]);