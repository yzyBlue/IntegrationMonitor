import React from 'react'
import AlertSideNav from './AlertSideNav'
import IntegrationService from './IntegrationService'
var AlertPage = React.createClass({
	getInitialState:function(){
		return {
			data:[]
		};
	},
	loadAlertFromServer:function() {
		var url=IntegrationService.AlertService.findAlertByMap;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/list';
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:'{}',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		});
	},
	componentDidMount: function() {
		this.loadAlertFromServer();
	    setInterval(this.loadAlertFromServer(), 5000);
	},
	render: function() {
		return (
			<div id="wrapper">
				<AlertSideNav data={this.state.data}/>
				{React.cloneElement(this.props.children, {data: this.state.data})}
			</div>
		);
	}
});
export default AlertPage;