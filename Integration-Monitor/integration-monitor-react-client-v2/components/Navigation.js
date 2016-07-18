import React from 'react'
import { Link } from 'react-router'
import { Tooltip,OverlayTrigger } from 'react-bootstrap';
import IntegrationService from './IntegrationService'
var Navigation = React.createClass({
	getInitialState:function(){
		return {statistics:"",messagequery:"",alarm:"",alertCount:0};
	},
	getTooltip:function(tooltip){
		return (<Tooltip id="tooltip">{tooltip}</Tooltip>);
	},
	loadDataFromserver:function(){
		var url=IntegrationService.AlertService.getErrorAlertCount;
	    $.ajax({
		      url: url,
		      method:'GET',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		        this.setState({alertCount: data.resultCode});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount: function() {
		setTimeout(this.loadDataFromserver,0);
    	this.interval=setInterval(this.loadDataFromserver,2000);
    },
    componentWillUnmount :function(){
		clearInterval(this.interval);
    },
 //    shouldComponentUpdate: function(nextProps, nextState) {
 //  		return nextState.alertCount !== this.state.alertCount;
	// },
	render: function() {
	    return (
	    	<div className="nav">
				<div className="services">
					<ul>
						<li>
					        <Link to="/statistics" activeClassName="active" >
						        <OverlayTrigger placement="bottom" overlay={this.getTooltip('事务概览')}>
							        <i className="fa fa-list-alt" aria-hidden="true"></i>
							    </OverlayTrigger>
							    <span>事务概览</span>
					        </Link>
			          	</li>
			          	<li>
			          		<Link to="/messagequery" activeClassName="active">
			          			<OverlayTrigger placement="bottom" overlay={this.getTooltip('消息查询')}>
							        <i className="fa fa-envelope" aria-hidden="true"></i>
							    </OverlayTrigger>
							    <span>消息查询</span>
			          		</Link>
			          	</li>
			          	<li>
			          		<Link to="/alarm" activeClassName="active">
			          			<OverlayTrigger placement="bottom" overlay={this.getTooltip('警报提醒')} >
							        <i className="fa fa-bell" aria-hidden="true">
							        	<span className="badge badge-sm up bg-danger pull-right-xs">{""+this.state.alertCount}</span>
							        </i>
							    </OverlayTrigger>
			          			<span>警报提醒</span>
			          		</Link>
			          	</li>
					</ul>
				</div>
			</div>
	    );
  }
});
export default Navigation;