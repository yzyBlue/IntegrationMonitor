/**
 * 
 * 
 */
 
var divStyle = {
		position: 'fixed',
		bottom: '0px',
		width: '99%'
}; 
var Footer = React.createClass({
	getInitialState:function(){
		return {
			website:"官方网站",
			help:"帮助中心",
			copyright:"Copyright © 2016 浙江大学"
		};
	},
  render: function() {
    return (
    	<div className="footer" style={divStyle}>
    		<ul>
    			<li><a href="#">{this.state.website}</a></li>
    			<li className="divider"></li>
    			<li><a href="#">{this.state.help}</a></li>
    			<li className="divider"></li>
    			<li>
    				<p>{this.state.copyright}</p>
    			</li>
    		</ul>
    	</div>
    );
  }
});

var Header = React.createClass({
	  render: function() {
	    return (
	      <div className="logo">
	      	<a className="iconfont icon-brand" href="/integration-monitor/"	title="Inte-Monitor"> 
			</a>
	      </div>
	    );
	 }
});

var dropDownStyle = {
	display: 'none'
}; 

var DropDown=React.createClass({
	getInitialState: function () {
		return {
			visible:false
        };
    },
    onSelect:function(){
    	this.setState({visible: !this.state.visible});
    },
    componentDidMount: function() {
    	var dropdown = this.refs.dropdown;//拿到了原生DOM 
    },
	render:function() {
		var displayValue = this.visible ? 'block' : 'none';
	    return (
			<div className="dropdown-main" ref="dropdown" style={{display: displayValue}} onSelect={this.onSelect}>
				<ul>
					<li><a data-lang="en" href="#">中文</a></li>
					<li><a data-lang="zh_CN" href="#">English</a></li>
				</ul>
			</div>
	    );
	 }
	
	
});


var LangDropDown = React.createClass({
		render:function() {
	    return (
	    <div className="lang">
			<strong className="lang-info"> <i className="iconfont large"></i> <span>中文</span>
				<i className="iconfont icon-arrowup"></i>
			</strong>
			<DropDown/>
		</div>
	    );
	 }
});

var Title = React.createClass({
	  render: function() {
	    return (
	    <div className="title">
			<h2>登 陆</h2>
		</div>
	    );
	 }
});

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
	    <form id="loginform" novalidate="novalidate" method="post"  action="j_spring_security_check">
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

var LoginForm = React.createClass({
	handleValidateSubmit: function(user) {
	    var result = this.state.result;
	    $.ajax({
	      url: this.props.url+"?userName="+user.username+"&&passWord="+user.password,
	      dataType: 'json',
	      //t// ype: 'GET',
	      cache: false,
	      success: function(result) {
	        this.setState({result: result});
	        alert("resultCode : "+result.resultCode+" , resultDesc : "+result.resultDesc);
	      }.bind(this),
	      error: function(xhr, status, err) {
	        this.setState({result: result});
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function() {
		    return {result:{resultCode:'',resultDesc:''}};
		  },
	  render: function() {
	    return (
	    <div className="form-wrapper">
			<Login onValidateSubmit={this.handleValidateSubmit}/>
		</div>
	    );
	 }
});

var Logo = React.createClass({
	  render: function() {
	    return (
	    <div className="logo-center">
			<a id="logo-center" className="iconfont icon-monitor" href="#" title="Integration Monitor">
			</a>
		</div>
	    );
	 }
});

var LoginContainer = React.createClass({
	  render: function() {
	    return (
	    <div className="layout">
			<div className="wrap clearfix">
				<div className="content no-sidebar form-middle" id="root">
					<Logo/>
					<div className="container clearfix">
						<div className="box login-box">
							<Title/>
							<LoginForm url="/integration-monitor/user/validate"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	    );
	 }
});

var style={
		width: '100%',
		height: '100%'
}

var HomeBody = React.createClass({
	render: function() {
		return (
			<div style={style}>
			    <Header/>
			    <LangDropDown/>
			    <LoginContainer/>
			    <Footer/>
			</div>
		  );
	}
});
ReactDOM.render(<HomeBody/>, document.getElementById('app'));