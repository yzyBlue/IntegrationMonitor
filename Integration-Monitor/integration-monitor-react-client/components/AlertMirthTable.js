import React from 'react'
import MsgTableBodyItem from './MsgTableBodyItem'
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
		// console.log("renderBodyList : MsgTableBodyItem"+i);
			var connectorName=messageObj.connectorName;
			var response=messageObj.status=='ERROR'?messageObj.errors:messageObj.responseMap[connectorName];
			//return (<MsgTableBodyItem data={messageObj} key={'MsgBody'+(i+1)} id={''+(i+1)}/>);
			return (
				<tbody key={'MsgBody'+(i+1)}>
					<tr>
						<td>{''+(i+1)}</td>
						<td>{messageObj.connectorName}</td>
						<td>{messageObj.dateCreated}</td>
						<td>{messageObj.encodedDataProtocol}</td>
						<td>
							<li title={response}>
    							<a className="btn btn-green">{messageObj.status}</a>
    						</li>
						</td>
					</tr>
				</tbody>
			);
		});
	},
	render: function(){
		// console.log("render");
		return (
		<div className="widget-normal" style={{backgroundColor:'rgba(0,0,0,0.08)'}}>
			<div className="widget-content">
				<table className="table table-striped">
					<caption>集成通道处理</caption>
					<thead>
						<tr>
							<th className="sortedth"><span className="sortedtext">序号</span><span
								className="sorted-arrow desc"></span></th>
							<th className="sortedth"><span className="sortedtext">Destination名称</span><span
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