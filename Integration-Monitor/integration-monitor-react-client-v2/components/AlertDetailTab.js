import React from 'react'
import AlertMessageTable from './AlertMessageTable'
import AlertMirthTable from './AlertMirthTable'
import AlertActionTable from './AlertActionTable'
import IntegrationService from './IntegrationService'
var AlertDetailTab = React.createClass({
	getInitialState: function() {
	    return {data: [],display:'none',name:'',sourceMsgClass:'',mirthMsgClass:'',alertActionClass:''};
	},
	showSourceMessage:function(){
		if(this.props.data!=null&&typeof this.props.data !='undefined'){
		var display='';
		if(this.state.display=='none'){
			display='block';
		}
		var name=this.refs.sourceMsg.title;
		var url=IntegrationService.MessageEventService.fingMessageById+this.props.data.msgSequenceId;
	    //console.log(url);
	    $.ajax({
	          url: url,
	          dataType: 'json',
	          cache: false,
	          success: function(data) {
	            //alert(JSON.stringify(data));
	            //console.log(JSON.stringify(data));
	            this.setState({data: data,display:display,name:name,sourceMsgClass:'active',mirthMsgClass:'',alertActionClass:''});
	          }.bind(this),
	          error: function(xhr, status, err) {
	            console.error(url,status, err.toString());
	          }.bind(this)
	    });
	    }
	},
	showMirhMessage:function(){
		if(this.props.data!=null&&typeof this.props.data !='undefined'){
		var display='';
		if(this.state.display=='none'){
			display='block';
		}
		var name=this.refs.mirthMsg.title;
	    var url=IntegrationService.AlertService.getMirthCorrelatedMessage+this.props.data.alertCode;
	    //console.log(url);
	    setTimeout($.ajax({
	          url: url,
	          dataType: 'json',
	          cache: false,
	          success: function(data) {
	            //alert(JSON.stringify(data));
	            //console.log(JSON.stringify(data));
	            this.setState({data: data.messageObjList,display:'block',name:name,sourceMsgClass:'',mirthMsgClass:'active',alertActionClass:''});
	          }.bind(this),
	          error: function(xhr, status, err) {
	            console.error(url,status, err.toString());
	          }.bind(this)
	    }),5000);
		}
	},
	showAlertAction:function(){
		if(this.props.data!=null&&typeof this.props.data !='undefined'){
		var display='';
		if(this.state.display=='none'){
			display='block';
		}
		var name=this.refs.alertAction.title;
	    var url=IntegrationService.AlertService.findAlertActionByCondition+this.props.data.alertCode;
	    //console.log(url);
	    setTimeout($.ajax({
	          url: url,
	          dataType: 'json',
	          cache: false,
	          success: function(data) {
	            //alert(JSON.stringify(data));
	            //console.log(JSON.stringify(data));
	            this.setState({data: data,display:'block',name:name,sourceMsgClass:'',mirthMsgClass:'',alertActionClass:'active'});
	          }.bind(this),
	          error: function(xhr, status, err) {
	            console.error(url,status, err.toString());
	          }.bind(this)
	    }),5000);
	}
	},
  componentWillReceiveProps: function(nextProps) {
    //console.log("AlertMessage : componentWillReceiveProps");
    this.setState({
      display: nextProps.data != this.props.data?'none':this.state.display
    });
  },
  getSourceMsgTable:function(data){
  	return (<AlertMessageTable data={data}/>);
  },
  getMirthMsgTable:function(data){
  	return (<AlertMirthTable data={data}/>);
  },
  getAlertAction:function(data){
  	return (<AlertActionTable data={data}/>);
  },
  render:function(){
  	//var data=JSON.stringify(this.state.data);
  	//console.log(data);
  	var name=this.state.name;
	var detailTabContent="";
	if(name=="sourceMsg"){
		detailTabContent=this.getSourceMsgTable(this.state.data);
	}else if (name=="mirthMsg"){
		detailTabContent=this.getMirthMsgTable(this.state.data);
	}else if (name=="alertAction"){
		detailTabContent=this.getAlertAction(this.state.data);
	}
    return (
    	<div className="widget-tab">
    		<div className="widget-title-tab">
    			<ul>
    				<li ref='sourceMsg' onClick={this.showSourceMessage} title="sourceMsg" className={this.state.sourceMsgClass}>
    					<a className="btn-grey" href="javascript:void(0)">消息事件</a>
    				</li>
    				<li ref='mirthMsg' onClick={this.showMirhMessage} title="mirthMsg" className={this.state.mirthMsgClass}>
    					<a className="btn-grey" href="javascript:void(0)">通道处理</a>
    				</li>
    				<li ref='alertAction' onClick={this.showAlertAction} title="alertAction" className={this.state.alertActionClass}>
    					<a className="btn-grey" href="javascript:void(0)">操作日志</a>
    				</li>
    			</ul>
    		</div>
    		<div className="widget-content">
    			<div style={{display:this.state.display}}>
            		{detailTabContent}
          		</div>
    		</div>
    	</div>
    );
  }
});
export default AlertDetailTab