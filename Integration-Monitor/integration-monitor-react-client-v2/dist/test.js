webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _LoginForm = __webpack_require__(528);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _TableBootstrap = __webpack_require__(529);

	var _TableBootstrap2 = _interopRequireDefault(_TableBootstrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppTest = _react2.default.createClass({
		displayName: 'AppTest',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container clearfix' },
				_react2.default.createElement(_LoginForm2.default, null),
				_react2.default.createElement(_TableBootstrap2.default, null)
			);
		}
	});

	(0, _reactDom.render)(_react2.default.createElement(AppTest, null), document.getElementById('test'));

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginForm = _react2.default.createClass({
	  displayName: 'LoginForm',
	  getInitialState: function getInitialState() {
	    return {
	      username: '', password: '', isLoading: false
	    };
	  },
	  getValidationState: function getValidationState(name) {
	    var length = this.state[name].length;
	    if (length > 10) return 'success';else if (length > 5) return 'warning';else if (length > 0) return 'error';
	  },
	  handleChange: function handleChange(name, e) {
	    var state = {};
	    state[name] = e.target.value;
	    this.setState(state);
	  },
	  handleClick: function handleClick() {
	    var _this = this;

	    this.setState({ isLoading: true });
	    // This probably where you would have an `ajax` call
	    setTimeout(function () {
	      // Completed of async action, set loading state back
	      _this.setState({ isLoading: false });
	    }, 2000);
	  },
	  render: function render() {
	    var isLoading = this.state.isLoading;
	    return _react2.default.createElement(
	      'form',
	      null,
	      _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        {
	          controlId: 'formBasicText',
	          validationState: this.getValidationState('username')
	        },
	        _react2.default.createElement(
	          _reactBootstrap.ControlLabel,
	          null,
	          'Working example with validation'
	        ),
	        _react2.default.createElement(_reactBootstrap.FormControl, {
	          id: 'username',
	          type: 'text',
	          value: this.state.username,
	          placeholder: 'Enter text',
	          onChange: this.handleChange.bind(this, 'username')
	        }),
	        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
	        _react2.default.createElement(
	          _reactBootstrap.HelpBlock,
	          null,
	          'Validation is based on string length.',
	          this.state.username.length
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        {
	          controlId: 'formBasicText',
	          validationState: this.getValidationState('password')
	        },
	        _react2.default.createElement(_reactBootstrap.FormControl, {
	          id: 'password',
	          type: 'password',
	          value: this.state.password,
	          placeholder: 'Enter text',
	          onChange: this.handleChange.bind(this, 'password')
	        }),
	        _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
	        _react2.default.createElement(
	          _reactBootstrap.HelpBlock,
	          null,
	          'Validation is based on string length.',
	          this.state.password.length
	        )
	      ),
	      _react2.default.createElement(
	        _reactBootstrap.Button,
	        { bsStyle: 'primary', disabled: isLoading, onClick: !isLoading ? this.handleClick : null },
	        isLoading ? 'Loading...' : 'Loading state'
	      )
	    );
	  }
	});

	exports.default = LoginForm;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(183);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableBootstrap = _react2.default.createClass({
	  displayName: 'TableBootstrap',

	  render: function render() {
	    return _react2.default.createElement(
	      _reactBootstrap.Table,
	      { striped: true, bordered: true, condensed: true, hover: true },
	      _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'th',
	            null,
	            '#'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'First Name'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Last Name'
	          ),
	          _react2.default.createElement(
	            'th',
	            null,
	            'Username'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'tbody',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '1'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            'Mark'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            'Otto'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            '@mdo'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '2'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            'Jacob'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            'Thornton'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            '@fat'
	          )
	        ),
	        _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            '3'
	          ),
	          _react2.default.createElement(
	            'td',
	            { colSpan: '2' },
	            'Larry the Bird'
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            '@twitter'
	          )
	        )
	      )
	    );
	  }
	});
	exports.default = TableBootstrap;

/***/ }

});