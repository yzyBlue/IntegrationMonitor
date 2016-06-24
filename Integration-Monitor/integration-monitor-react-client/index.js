import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Statistics from './components/Statistics'
import Help from './components/Help'
import MessageLayout from './components/MessageLayout'
import App from './components/App'
import AlertPage from './components/AlertPage'
import AlertPageWrapper from './components/AlertPageWrapper'
import { Router, Route ,IndexRoute , hashHistory } from 'react-router'
var AppRouter=React.createClass({
	render() {
		return (
			<Router history={hashHistory}>
			    <Route path="/" component={App}>
			      <Route path="/statistics" component={Statistics}/>
			      <Route path="/messagequery" component={MessageLayout}/>
			      <Route path="/alarm" component={AlertPage}>
			      	 <Route path="/alerts/:category" component={AlertPageWrapper}/>
			      	 <IndexRoute component={AlertPageWrapper}/>
			      </Route>
			    </Route>
			 </Router>
		);
	}
});

render(<AppRouter/>, document.getElementById('index'));