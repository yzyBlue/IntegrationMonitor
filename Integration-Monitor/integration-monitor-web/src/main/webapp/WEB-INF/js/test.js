webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _RegisterForm = __webpack_require__(536);

	var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

	var _ProgressBarTest = __webpack_require__(537);

	var _ProgressBarTest2 = _interopRequireDefault(_ProgressBarTest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppTest = _react2.default.createClass({
		displayName: 'AppTest',
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'container clearfix' },
				_react2.default.createElement(_RegisterForm2.default, null),
				_react2.default.createElement(_ProgressBarTest2.default, null)
			);
		}
	});

	(0, _reactDom.render)(_react2.default.createElement(AppTest, null), document.getElementById('test'));

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(181);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RegisterForm = _react2.default.createClass({
	  displayName: 'RegisterForm',
	  getInitialState: function getInitialState() {
	    return {
	      username: '', password: '', isLoading: false, result: ''
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
	    this.setState({ isLoading: true });
	    var userInfo = { userName: this.state.username, passWord: this.state.password, roleCode: 'admin', creatorId: 'admin', voidFlag: '0' };
	    $.ajax({
	      url: '/integration-monitor/registration',
	      dataType: 'json',
	      ype: 'POST',
	      cache: false,
	      data: userInfo,
	      success: function (result) {
	        this.setState({ isLoading: false });
	        //this.setState({result: result});
	        //alert("resultCode : "+result.resultCode+" , resultDesc : "+result.resultDesc);
	      }.bind(this),
	      error: function (xhr, status, err) {
	        //this.setState({result: result});
	        this.setState({ isLoading: true });
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });

	    // This probably where you would have an `ajax` call
	    //setTimeout(() => {
	    // Completed of async action, set loading state back
	    //this.setState({isLoading: false});
	    //}, 2000);
	  },
	  render: function render() {
	    var isLoading = this.state.isLoading;
	    return _react2.default.createElement(
	      'form',
	      { method: 'post', action: '/registration' },
	      _react2.default.createElement(
	        _reactBootstrap.FormGroup,
	        { validationState: this.getValidationState('username')
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

	exports.default = RegisterForm;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(181);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProgressBarTest = _react2.default.createClass({
	  displayName: 'ProgressBarTest',

	  render: function render() {
	    return _react2.default.createElement(_reactBootstrap.ProgressBar, { bsStyle: 'success', active: true, now: 45 });
	  }
	});

	exports.default = ProgressBarTest;

/***/ }

});