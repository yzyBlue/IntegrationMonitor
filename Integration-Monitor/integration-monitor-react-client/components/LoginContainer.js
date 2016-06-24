import React from 'react'
import LoginForm from './LoginForm'
var LoginContainer = React.createClass({
	  render: function() {
	    return (
	    <div className="layout">
			<div className="wrap clearfix">
				<div className="content no-sidebar form-middle" id="root">
					<div className="logo-center">
						<a id="logo-center" className="iconfont icon-monitor" href="#" title="Integration Monitor">
						</a>
					</div>
					<div className="container clearfix">
						<div className="box login-box">
							<div className="title">
								<h2>登 陆</h2>
							</div>
							<LoginForm url="/integration-monitor/user/validate"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	    );
	 }
});
export default LoginContainer;