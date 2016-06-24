import React from 'react'
import AlertList from './AlertList'
import AlertDetail from './AlertDetail'
const dataList=[
	  		{alertId:4290433,alertType:'ios全功能展示',alertTitle:'ios全功能展示',alertTime:'7分钟前',state:'todo'},
	  		{alertId:4290434,alertType:'android全功能展示',alertTitle:'android全功能展示',alertTime:'8分钟前',state:'todo'},
	  		{alertId:4290435,alertType:'可用性',alertTitle:'Ct监控[Baidu]',alertTime:'9分钟前',state:'doing'},
			{alertId:4290436,alertType:'监控宝',alertTitle:'监控宝',alertTime:'10分钟前',state:'doing'},
			{alertId:4290437,alertType:'test',alertTitle:'Test',alertTime:'11分钟前',state:'done'}
	  	];
var AlertPageWrapper = React.createClass({
	getInitialState:function(){
		return {
			category: 'allAlert',alertDetail:'',itemSelectIndex:0
		};
	},
	componentDidMount() {
	    this.setState({
	      category: this.props.params.category
	    })
  	},
  	dataFilter:function(datas){
  		var category=this.props.params.category;
  		if(category==''||category==null||category=='allAlert'){
  			return datas;
  		}else{
  			return datas.filter(function(data){
  				return data.state==category;
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
  	itemSelectChanged:function(index){
		this.setState({itemSelectIndex:index});
	},
	render: function() {
		var style={'minHeight': '897px', 'paddingTop': '15px','overflow':'hidden'};
		var data=this.dataFilter(dataList);
		var alertDetail=data[this.state.itemSelectIndex];
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
						<AlertList data={data} itemSelectIndex={this.state.itemSelectIndex} callBack={this.itemSelectChanged}/>
						<AlertDetail data={alertDetail} />
                	</div>
				</div>
			</div>
		);
	}
});
export default AlertPageWrapper