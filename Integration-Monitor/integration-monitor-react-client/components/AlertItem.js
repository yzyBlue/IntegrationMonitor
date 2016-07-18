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
			alertIndex:{itemIndex:0,pageIndex:0}
		};
	},
	clickEvent:function(){
		if(this.props.className.indexOf('disabled')<0 && this.props.className.indexOf('active')<0){
			this.props.callBack(this.props.alertIndex);
		}
	},
	
	render:function(){
		var styleClass="list-item clearfix ";
		var level=this.props.data.alertLevel;
		var levelStyle="";
		if(level=='WARN'){
			levelStyle={color:'#FAD733'};
			styleClass=styleClass+"border-lblue ";
		}else if(level=='ERROR'){
			levelStyle={color:'#FF5722'};
			styleClass=styleClass+"border-lorange ";
		}else if(level=='ERROR'){
			levelStyle={color:'rgba(255,0,0,1)'};
			styleClass=styleClass+"border-lred ";
		}
		styleClass=styleClass+this.props.className;
	   return (
	   	<div className={styleClass} onClick={this.clickEvent}>
			<div className="warn-topLine">
				<div className="appService">
					<span className="alarm-id">{this.props.data.serialNo}</span> 
					<span className="alarm-label">{this.props.data.alertName}</span>
				</div>	
				<div className="pull-right warn-inline">
		            <label></label> <span className="lastTimeTxt">{this.props.data.createDate}</span>
		        </div>
			</div>
		    <div className="item-left">
		        <div className="entityName">{this.props.data.alertTheme}</div>
		        <div className="activeAlarm" style={levelStyle}>{this.props.data.alertLevel}</div>
		    </div>
		    <div className="item-right">
				<i className="fa fa-fw fa-user grey" title="处理告警">
					
				</i> 
		        <i className="fa fa-check-square grey" title="关闭告警" style={{marginLeft:'3px'}}>
					
		        </i>
		    </div>
       	</div>
	   );
	}
});
export default AlertItem