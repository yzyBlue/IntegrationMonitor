import React from 'react'
import MsgTableBodyItem from './MsgTableBodyItem'
var MirthMsgTableBody=React.createClass({
	getInitialState: function() {
		// console.log("getInitialState");
	    return {data:[]};
	},
	loadMessageFromServer:function() {
		// console.log("loadMessageFromServer");
		var paramMap= this.props.paramMap;
		paramMap=JSON.stringify(paramMap);
		// alert(JSON.stringify(paramMap));
		var url="/integration-monitor/message-event/mirthmessage";
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		    	  // console.log("loadMessageFromServer : $.ajax");
		    	// console.log(JSON.stringify(data.messageObjList));
		    	 // console.log(this.isMounted);
		    	  if (this.isMounted) {
		    		  this.setState({data: data.messageObjList});
		    	  }
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount: function() {
		// console.log("componentDidMount");
		this.loadMessageFromServer();
	},
// componentWillReceiveProps (nextProps) {
// this.loadMessageFromServer();
//	
// },
	componentWillUnmount: function () {
		// console.log("componentWillUnmount");
		this.isMounted = false;
	},
	renderBodyList:function(){
		// console.log("renderBodyList");
		var datas=this.state.data.reverse();
		//console.log(datas.length);
		return this.state.data.map(function(messageObj,i){
		// console.log(messageObj.connectorName);
		// console.log("renderBodyList : MsgTableBodyItem"+i);
			return (<MsgTableBodyItem data={messageObj} key={'MsgBody'+(i+1)} id={''+(i+1)}/>);
		});
	},
	render: function(){
		// console.log("render");
		return (
				<table className="table-msg table-msg-striped">
					<caption>{this.props.eventType}</caption>
					<thead>
						<tr>
							<th className=""><span className="">序号</span><span
								className=""></span></th>
							<th className=""><span className="">名称</span><span
								className=""></span></th>
							<th className=""><span className="">处理时间</span><span
								className=""></span></th>
							<th className=""><span className="">Protocol</span><span
								className=""></span></th>
							<th className=""><span className="">处理状态</span><span
								className=""></span></th>
						</tr>
					</thead>
					{this.renderBodyList()}
				</table>
		);
	}
});
export default MirthMsgTableBody;