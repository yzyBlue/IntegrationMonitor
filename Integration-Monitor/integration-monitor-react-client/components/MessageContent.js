
import React from 'react'
import CheckBoxList from './CheckBoxList'
import MessageTable from './MessageTable'
import InputTextList from './InputTextList'
import MyPagination from './MyPagination'
import IntegrationService from './IntegrationService'

var MessageContent=React.createClass({
	getInitialState: function() {
	    return {data: [],pageIndex:0};
	},
	onPageIndexChange:function(pageIndex){
		this.setState({pageIndex:pageIndex});
	},
	loadDataFromserver:function() {
		var paramMap={count:1000};
		paramMap=JSON.stringify(paramMap);
	    $.ajax({
		      url: this.props.url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount: function() {
		//this.loadDataFromserver();
	    setTimeout(this.loadDataFromserver, 1000);
	},
	handleMsgQuery: function(paramMap) {
		this.setState({data: []});
		var paramMap=JSON.stringify(paramMap); 
		console.log(paramMap);
	    $.ajax({
	      url: this.props.url,
	      method:'POST',
	      contentType:'application/json; charset=UTF-8',
	      data: paramMap,
	      dataType: 'json',
	      async:true,
	      cache:false,
	      success: function(response) {
	    	// console.log(response);
	        this.setState({data: response});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        this.setState({data: response});
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	render: function () {
		var url=IntegrationService.MessageEventService.processMessageEvent;
		return(
			<div>
				<h2>检索条件</h2>
				<InputTextList onMsgQuerySubmit={this.handleMsgQuery}/>
				<MessageTable url={url} data={this.state.data} pageIndex={this.state.pageIndex} />
				<MyPagination data={this.state.data} onPageIndexChange={this.onPageIndexChange}/>
				
			</div>
		);
	}
});
export default MessageContent;
