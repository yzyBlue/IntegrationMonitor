import React from 'react'
var MsgTableBodyItem=React.createClass({
	showDetail:function(){
		var error=this.props.data.status=='ERROR'?this.props.data.errors:'成功';
		
	},
	render:function(){
		// console.log("MsgTableBodyItem");
		var connectorName=this.props.data.connectorName;
		var response=this.props.data.responseMap[connectorName];
		var response=this.props.data.status=='ERROR'?this.props.data.errors:response;
		return (
			<tbody>
				<tr>
					<td>{this.props.id}</td>
					<td>{this.props.data.connectorName}</td>
					<td>{this.props.data.dateCreated}</td>
					<td>{this.props.data.encodedDataProtocol}</td>
					<td>
						<button type="button" className="btn btn-white text-danger" data-toggle="tooltip" data-placement="right" title={response} onClick={this.showDetail}>
							{this.props.data.status}
						</button>
					</td>
				</tr>
			</tbody>
		);
	}
});
export default MsgTableBodyItem;