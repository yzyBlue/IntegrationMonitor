import React from 'react'
import AlertList from './AlertList'
import AlertDetail from './AlertDetail'
import AlertPagination from './AlertPagination'

var AlertPageWrapper = React.createClass({
	getInitialState:function(){
		return {
			category: 'allAlert',alertDetail:'',itemSelectIndex:{itemIndex:0,pageIndex:0},pageIndex:0
		};
	},
	onPageIndexChange:function(pageIndex){
		this.setState({pageIndex:pageIndex,itemSelectIndex:{itemIndex:0,pageIndex:pageIndex}});
	},
	componentDidMount() {
	    this.setState({
	      category: this.props.params.category
	    });
  	},
  	dataFilter:function(datas){
  		var category=this.props.params.category;
  		if(category==''||category==null||category=='all'){
  			return datas;
  		}else{
  			return datas.filter(function(data){
  				return data.alertStatus.toLowerCase()==category;
  			});
  		}
  	},
  	getBreadcrumb:function(category){
  		if(category=='todo'){
  			return (<li id="curType" style={{display: 'inline-block',color: 'rgba(0, 237, 86, 0.831373)'}}>待处理</li>);
  		}else if(category=='doing'){
			return (<li id="curType" style={{display: 'inline-block',color: 'rgba(0, 237, 86, 0.831373)'}}>处理中</li>);
  		}else if(category=='done'){
			return (<li id="curType" style={{display: 'inline-block',color: 'rgba(0, 237, 86, 0.831373)'}}>已解决</li>);
  		}else{
  			return (<li id="curType" style={{display: 'none'}}></li>);
  		}
  	},
  	itemSelectChanged:function(alertIndex){
		this.setState({itemSelectIndex:alertIndex});
	},
	render: function() {
		var style={'paddingTop': '15px','overflow':'hidden'};
		var alertList=this.props.data;
		var data=this.dataFilter(alertList);
		//console.log("itemIndex : "+this.state.itemSelectIndex.itemIndex+" , pageIndex :"+this.state.itemSelectIndex.pageIndex);
		var alertIndex=this.state.itemSelectIndex.itemIndex+6*this.state.itemSelectIndex.pageIndex;
		var alertDetail=data[alertIndex];
		return (
			<div id="page-wrapper" style={style}>
				<div className="container-fluid">
					<div className="row">
	                    <div className="col-alert-12">
	                        <ol className="breadcrumb">
	                            <li id="alarmType">所有告警</li>
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
						<AlertPagination data={data} onPageIndexChange={this.onPageIndexChange}/>
                	</div>
				</div>
			</div>
		);
	}
});
export default AlertPageWrapper