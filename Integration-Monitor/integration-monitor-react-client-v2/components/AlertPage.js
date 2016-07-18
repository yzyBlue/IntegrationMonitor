import React from 'react'
import AlertSideNav from './AlertSideNav'
import IntegrationService from './IntegrationService'
var AlertPage = React.createClass({
	getInitialState:function(){
		return {
			data:[],refresh:true
		};
	},
	loadAlertFromServer:function() {
		var url=IntegrationService.AlertService.findAlertByMap;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/list';
		//var param={alertLevel:'ERROR'};
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:'{"alertLevel":"ERROR"}',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		      	if (this.isMounted) {
		        	this.setState({data: data});
		        }
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(url, status, err.toString());
		      }.bind(this)
		});
	},
	componentDidMount: function() {
		this.loadAlertFromServer();
	    //setInterval(this.loadAlertFromServer(), 5000);
	    //this.interval=setInterval(this.loadAlertFromServer,5000);
	},
	componentWillUnmount(){
        //clearInterval(this.interval);
        //{React.cloneElement(this.props.children, {data: this.state.data,refresh:this.state.refresh})}
    },
	render: function() {
		return (
			<div id="wrapper">
				<AlertSideNav data={this.state.data}/>
				{React.cloneElement(this.props.children, {refresh:this.state.refresh})}
			</div>
		);
	}
});
export default AlertPage;