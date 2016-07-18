import React from 'react'
var AlertActionTable=React.createClass({
	getInitialState: function() {
		// console.log("getInitialState");
	    return {data:[]};
	},
	renderBodyList:function(){
		// console.log("renderBodyList");
		var datas=this.props.data.reverse();
		//console.log(datas.length);
		return datas.map(function(data,i){
			var trStyle={backgroundColor: 'white'};
			if(i%2 !=0){
				trStyle={backgroundColor: '#f9f9f9'};
			}
		// console.log(messageObj.connectorName);
		// console.log("renderBodyList : MsgTableBodyItem"+i);
			//var connectorName=messageObj.connectorName;
			//var response=messageObj.status=='ERROR'?messageObj.errors:messageObj.responseMap[connectorName];
			//return (<MsgTableBodyItem data={messageObj} key={'MsgBody'+(i+1)} id={''+(i+1)}/>);
			return (
				<tbody key={'MsgBody'+(i+1)}>
					<tr style={trStyle}>
						<td>{''+(i+1)}</td>
						<td>{data.actorName}</td>
						<td>{data.actionDateTime}</td>
						<td>{data.actionTypeName}</td>
						<td>{data.actionMemo}</td>
					</tr>
				</tbody>
			);
		});
	},
	render: function(){
		// console.log("render");
		return (
		<div className="widget-normal">
			<div className="widget-content">
				<table className="table table-hover">
					<caption>操作日志记录</caption>
					<thead>
						<tr>
							<th className="sortedth"><span className="sortedtext">序号</span><span
								className="sorted-arrow desc"></span></th>
							<th className="sortedth"><span className="sortedtext">操作人</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">操作时间</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">操作类型</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">备注</span><span
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
export default AlertActionTable;