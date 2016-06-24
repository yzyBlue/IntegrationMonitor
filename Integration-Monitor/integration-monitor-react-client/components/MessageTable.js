import React from 'react'
import TableBody from './TableBody'

var MessageTable=React.createClass({
	renderTableList:function(){
		var dataList=[];
		var url=this.props.url;
		var length=this.props.data.length;
		var index=this.props.pageIndex.pageIndex;
		if(typeof index =='undefined'){
			index=0;
		}
		var start=10*index;
		var end=10*(index+1);
		dataList=this.props.data.slice(start,end);
		return dataList.map(function(message,i){
			return (
				<TableBody url={url} message={message} key={message.sequenceId} id={i+""}/>
			);
	 });
	},
	render:function(){
		return (
			<div className="widget-normal">
				<div className="widget-content">
					<table className="table table-striped ">
						<colgroup>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
							<col style={{'width': 'auto'}}/>
						</colgroup>
						<thead>
							<tr>
								<th className="sortedth">
									<span className="sortedtext"></span>
									<span className="sorted-arrow "></span>
								</th>
								<th className="sortedth"><span className="sortedtext">编号</span><span
									className="sorted-arrow desc "></span></th>
								<th className="sortedth"><span className="sortedtext">消息类型</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">消息子类型</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">事务类型</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">发生时间</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">消息索引号</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">病人号</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">就诊号</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">处理状态</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">处理过程</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">流程状态</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">操作</span><span
									className="sorted-arrow "></span></th>
							</tr>
						</thead>
						{this.renderTableList()}
					</table>
				</div>
			</div>
		);
	}
});
export default MessageTable;