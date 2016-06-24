import React from 'react'
import AlertSideNav from './AlertSideNav'
import AlertPageWrapper from './AlertPageWrapper'
var AlertPage = React.createClass({
	render: function() {
		return (
			<div id="wrapper">
				<AlertSideNav/>
				{this.props.children}
			</div>
		);
	}
});
export default AlertPage