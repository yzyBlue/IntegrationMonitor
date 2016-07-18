import React from 'react'
import { render } from 'react-dom'
import { Router, Route ,IndexRoute , hashHistory } from 'react-router'

var LoginPageRouter=React.createClass({
	render() {
		return (
			<Router history={hashHistory}>
			    <Route path="/" component={LoginIndex}>
			      <Route path="/login" component={LoginForm}/>
			      <Route path="/register" component={RegisterForm}/>
			      <IndexRoute component={Index}/>
			    </Route>
			</Router>
		);
	}
});

render(<LoginPageRouter/>, document.getElementById('login'));