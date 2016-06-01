/**
 * 
 */

var divStyle = {
		position: 'fixed',
		bottom: '0px',
		width: '99%'
}; 
var Footer = React.createClass({
	getInitialState:function(){
		return {
			website:"官方网站",
			help:"帮助中心",
			copyright:"Copyright © 2016 浙江大学"
		};
	},
  render: function() {
    return (
    	<div className="footer" style={divStyle}>
    		<ul>
    			<li><a href="#">{this.state.website}</a></li>
    			<li className="divider"></li>
    			<li><a href="#">{this.state.help}</a></li>
    			<li className="divider"></li>
    			<li>
    				<p>{this.state.copyright}</p>
    			</li>
    		</ul>
    	</div>
    );
  }
});

var Header = React.createClass({
	  render: function() {
	    return (
	      <div className="logo">
	      	<a className="iconfont icon-brand" href="/integration-monitor/"	title="Inte-Monitor"> 
			</a>
	      </div>
	    );
	 }
});


var MessageLayout=React.createClass({
	 render: function () {
		    return (
		      <div id="layout">
		      	<div className="wrap clearfix">
		      		<PageTitle />
		      		<MessageContentWrapper/>
		      	</div>
		      </div>
		    );
		}
});

var PageTitle=React.createClass({
	render: function () {
	    return (
	    	<div className="page-title">
				<h2>
					消息监控<sub>消息事件监控列表</sub>
				</h2>
			</div>
	    );
	  }
});

var MessageContentWrapper=React.createClass({
	render: function () {
	    return (
	    	<div className="content no-sidebar" id="root">
				<div>
					<div className="pure-g">
						<div className="pure-u-1">
							<div className="box">
								<div className="widget-normal">
									<div className="widget-content" style={{display: 'block'}}>
										<MessageContent/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	    );
	  }
});
var MessageContent=React.createClass({
	render: function () {
		return(
			<div>
				<h2>检索条件</h2>
				<CheckBoxList/>
				<InputTextList/>
				<MessageTable/>
			</div>
		)
	}
});

var liStyle = {
	'marginRight': '20px'
}; 

var CheckBoxList=React.createClass({
	render: function(){
		return (
			<div className="widget-tools">
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><input type="checkbox"/><span>ADT</span></label></li>
					<li><label><input type="checkbox"/><span>检查</span></label></li>
					<li><label><input type="checkbox"/><span>检验</span></label></li>
					<li><label><input type="checkbox"/><span>医嘱</span></label></li>
					<li><label><input type="checkbox"/><span>手术</span></label></li>
					<li><label><input type="checkbox"/><span>摆药</span></label></li>
					<li><label><input type="checkbox"/><span>费用</span></label></li>
					<li><button className="btn-blue btn-xs" type="button">
							<i className="iconfont icon-refresh"></i>
						</button></li>
					<li><button className="btn-blue btn-xs" type="button">重置</button></li>
				</ul>
				<div className="text-align-right">
					<button className="btn-blue btn-sm" type="button">下载报表</button>
				</div>
			</div>
		)
	}
});

var InputTextList = React.createClass({
	render: function(){
		return(
			<div className="widget-tools-msg">
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><span>病 人 号 :</span></label></li>
					<li><input className="input-text" type="text" value=""
						placeholder="M0000001"/></li>
					<li><label><span>就 诊 号 :</span></label></li>
					<li><input className="input-text" type="text" value=""
						placeholder="251634"/></li>
					<li><label><span>索引号:</span></label></li>
					<li><input className="input-text" type="text" value=""
						placeholder="251634"/></li>
				</ul>
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><span>开始时间:</span></label></li>
					<li><input className="input-text" type="text" value=""
						placeholder="2016-04-01 12：25:56"/></li>
					<li><label><span>终止时间:</span></label></li>
					<li><input className="input-text" type="text" value=""
						placeholder="2016-04-11 12：25:56"/></li>
					<button className="btn-blue btn-sm" type="button">查    询</button>
				</ul>
			</div>
		)
	}
});


