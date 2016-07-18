import React from 'react'
import AlertList from './AlertList'
import AlertDetail from './AlertDetail'
import AlertPagination from './AlertPagination'
import IntegrationService from './IntegrationService'

var AlertPageWrapper = React.createClass({
	getInitialState:function(){
		//console.log("AlertPageWrapper : getInitialState");
		return {
			category: 'allAlert',alertDetail:'',itemSelectIndex:{itemIndex:0,pageIndex:0},pageIndex:0,refresh:true,data:[]
		};
	},
	loadAlertFromServer:function() {
		var url=IntegrationService.AlertService.findAlertByMap;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/list';
		//var param={alertLevel:'ERROR'};
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:'{"alertLevel":"ERROR"}',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		      	if (this.isMounted) {
		        	this.setState({data: data,category: this.props.params.category,refresh:this.props.refresh});
		        }
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(url, status, err.toString());
		      }.bind(this)
		});
	},
	onPageIndexChange:function(index){
		//console.log("AlertPageWrapper : onPageIndexChange");
		this.setState({pageIndex:index.pageIndex,itemSelectIndex:{itemIndex:0,pageIndex:index.pageIndex},refresh:false});
	},
	componentDidMount() {
		this.loadAlertFromServer();
		//console.log("AlertPageWrapper : componentDidMount");
	    // this.setState({
	    //   category: this.props.params.category
	    // });
  	},
  	componentWillUnmount(){
  		//console.log("AlertPageWrapper : componentWillUnmount");
  	},
  	componentWillReceiveProps: function(nextProps) {
  		//console.log("AlertPageWrapper : componentWillReceiveProps");
		//console.log(nextProps.data+","+this.props.refresh);
		if(nextProps.params.category!=this.props.category){
			this.setState({refresh: nextProps.refresh,category:nextProps.params.category});
		}
		// if(nextProps.refresh == true){
		// 	this.setState({PageIndex: 0});
		// 	nextProps.onPageIndexChange({pageIndex:0});
		// 	//nextProps.onRefreshChange();
		// }
	},
  	dataFilter:function(datas){
  		var category=this.state.category;
  		//console.log("AlertPageWrapper : dataFilter"+category);
  		if(category==''||category==null||category=='allAlert'||category=='all'){
  			return datas;
  		}else{
  			return datas.filter(function(data){
  				return data.alertStatus.toLowerCase()==category;
  			});
  		}
  	},
  	getBreadcrumb:function(category){
  		if(category=='todo'){
  			return (<li id="curType" style={{display: 'inline-block',color: '#f05050'}}>待处理</li>);
  		}else if(category=='doing'){
			return (<li id="curType" style={{display: 'inline-block',color: '#f05050'}}>处理中</li>);
  		}else if(category=='done'){
			return (<li id="curType" style={{display: 'inline-block',color: '#f05050'}}>已解决</li>);
  		}else{
  			return (<li id="curType" style={{display: 'none'}}></li>);
  		}
  	},
  	itemSelectChanged:function(alertIndex){
  		//console.log("AlertPageWrapper : itemSelectChanged");
		this.setState({itemSelectIndex:alertIndex});
	},
	render: function() {
		//console.log("AlertPageWrapper : render");
		//console.log(this.props.refresh);
		var style={'paddingTop': '15px','overflow':'hidden'};
		var alertList=this.state.data;
		//console.log(JSON.stringify(alertList));
		var data=this.dataFilter(alertList);
		//console.log(JSON.stringify(data));
		//console.log(JSON.stringify(this.state.itemSelectIndex));
		//console.log("itemIndex : "+this.state.itemSelectIndex.itemIndex+" , pageIndex :"+this.state.itemSelectIndex.pageIndex);
		var alertIndex=this.state.itemSelectIndex==null?0:this.state.itemSelectIndex.itemIndex+6*this.state.itemSelectIndex.pageIndex;
		var alertDetail=data[alertIndex];
		//console.log(JSON.stringify(alertDetail));
		return (
			<div id="page-wrapper" style={style}>
				<div className="container-fluid">
					<div className="row">
	                    <div className="col-alert-12">
	                        <ol className="breadcrumb">
	                            <li id="alarmType">所有警报</li>
	                           {this.getBreadcrumb(this.props.params.category)}
	                           <li className="active">
                                	
                            	</li>
	                        </ol>
	                    </div>
                	</div>
                	<div className="row">
						<AlertList data={data} itemSelectIndex={this.state.itemSelectIndex} callBack={this.itemSelectChanged} pageIndex={this.state.pageIndex}/>
						<AlertDetail data={alertDetail} />
                	</div>
                	<div className="col-pagination">
						<AlertPagination refresh={this.state.refresh} data={data} onPageIndexChange={this.onPageIndexChange}/>
                	</div>
				</div>
			</div>
		);
	}
});
export default AlertPageWrapper