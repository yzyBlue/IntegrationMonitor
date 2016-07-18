import React from 'react'
import { Link,IndexLink } from 'react-router'
var AlertSideNav = React.createClass({
	getInitialState:function(){
		return {
			all:0,
			todo:0,
			doing:0,
			done:0
		};
	},
	dataFilter:function(category){
  		var datas=this.props.data;
  		if(category==''||category==null||category=='all'){
  			return datas;
  		}else{
  			return datas.filter(function(data){
  				//var category=new String(category);
  				return category==data.alertStatus.toLowerCase();
  			});
  		}
  	},
  	getLink:function(category){
  		return { pathname: '/alerts/'+category };
  	},
  	componentWillMount: function() {
  		var all=this.props.data.length;
  		var todo=this.dataFilter('todo').length;
  		var doing=this.dataFilter('doing').length;
  		var done=this.dataFilter('done').length;
		this.setState({all:all,todo:todo,doing:doing,done:done});
	},
	render: function() {
		var onlyActiveOnIndex=true;
		var all=this.props.data.length;
  		var todo=this.dataFilter('todo').length;
  		var doing=this.dataFilter('doing').length;
  		var done=this.dataFilter('done').length;
		return (
			<div className="collapse navbar-collapse navbar-ex1-collapse">
		        <ul className="nav navbar-nav side-nav">
		            <li>
		            	<Link activeClassName="active" to={this.getLink('all')} onlyActiveOnIndex={onlyActiveOnIndex}>
				            <i className="fa fa-fw fa-fire"></i>
				            <b>所有告警</b>
				            <b className="allAlarm">{"("+all+")"}</b>
		                </Link>
		                <ul id="all" className="collapse in">
		                	<li className="divider"></li>
		                    <li>
		                    	<Link activeClassName="active" to={this.getLink('todo')}>
				                    <c>待处理</c>
				                    <span className="alarm_active">{""+todo}</span>
		                        </Link>
		                    </li>
		                    <li className="divider"></li>
		                    <li>
		                    	<Link activeClassName="active" to={this.getLink('doing')}>
			                        <c>处理中</c>
			                        <span className="alarm_ack">{""+doing}</span>
		                        </Link>
		                    </li>
		                    <li className="divider"></li>
		                    <li>
		                    	<Link activeClassName="active" to={this.getLink('done')}>
			                        <c>已解决</c>
			                        <span className="alarm_closed">{""+done}</span>
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