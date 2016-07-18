import React from 'react';
import ListViewTableBody from './ListViewTableBody'
var AlertListViewTable = React.createClass({
	renderTableList:function(){
		var dataList=[];
		var length=this.props.data.length;
		var index=this.props.pageIndex;
		if(typeof index =='undefined'){
			index=0;
		}
		var start=10*index;
		var end=10*(index+1);
		dataList=this.props.data.slice(start,end);
		return dataList.map(function(alert,i){
			return (
				<ListViewTableBody data={alert} key={alert.serialNo} id={(i+1)+""}/>
			);
	 });
	},
  render:function(){
    return (
    			<div className="widget-normal">
					<div className="widget-content">
						<table className="table table-hover table-condensed">
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
							</colgroup>
							<thead>
								<tr>
									<th className="sortedth"><span className="sortedtext">编号</span><span
										className="sorted-arrow desc "></span></th>
									<th className="sortedth"><span className="sortedtext">警报事务</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">警报主题</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">源消息序号</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">处理状态</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">警报级别</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">发生时间</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">通知人员</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">备注说明</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">警报详情</span><span
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
export default AlertListViewTable