var MessageTable=React.createClass({
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
						</colgroup>
						<thead>
							<tr>
								<th className="sortedth"><span className="sortedtext"></span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">编号</span><span
									className="sorted-arrow desc "></span></th>
								<th className="sortedth"><span className="sortedtext">消息类型</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">事件类型</span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">控制代码</span><span
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
								<th className="sortedth"><span className="sortedtext">操作</span><span
									className="sorted-arrow "></span></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className=""><i className="iconfont  state-downtime"></i></td>
								<td className="">1</td>
								<td className="">ADT</td>
								<td className="">A01</td>
								<td className=""></td>
								<td className="">PAM</td>
								<td className="">2016-04-08 15:17:25</td>
								<td className="">251634</td>
								<td className="">M000391681</td>
								<td className="">152295</td>
								<td className=""><a className="btn-green" data-toggle="modal" href="#myModal">查看状态</a></td>
								<td className=""><div className="operation">
										<a className="iconfont" href="javascript:;"></a><a
											className="iconfont" href="javascript:;"></a>
									</div></td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className=""><i className="iconfont  state-downtime"></i></td>
								<td className="">2</td>
								<td className="">ORM</td>
								<td className="">O01</td>
								<td className="">NW</td>
								<td className="">EXAM</td>
								<td className="">2016-04-08 15:17:25</td>
								<td className="">ER152295</td>
								<td className="">M000391681</td>
								<td className="">152295</td>
								<td className=""><a className="btn-green" data-toggle="modal" href="#myModal">查看状态</a></td>
								<td className=""><div className="operation">
										<a className="iconfont" href="javascript:;"></a><a
											className="iconfont" href="javascript:;"></a>
									</div></td>
							</tr>
						</tbody>

						<tbody>
							<tr>
								<td className=""><i className="iconfont  state-downtime"></i></td>
								<td className="">3</td>
								<td className="">ADT</td>
								<td className="">A02</td>
								<td className="">NW</td>
								<td className="">PAM</td>
								<td className="">2016-04-08 15:17:25</td>
								<td className="">251634</td>
								<td className="">M000391681</td>
								<td className="">152295</td>
								<td className=""><a className="btn-green" data-toggle="modal" href="#myModal">查看状态</a></td>
								<td className=""><div className="operation">
										<a className="iconfont" href="javascript:;"></a><a
											className="iconfont" href="javascript:;"></a>
									</div></td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className=""><i className="iconfont  state-downtime"></i></td>
								<td className="">4</td>
								<td className="">ORM</td>
								<td className="">O01</td>
								<td className="">CA</td>
								<td className="">EXAM</td>
								<td className="">2016-04-08 15:17:25</td>
								<td className="">ER152295</td>
								<td className="">M000391681</td>
								<td className="">152295</td>
								<td className=""><a className="btn-green" data-toggle="modal" data-keyboard="false" data-target="#myModal">查看状态</a></td>
								<td className=""><div className="operation">
										<a className="iconfont" href="javascript:;"></a><a
											className="iconfont" href="javascript:;"></a>
									</div></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
});

var MessageView=React.createClass({
	render : function(){
		return (
			<div>
				<Header/>
				<MessageLayout/>
				<Modal/>
				<Footer/>
			</div>
		)
	}
});

var Modal=React.createClass({
	render:function(){
		return (
			<div className="modal fade" id="myModal" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h4 className="modal-title" id="myModalLabel">事务状态流程</h4>
							</div>
							<div className="modal-body">
								<div
									style={{'position': 'relative', 'padding': '0px', 'width': '100%', 'height': '100%'}}>
									<svg width="100%" height="100%">
										<g>
											<rect width="100%" height="100%"style={{'fill': 'none', 'pointerEvents': 'all'}} />
											<g>
												<defs>
												    <marker id="markerArrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">
												        <path d="M2,2 L2,11 L10,6 L2,2" style={{'fill': '#ffffff'}} />
												    </marker>
												    
												    <marker id="markerArrow2" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">
												        <path d="M2,6 L10,11 L10,2 L2,6" style={{'fill': '#ffffff'}} />
												    </marker>
												</defs>
												<rect x="20" y="0" width="80" height="50" style={{'fill': '#99a3b2','padding':'10px'}} />
												<text x="30" y="30" dx="0.01em" dy="3em" fill="#fff">病人入院</text>
												<line x1="110" y1="25" x2="200" y2="25"  stroke="white" stroke-width="1" marker-end="url(#markerArrow)"/>
												
												<rect x="220" y="0" width="80" height="50" style={{'fill':'#c86432','padding':'10px'}} />
												<text x="230" y="30" dx="0.01em" dy="3em" fill="#fff">病人入科</text>
												<line x1="310" y1="25" x2="400" y2="25"  stroke="white" stroke-width="1" marker-end="url(#markerArrow)"/>
												
												<rect x="420" y="0" width="80" height="50" style={{'fill':'#c86432','padding':'10px'}} />
												<text x="430" y="30" dx="0.01em" dy="3em" fill="#fff">病人转科</text>
												<line x1="520" y1="25" x2="620" y2="25"  stroke="white" stroke-width="1" marker-end="url(#markerArrow)"/>
												
												<rect x="640" y="0" width="80" height="50" style={{'fill':'#c86432','padding':'10px'}}/>
												<text x="640" y="30" dx="0.01em" dy="3em" fill="#fff">病人取消转科</text>
												<line x1="680" y1="80" x2="680" y2="180"  stroke="white" stroke-width="1" marker-end="url(#markerArrow)"/>
												
												<rect x="640" y="200" width="80" height="50" style={{'fill':'#c86432','padding':'10px'}}/>
												<text x="650" y="230" dx="0.01em" dy="3em" fill="#fff">病人转科</text>
												<line x1="510" y1="225" x2="630" y2="225"  stroke="white" stroke-width="1" marker-start="url(#markerArrow2)"/>
												
												<circle cx="460" cy="225" r="40" stroke="none" stroke-width="2"	fill="red" />
												<text x="430" y="245" dx="0.01em" dy="3em" fill="#fff">病人出院</text>
												
											</g>
										</g>
									</svg>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
							</div>
						</div>
					</div>
				</div>		
		
		)
	}
});


ReactDOM.render(<MessageView/>, document.getElementById('message'));


















