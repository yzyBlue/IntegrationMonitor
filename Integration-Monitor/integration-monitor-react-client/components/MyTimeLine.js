import React from 'react'
import TimeLineItem from './TimeLineItem'
var MyTimeLine=React.createClass({
	getInitialState: function() {
	    return {data:[]};
	},
	getMsgState:function(){
		var message=this.props.message;
		// this.setState({message:message});
		// alert("this.props.message : "+JSON.stringify(message));
		var url="/integration-monitor/message-event/query";
		var paramMap;
		if(message.transCode=='PAM'){
			paramMap={visitId:message.visitId,transCode:message.transCode};
		}else{
			paramMap={visitId:message.visitId,transCode:message.transCode,messageIndex:message.messageIndex};
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
		    	  this.setState({data:data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		});
	},
	componentDidMount: function() {
		this.getMsgState();
	},
	renderTimeList:function(){
		var message=this.props.message;
		return this.state.data.map(function(data,i){
			return (<TimeLineItem data={data} key={data.sequenceId} message={message}/>);
		});
	},
	render:function(){
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