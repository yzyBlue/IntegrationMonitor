
import React from 'react'
import CheckBoxList from './CheckBoxList'
import MessageTable from './MessageTable'
import InputTextList from './InputTextList'
import MyPagination from './MyPagination'
import IntegrationService from './IntegrationService'
import { ProgressBar  } from 'react-bootstrap';
var MessageContent=React.createClass({
	getInitialState: function() {
	    return {data: [],refresh:false};
	},
	onPageIndexChange:function(pageIndex){
		this.setState(pageIndex);
	},
	loadDataFromserver:function() {
		var paramMap={count:100};
		paramMap=JSON.stringify(paramMap);
	    $.ajax({
		      url: this.props.url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	 if (this.isMounted) {
		        	this.setState({data: data,refresh:!this.state.refresh});
		    	}
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount() {
        this.loadDataFromserver();
        //this.interval=setInterval(this.loadDataFromserver,5000);
    },
    componentWillMount: function() {
        //console.log("componentWillMount");
    },
    componentWillUnmount(){
        //clearInterval(this.interval);
    },
	handleMsgQuery: function(paramMap) {
		this.setState({data: [],refresh:false});
		var paramMap=JSON.stringify(paramMap); 
		//console.log(paramMap);
	    setTimeout($.ajax({
	      url: this.props.url,
	      method:'POST',
	      contentType:'application/json; charset=UTF-8',
	      data: paramMap,
	      dataType: 'json',
	      async:true,
	      cache:false,
	      success: function(response) {
	    	// console.log(response);
	    	if(this.isMounted){
	    		this.setState({data: response,refresh:!this.state.refresh});
	    	}
	      }.bind(this),
	      error: function(xhr, status, err) {
	        //this.setState({data: response});
	        alert(err.toString());
	        console.error(this.props.url, status, err.toString());
	        this.setState({data: [],refresh:!this.state.refresh});
	      }.bind(this)
	    }),2000);
	},
	componentWillUnmount: function() {
    	//this.loadDataFromserver.abort();
  	},
  	getTable:function(){
  		var url=IntegrationService.MessageEventService.processMessageEvent;
  		if(this.state.progress){
  			return (<ProgressBar bsStyle="success" active now={100}/>);
  		}else{
  			(<MessageTable url={url} data={this.state.data} pageIndex={this.state.pageIndex} />)
  		}
  	},
	render: function () {
		var url=IntegrationService.MessageEventService.processMessageEvent;
		return(
			<div>
				<h2>检索条件</h2>
				<div className="widget-normal" style={{backgroundColor: 'white'}}>
                    <div className="widget-content" style={{display: 'block'}}>
                         <InputTextList onMsgQuerySubmit={this.handleMsgQuery}/>
                    </div>
                </div>
				<MessageTable url={url} data={this.state.data} pageIndex={this.state.pageIndex} />
				<MyPagination refresh={this.state.refresh} data={this.state.data} onPageIndexChange={this.onPageIndexChange}/>
				
			</div>
		);
	}
});
export default MessageContent;
