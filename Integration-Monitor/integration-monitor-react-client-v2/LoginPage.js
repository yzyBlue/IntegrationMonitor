import React from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginContainer from './components/LoginContainer'
var LoginPage = React.createClass({
	render: function() {
		return (
			<div style={{width: '100%',height: '100%'}}>
			    <Header/>
			    <LoginContainer/>
			    <Footer/>
			</div>
		  );
	}
});
render(<LoginPage/>, document.getElementById('login'));