import React from 'react'
import { Link,IndexLink } from 'react-router'
var AlertSideNav = React.createClass({
	render: function() {
		var onlyActiveOnIndex=true;
		return (
			<div className="collapse navbar-collapse navbar-ex1-collapse">
	        <ul className="nav navbar-nav side-nav">
	            <li>
	            	<Link activeClassName="active" to="/alerts/allAlert" onlyActiveOnIndex={onlyActiveOnIndex}>
			            <i className="fa fa-fw fa-fire"></i>
			            <b>所有告警</b>
			            <b className="allAlarm">(68)</b>
	                </Link>
	                <ul id="all" className="collapse in">
	                	<li className="divider"></li>
	                    <li>
	                    	<Link activeClassName="active" to="/alerts/todo">
			                    <c>待处理</c>
			                    <span className="alarm_active">5</span>
	                        </Link>
	                    </li>
	                    <li className="divider"></li>
	                    <li>
	                    	<Link activeClassName="active" to="/alerts/doing">
		                        <c>处理中</c>
		                        <span className="alarm_ack">2</span>
	                        </Link>
	                    </li>
	                    <li className="divider"></li>
	                    <li>
	                    	<Link activeClassName="active" to="/alerts/done">
		                        <c>已解决</c>
		                        <span className="alarm_closed">61</span>
	                        </Link>
	                    </li>
	                    <li className="divider"></li>
	                </ul>
	            </li>
	            
	        </ul>
	    </div>
		);
	}
});
export default AlertSideNav