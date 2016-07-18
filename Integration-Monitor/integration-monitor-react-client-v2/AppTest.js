import React from 'react'
import { render } from 'react-dom'
import RegisterForm from './components_v2/RegisterForm'
import ProgressBarTest from './components_v2/ProgressBarTest'
var AppTest=React.createClass({
	render() {
		return (
			<div className="container clearfix">
				<RegisterForm/>
				<ProgressBarTest/>
			</div>
		);
	}
});


render(<AppTest/>, document.getElementById('test'));