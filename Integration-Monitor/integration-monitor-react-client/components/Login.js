import React from 'react'

var Login = React.createClass({
	getInitialState: function() {
	    return {username: '', password: '',remember:false};
	},
	handleUserNameChange: function(e) {
	    this.setState({username: e.target.value});
	},
	handlePassWordChange: function(e) {
	    this.setState({password: e.target.value});
	},
	handleRememberChange: function(e) {
		
	    this.setState({remember:(this.State.remember?false: true)});
	},
	handleSubmit: function(e) {
	    e.preventDefault();
	    var username = this.state.username.trim();
	    var password = this.state.password.trim();
	    if (!username || !password) {
	      return;
	    }
	    this.props.onValidateSubmit({username: username, password: password});
	    this.setState({username: '', password: ''});
	  },
	render: function() {
	    return (
	    <form id="loginform" noValidate="novalidate" method="post"  action="j_spring_security_check">
			<div className="input-box">
				<input className="input-text valid" type="text" name="username" placeholder="用户名" autoFocus="true"
					value={this.state.username}  onChange={this.handleUserNameChange}/>
				<p className="error-top"></p>
			</div>
			<div className="input-box no-margin">
				<input className="input-text" type="password" name="password"placeholder="密   码"
					value={this.state.password}  onChange={this.handlePassWordChange}/>
				<p className="error-top"></p>
			</div>					
			<div className="remember-box">
				
			</div>
			<div className="input-box margin-min">
				<input type="hidden" name="encode" value="false"/>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
				<input className="btn btn-blue btn-block" type="submit" name="submit" value="登     录" />
			</div>
		</form>
	    );
	 }
});
export default Login;