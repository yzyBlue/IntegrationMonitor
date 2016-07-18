webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _Header = __webpack_require__(158);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(160);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _LoginContainer = __webpack_require__(539);

	var _LoginContainer2 = _interopRequireDefault(_LoginContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginPage = _react2.default.createClass({
		displayName: 'LoginPage',

		render: function render() {
			return _react2.default.createElement(
				'div',
				{ style: { width: '100%', height: '100%' } },
				_react2.default.createElement(_Header2.default, null),
				_react2.default.createElement(_LoginContainer2.default, null),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	});
	(0, _reactDom.render)(_react2.default.createElement(LoginPage, null), document.getElementById('login'));

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LoginForm = __webpack_require__(540);

	var _LoginForm2 = _interopRequireDefault(_LoginForm);

	var _IntegrationService = __webpack_require__(159);

	var _IntegrationService2 = _interopRequireDefault(_IntegrationService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginContainer = _react2.default.createClass({
		displayName: 'LoginContainer',

		render: function render() {
			var url = _IntegrationService2.default.UserService.validateUserInfo;
			return _react2.default.createElement(
				'div',
				{ className: 'layout' },
				_react2.default.createElement(
					'div',
					{ className: 'wrap clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'content no-sidebar form-middle', id: 'root' },
						_react2.default.createElement(
							'div',
							{ className: 'logo-center' },
							_react2.default.createElement('a', { id: 'logo-center', className: 'iconfont icon-monitor', href: '#', title: 'Integration Monitor' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'container clearfix' },
							_react2.default.createElement(
								'div',
								{ className: 'box login-box' },
								_react2.default.createElement(
									'div',
									{ className: 'title' },
									_react2.default.createElement(
										'h2',
										null,
										'登 录'
									)
								),
								_react2.default.createElement(_LoginForm2.default, { url: url })
							)
						)
					)
				)
			);
		}
	});
	exports.default = LoginContainer;

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Login = __webpack_require__(541);

	var _Login2 = _interopRequireDefault(_Login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LoginForm = _react2.default.createClass({
		displayName: 'LoginForm',

		handleValidateSubmit: function handleValidateSubmit(user) {
			var result = this.state.result;
			$.ajax({
				url: this.props.url + "?userName=" + user.username + "&&passWord=" + user.password,
				dataType: 'json',
				//t// ype: 'GET',
				cache: false,
				success: function (result) {
					this.setState({ result: result });
					alert("resultCode : " + result.resultCode + " , resultDesc : " + result.resultDesc);
				}.bind(this),
				error: function (xhr, status, err) {
					this.setState({ result: result });
					console.error(this.props.url, status, err.toString());
				}.bind(this)
			});
		},
		getInitialState: function getInitialState() {
			return { result: { resultCode: '', resultDesc: '' } };
		},
		render: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'form-wrapper' },
				_react2.default.createElement(_Login2.default, { onValidateSubmit: this.handleValidateSubmit })
			);
		}
	});
	exports.default = LoginForm;

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = _react2.default.createClass({
		displayName: 'Login',

		getInitialState: function getInitialState() {
			return { username: '', password: '', remember: false };
		},
		handleUserNameChange: function handleUserNameChange(e) {
			this.setState({ username: e.target.value });
		},
		handlePassWordChange: function handlePassWordChange(e) {
			this.setState({ password: e.target.value });
		},
		handleRememberChange: function handleRememberChange(e) {

			this.setState({ remember: this.State.remember ? false : true });
		},
		handleSubmit: function handleSubmit(e) {
			e.preventDefault();
			var username = this.state.username.trim();
			var password = this.state.password.trim();
			if (!username || !password) {
				return;
			}
			//this.props.onValidateSubmit({username: username, password: password});
			this.setState({ username: '', password: '' });
		},
		render: function render() {
			return _react2.default.createElement(
				'form',
				{ id: 'loginform', noValidate: 'novalidate', method: 'post', action: 'j_spring_security_check' },
				_react2.default.createElement(
					'div',
					{ className: 'input-box' },
					_react2.default.createElement('input', { className: 'input-text valid', type: 'text', name: 'username', placeholder: '用户名', autoFocus: 'true',
						value: this.state.username, onChange: this.handleUserNameChange }),
					_react2.default.createElement('p', { className: 'error-top' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'input-box no-margin' },
					_react2.default.createElement('input', { className: 'input-text', type: 'password', name: 'password', placeholder: '密   码',
						value: this.state.password, onChange: this.handlePassWordChange }),
					_react2.default.createElement('p', { className: 'error-top' })
				),
				_react2.default.createElement('div', { className: 'remember-box' }),
				_react2.default.createElement(
					'div',
					{ className: 'input-box margin-min' },
					_react2.default.createElement('input', { type: 'hidden', name: 'encode', value: 'false' }),
					_react2.default.createElement('input', { type: 'hidden', name: '${_csrf.parameterName}', value: '${_csrf.token}' }),
					_react2.default.createElement('input', { className: 'btn btn-blue btn-block', type: 'submit', name: 'submit', value: '登     录' })
				)
			);
		}
	});
	exports.default = Login;

/***/ }

});