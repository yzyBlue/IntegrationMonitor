import React from 'react'
var AlertMessageTable = React.createClass({
  	render:function(){
	    return (
				<div className="widget-normal">
					<div className="widget-content">
						<table className="table table-hover table-condensed">
							<thead>
								<tr>
									<th className="sortedth"><span className="sortedtext">编号</span><span
										className="sorted-arrow desc "></span></th>
									<th className="sortedth"><span className="sortedtext">病人号</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">就诊号</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">索引号</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">消息来源</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">事件类型</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">处理状态</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">处理结果</span><span
										className="sorted-arrow "></span></th>
								</tr>
							</thead>
							<tbody>
								<tr style={{backgroundColor: 'white'}}>
									<td>{this.props.data.sequenceId}</td>
									<td>{this.props.data.patientId}</td>
									<td>{this.props.data.visitId}</td>
									<td>{this.props.data.messageIndex}</td>
									<td>
										<span className="label text-warning">{this.props.data.msgSourceCode}</span>
									</td>
									<td>{this.props.data.msgTypeDesc}</td>
									<td>
										<span className="label text-warning">{this.props.data.handleResultStatus}</span>
									</td>
									<td>{this.props.data.handleResultDesc}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
	   );
  }
});
export default AlertMessageTable