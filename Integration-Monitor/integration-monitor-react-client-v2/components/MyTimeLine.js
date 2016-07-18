import React from 'react'
import TimeLineItem from './TimeLineItem'
import IntegrationService from './IntegrationService'
var MyTimeLine=React.createClass({
	getInitialState: function() {
		// console.log("MyTimeLine : getInitialState");
	    return {data:[]};
	},
	getMsgState:function(){
		// console.log("MyTimeLine : getMsgState");
		var message=this.props.message;
		// this.setState({message:message});
		// alert("this.props.message : "+JSON.stringify(message));
		var url=IntegrationService.MessageEventService.queryMessageEventByMap;
		//var url="http://172.16.100.64:8888/integration-monitor/message-event/query";
		var paramMap;
		if(message.transCode=='PAM'){
			paramMap={visitId:message.visitId,transCode:message.transCode,count:20};
		}else{
			paramMap={visitId:message.visitId,transCode:message.transCode,messageIndex:message.messageIndex,count:20};
		}
		
		paramMap=JSON.stringify(paramMap); 
		// alert(paramMap);
		 $.ajax({
		      url: url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		    	  // alert(JSON.stringify(data));
		    	if (this.isMounted()){
		    	  	this.setState({data:data});
		    	}
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		});
	},
	componentDidMount: function() {
		// console.log("MyTimeLine : componentDidMount");
		this.getMsgState();
		//setTimeout(this.getMsgState(), 5000);
		//this.loadInterval = setInterval(this.getMsgState, 5000);
	},
	componentWillUnmount () {
    	//this.loadInterval && clearInterval(this.loadInterval);
    	//this.loadInterval = false;
	},
	renderTimeList:function(){
		// console.log("MyTimeLine : renderTimeList");
		var message=this.props.message;
		var datas=this.state.data;
		if(datas.length>=10){
			datas=datas.slice(0,5);
		}
		return datas.map(function(data,i){
			return (<TimeLineItem data={data} key={data.sequenceId} message={message}/>);
		});
	},
	render:function(){
		// console.log("MyTimeLine : render");
		return (
			<div className="col">
		        <div className="wrapper">
		            <ul className="timeline">
		                <li className="tl-header">
		                    <div className="btn btn-info btn-default btn-rounded">Now</div>
		                </li>
		               {this.renderTimeList()}
		               
		                <li className="tl-header">
		                    <div className="btn btn-sm btn-default btn-rounded">更多</div>
		                </li>
		            </ul>
		        </div>
		    </div>		
		);
	}
});
export default MyTimeLine;