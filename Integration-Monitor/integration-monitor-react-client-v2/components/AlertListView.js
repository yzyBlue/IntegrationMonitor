import React from 'react'
import MyPagination from './MyPagination'
import AlertListViewTable from './AlertListViewTable'
import IntegrationService from './IntegrationService'
import AlertSelectOption from './AlertSelectOption'
var AlertListView = React.createClass({
	getInitialState: function() {
		//console.log("AlertListView : getInitialState");
	    return {data: [],refresh:false,paramMap:{}};
	},
	getDefaultProps: function() {
		//console.log("AlertListView : getDefaultProps");
		return {
			data: [],refresh:false
		};
	},
	onPageIndexChange:function(pageIndex){
		this.setState(pageIndex);
	},
	loadAlertFromServer:function() {
		//console.log("AlertListView : loadAlertFromServer");
		var url=IntegrationService.AlertService.findAlertByMap;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/list';
		//var param={alertLevel:'ERROR'};
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:'{}',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		      	if(this.isMounted){
		        	this.setState({data: data});
		      	}
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(url, status, err.toString());
		      }.bind(this)
		});
	},
	refreshData:function(){
		//console.log("AlertListView : refreshData");
		this.setState({data: [],refresh:false});
		//console.log("AlertListView : refreshData---"+paramMap);
		var url=IntegrationService.AlertService.findAlertByMap;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/list';
		//var param={alertLevel:'ERROR'};
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:this.state.paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		      	if(this.isMounted){
		        	this.setState({data: data,refresh:!this.state.refresh});
		      	}
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(url, status, err.toString());
		        this.setState({data: [],refresh:!this.state.refresh});
		      }.bind(this)
		});
	},
	componentDidMount: function() {
		//console.log("AlertListView : componentDidMount");
		this.loadAlertFromServer();
	    //setInterval(this.loadAlertFromServer(), 5000);
	    //this.interval=setInterval(this.loadAlertFromServer,5000);
	},
	componentWillMount: function() {
		//console.log("AlertListView : componentWillMount");
		//this.loadAlertFromServer();
        //console.log("componentWillMount");
    },
    componentWillReceiveProps: function(nextProps) {
    	//console.log("AlertListView : componentWillReceiveProps");
	  // this.setState({
	  //   data: nextProps.data,refresh:nextProps.refresh
	  // });
	},
    componentWillUnmount(){
    	//console.log("AlertListView : componentWillReceiveProps");
        //clearInterval(this.interval);
    },
	handleMsgQuery: function(paramMap) {
		this.setState({data: [],refresh:false,paramMap:paramMap});
		var paramMap=JSON.stringify(paramMap); 
		var url=IntegrationService.AlertService.findAlertByMap;
		//console.log(paramMap);
	    setTimeout($.ajax({
	      url: url,
	      method:'POST',
	      contentType:'application/json; charset=UTF-8',
	      data: paramMap,
	      dataType: 'json',
	      async:true,
	      cache:false,
	      success: function(response) {
	    	// console.log(response);
	    	if(this.isMounted){
	    		this.setState({data: response,refresh:!this.state.refresh,paramMap:paramMap});
	    	}
	      }.bind(this),
	      error: function(xhr, status, err) {
	        //this.setState({data: response});
	        alert(err.toString());
	        console.error(this.props.url, status, err.toString());
	        this.setState({data: [],refresh:!this.state.refresh,paramMap:paramMap});
	      }.bind(this)
	    }),1000);
	},
	componentWillUnmount: function() {
    	//this.loadDataFromserver.abort();
  	},
  render:function(){
    return (
    <div className="widget-normal" style={{backgroundColor: '#F9F9F9',marginLeft:'10px'}}>
    	<div className="widget-content">
			<h2>警报详细列表</h2>
			<div className="widget-normal" style={{backgroundColor: 'white'}}>
                <div className="widget-content" style={{display: 'block'}}>
                    <p>搜索条件</p>
                    <AlertSelectOption onAlertQuery={this.handleMsgQuery} refreshData={this.refreshData} />
                </div>
            </div>
			<AlertListViewTable data={this.state.data} pageIndex={this.state.pageIndex} />
			<MyPagination refresh={this.state.refresh} data={this.state.data} onPageIndexChange={this.onPageIndexChange}/>
		</div>
	</div>
    );
  }
});
export default AlertListView