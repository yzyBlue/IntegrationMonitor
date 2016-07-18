import React from 'react'
import AlertItem from './AlertItem'
import AlertPagination from './AlertPagination'
var AlertList = React.createClass({
	callBack:function(alertIndex){
		this.props.callBack(alertIndex);
	},
	getAlertItem:function(a){
		return (<AlertItem key={a.key} data={a.data} className={a.className} callBack={this.callBack} alertIndex={a.alertIndex}/>);
	},
	getInitialState: function() {
	    return {data: [],pageIndex:0};
	},
	onPageIndexChange:function(pageIndex){
		this.setState({pageIndex:pageIndex});
		this.props.onPageIndexChange({pageIndex:pageIndex});
	},
  	render:function(){
		var dataList=[];

		var length=this.props.data.length;
		var pageIndex=this.props.pageIndex;
		if(typeof pageIndex =='undefined'){
			pageIndex=0;
		}
		var start=6*pageIndex;
		var end=6*(pageIndex+1);
		dataList=this.props.data.slice(start,end);


  		var arr=[];
  		for(var i=0;i<dataList.length;i++){
  			var alertIndex={itemIndex:i,pageIndex:pageIndex};
  			arr.push(
				this.getAlertItem({
					key : i,
					alertIndex:alertIndex,
					data:dataList[i],
					className : i==this.props.itemSelectIndex.itemIndex?'active':''
				})
  			);
  		}
	    return (
	    	<div id="alarmList" className="col-lg-3">
		    	<div className="alarm-title">
		    		<input id="currentSelect" type="hidden" value="4322345"/>
		        </div>
		        <div className="alarm-list">
		        	{arr}
		        </div>
	        </div>
	    );
  }
});
export default AlertList