import React from 'react'
import AlertItem from './AlertItem'

var AlertList = React.createClass({
	callBack:function(index){
		this.props.callBack(index);
	},
	getAlertItem:function(a){
		return (<AlertItem key={a.key} data={a.data} className={a.className} callBack={this.callBack} index={a.index}/>);
	},
  	render:function(){
  		var dataList=this.props.data;
  		var arr=[];
  		for(var i=0;i<dataList.length;i++){
  			arr.push(
				this.getAlertItem({
					key : i,
					index:i,
					data:dataList[i],
					className : i==this.props.itemSelectIndex?'active':''
				})
  			);
  		}
	    return (
	    	<div id="alarmList" className="col-lg-5">
		    	<div className="alarm-title">
		    		<input id="currentSelect" type="hidden" value="4322345"/>
		        </div>
		        <div className="alarm-list">
		        	{arr}
		        </div>
		        <ul id="page" className="pagination pull-right">
		        	<li>
		        		<a title="1">1</a>
		        	</li>
		        </ul>
	        </div>
	    );
  }
});
export default AlertList