import React from 'react'
var AlertItem = React.createClass({
	getInitialState:function(){
		return {
			alertId:"",
			alertType:"",
			alertTitle:"",
			alertTime:"",
			active:false
		};
	},
	getDefaultProps: function() {
		return {
			className:'active',
			index:0
		};
	},
	componentWillMount: function() {
		this.setState({alertId:this.props.data.alertId,
			alertType:this.props.data.alertType,
			alertTitle:this.props.data.alertTitle,
			alertTime:this.props.data.alertTime,
			active:false});
	},
	componentWillReceiveProps:function(nextProps){
		if(nextProps.alertId!=this.props.alertId){
			this.setState({alertId:nextProps.data.alertId,alertType:nextProps.data.alertType,
				alertTitle:nextProps.data.alertTitle,alertTime:nextProps.data.alertTime});
		}
	},
	clickEvent:function(){
		if(this.props.className.indexOf('disabled')<0 && this.props.className.indexOf('active')<0){
			this.props.callBack(this.props.index);
		}
	},
	render:function(){
		var styleClass="list-item clearfix border-lblue " +this.props.className;
	   return (
	   	<div className={styleClass} version="0" alarmcontent="崩溃率:INFO" id="4290433" 
	   		assignments="723" contactnames="chinaweal" onClick={this.clickEvent}>
			<div className="warn-topLine">
				<div className="appService">
					<span className="alarm-id">{this.props.data.alertId}</span> {this.props.data.alertType}
				</div>	
				<div className="pull-right warn-inline">
		            <label></label> <span className="lastTimeTxt">{this.props.data.alertTime}</span>
		        </div>
			</div>
		    <div className="item-left">
		        <div className="entityName">{this.props.data.alertTitle}</div>
		        <div className="activeAlarm"></div>
		    </div>
		    <div className="item-right">
				<i className="fa fa-fw fa-user grey" title="处理告警"></i> 
		        <i className="fa fa-check-square grey" title="关闭告警"></i>
				<i className="fa fa-share-square-o grey" title="转发告警" style={{marginLeft:'3px'}}></i>
		    </div>
       	</div>
	   );
	}
});
export default AlertItem