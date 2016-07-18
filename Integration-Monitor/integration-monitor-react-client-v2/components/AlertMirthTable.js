import React from 'react'
import AlertMithTableBody from './AlertMithTableBody'
var AlertMithTable=React.createClass({
	getInitialState: function() {
		// console.log("getInitialState");
	    return {data:[]};
	},
	renderBodyList:function(){
		// console.log("renderBodyList");
		var datas=this.props.data.reverse();
		//console.log(datas.length);
		return datas.map(function(messageObj,i){
		// console.log(messageObj.connectorName);
			// var connectorName=messageObj.connectorName;
			// var response=messageObj.status=='ERROR'?messageObj.errors:messageObj.responseMap[connectorName];
			// var trStyle={backgroundColor: 'white'};
			// if(i%2 !=0){
			// 	trStyle={backgroundColor: '#f9f9f9'};
			// }
			return (
				<AlertMithTableBody messageObj={messageObj} key={''+(i+1)} id={''+(i+1)}/>
			);
		});
	},
	render: function(){
		// console.log("render");
		return (
		<div className="widget-normal">
			<div className="widget-content">
				<table className="table table-hover table-condensed">
					<caption>集成通道处理</caption>
					<thead>
						<tr>
							<th className="sortedth"><span className="sortedtext">序号</span><span
								className="sorted-arrow desc"></span></th>
							<th className="sortedth"><span className="sortedtext">名称</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">处理时间</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">Protocol</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">处理状态</span><span
								className="sorted-arrow"></span></th>
						</tr>
					</thead>
					{this.renderBodyList()}
				</table>
			</div>
		</div>
		);
	}
});
export default AlertMithTable;