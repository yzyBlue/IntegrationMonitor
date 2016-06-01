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
										<MessageContent url="/integration-monitor/message/query"/>
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
	getInitialState: function() {
	    return {data: [],pageIndex:0};
	},
	onPageIndexChange:function(pageIndex){
		this.setState({pageIndex:pageIndex});
	},
	loadDataFromserver:function() {
	    $.ajax({
		      url: this.props.url,
		      method:'POST',
		      data:'{}',
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount: function() {
		this.loadDataFromserver();
	    //setInterval(this.loadDataFromserver, this.props.pollInterval);
	},
//	componentWillReceiveProps: function(nextProps) {
//		this.setState({
//		    data: nextProps.data > this.props.data
//		});
//	};
//	componentWillUpdate(nextProps, nextState){
//		
//	};
//	shouldComponentUpdate: function(nextProps, nextState) {
//		return nextProps.id !== this.props.id;
//	},
	handleMsgQuery: function(paramMap) {
		console.log(this.props.url);
		//alert(this.props.url+" : "+paramMap.patientId);
		this.setState({data: []});
		var paramMap=JSON.stringify(paramMap); 
		//alert(paramMap);
//		var datas = this.state.data;
//		var newDatas = datas.concat([data]);
//		this.setState({data: newDatas});
	    $.ajax({
	      url: this.props.url,
	      method:'POST',
	      contentType:'application/json; charset=UTF-8',
	      data: paramMap,
	      dataType: 'json',
	      async:true,
	      cache:false,
	      success: function(response) {
	    	//console.log(response);
	        this.setState({data: response});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        this.setState({data: response});
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	render: function () {
		return(
			<div>
				<h2>检索条件</h2>
				<InputTextList onMsgQuerySubmit={this.handleMsgQuery}/>
				<MessageTable data={this.state.data} pageIndex={this.state.pageIndex} url="/integration-monitor/message/process"/>
				<MyPagination data={this.state.data} onPageIndexChange={this.onPageIndexChange}/>
				<Modal data={this.state.data} />
			</div>
		);
	}
});

var liStyle = {
	'marginRight': '20px'
}; 

var CheckBoxList=React.createClass({
	getInitialState: function() {
	    return {pam:false,exam:false,labtest:false,order:false,surgery:false,drug:false,fare:false};
	},
	handleChange:function(e){
		var name=e.target.value;
		var checked=e.target.checked;
		if(name=="PAM"){
			this.setState({pam:checked});
		}else if(name=="EXAM"){
			this.setState({exam:checked});
		}else if(name=="LABTEST"){
			this.setState({labtest:checked});
		}else if(name=="ORDER"){
			this.setState({order:checked});
		}else if(name=="SURGERY"){
			this.setState({surgery:checked});
		}else if(name=="DRUG"){
			this.setState({drug:checked});
		}else if(name=="FARE"){
			this.setState({fare:checked});
		}
	},
	onClickChange:function(){
		this.setState({pam:false,exam:false,labtest:false,order:false,surgery:false,drug:false,fare:false});
	},
	render: function(){
		return (
			<div className="widget-tools">
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><input type="checkbox" value="PAM" checked={this.state.pam} onChange={this.handleChange}/><span>病人管理</span></label></li>
					<li><label><input type="checkbox" value="EXAM" checked={this.state.exam} onChange={this.handleChange}/><span>检查</span></label></li>
					<li><label><input type="checkbox" value="LABTEST" checked={this.state.labtest} onChange={this.handleChange}/><span>检验</span></label></li>
					<li><label><input type="checkbox" value="ORDER" checked={this.state.order} onChange={this.handleChange}/><span>医嘱</span></label></li>
					<li><label><input type="checkbox" value="SURGERY" checked={this.state.surgery} onChange={this.handleChange}/><span>手术</span></label></li>
					<li><label><input type="checkbox" value="DRUG" checked={this.state.drug} onChange={this.handleChange}/><span>摆药</span></label></li>
					<li><label><input type="checkbox" value="FARE" checked={this.state.fare} onChange={this.handleChange}/><span>费用</span></label></li>
					<li><button className="btn-blue btn-xs" type="button" onClick={this.onClickChange}>重置</button></li>
				</ul>
				<div className="text-align-right">
					
				</div>
			</div>
		);
	}
});
		
var MultiSelect=React.createClass({
	getInitialState: function() {
	    return {option:"PAM"};
	},
	handleChange:function(event){
		this.setState({option:event.target.option});
		this.props.selectChange({transCode:event.target.value});
	},
	render:function(){
		return (
			<select className="form-control" value={this.state.option} onChange={this.handleChange}>
				<option value="PAM">病人管理</option>	
				<option value="EXAM">检查</option>	
				<option value="LABTEST">检验</option>	
				<option value="ORDER">医嘱</option>	
				<option value="SURGERY">手术</option>	
				<option value="DRUG">摆药</option>	
				<option value="FARE">费用</option>	
			</select>
		);
	}
});


var InputTextList = React.createClass({
	getInitialState: function() {
	    return {patientId: '', visitId: '',messageIndex:'',startDate:'',endDate:'',transCode:''};
	},
	handlePatientIdChange: function(e) {
	    this.setState({patientId: e.target.value});
	},
	handleVisitIdChange: function(e) {
	    this.setState({visitId: e.target.value});
	},
	handleMessageIndexChange: function(e) {
	    this.setState({messageIndex: e.target.value});
	},
	handleStartDateChange: function(e) {
	    this.setState({startDate: e.target.value});
	},
	handleEndDateChange: function(e) {
	    this.setState({endDate: e.target.value});
	},
	SelectTransChange: function(option) {
	    this.setState(option);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var patientId = this.state.patientId.trim();
		var visitId = this.state.visitId.trim();
		var messageIndex = this.state.messageIndex.trim();
		var startDate = this.state.startDate.trim();
		var endDate = this.state.endDate.trim();
		var transCode=this.state.transCode.trim();
		this.props.onMsgQuerySubmit({"patientId": patientId, "visitId": visitId,"messageIndex": messageIndex,"startDate": startDate, "endDate": endDate,"transCode":transCode});
		//this.setState({patientId: '', visitId: '', messageIndex: ''});
	},
	render: function(){
		return(
			<div className="widget-tools-msg">
			
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><span>病 人 号 :</span></label></li>
					<li><input className="input-text" name="patientId" type="text" value={this.state.patientId} autoFocus="true"
						onChange={this.handlePatientIdChange} placeholder="M0000001"/></li>
					<li><label><span>就 诊 号 :</span></label></li>
					<li><input className="input-text" name="visitId" type="text" value={this.state.visitId}
						onChange={this.handleVisitIdChange} placeholder="251634"/></li>
					<li><label><span>索引号:</span></label></li>
					<li><input className="input-text" name="messageIndex" type="text" value={this.state.messageIndex}
						onChange={this.handleMessageIndexChange} placeholder="251634"/></li>
				</ul>
				<ul>
					<li style={liStyle}><label></label></li>
					<li><label><span>开始时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.startDate} name="startDate"
						onChange={this.handleStartDateChange} placeholder="2016-04-01 12：25:56"/></li>
					<li><label><span>终止时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.endDate} name="endDate"
						onChange={this.handleEndDateChange} placeholder="2016-04-11 12：25:56"/></li>
					<li><label><span>事务类型:</span></label></li>
					<li><MultiSelect selectChange={this.SelectTransChange}/></li>
					<button className="btn-blue btn-sm" onClick={this.handleSubmit} type="button">查    询</button>
					
				</ul>
			</div>
		);
	}
});


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
		return dataList.map(function(message){
			return (
				<TableBody url={url} message={message} key={message.sequenceId} />
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
						</colgroup>
						<thead>
							<tr>
								<th className="sortedth"><span className="sortedtext"></span><span
									className="sorted-arrow "></span></th>
								<th className="sortedth"><span className="sortedtext">编号</span><span
									className="sorted-arrow desc "></span></th>
								<th className="sortedth"><span className="sortedtext">消息类型</span><span
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

var TableBody=React.createClass({
	reProcessMsg:function(e){
		e.preventDefault();
		var message=this.props.message;
		var paramMap={channelId:message.channelCode,rawData:message.rawData};
		var paramMap=JSON.stringify(paramMap); 
		alert(paramMap);
		 $.ajax({
		      url: this.props.url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		    	  alert(JSON.stringify(data));
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		});
	},
	render:function(){
		return (
			<tbody >
				<tr>
					<td><i className="iconfont  state-downtime"></i></td>
					<td>{this.props.message.sequenceId}</td>
					<td>{this.props.message.msgTypeDesc}</td>
					<td>{this.props.message.transCode}</td>
					<td>{this.props.message.eventDateTime}</td>
					<td>{this.props.message.messageIndex}</td>
					<td>{this.props.message.patientId}</td>
					<td>{this.props.message.visitId}</td>
					<td>{this.props.message.handleResultStatus}</td>
					<td>
						<a className="btn-green" data-toggle="modal" data-target="#myModal">查看状态</a>
					</td>
					<td>
						<input type="hidden" name="paramMap" value="paramMap"/> 
						<form onSubmit={this.reProcessMsg}>
							<button className="btn-info btn-back" type="submit">重试</button>
						</form>
					</td>
				</tr>
			</tbody>	
		);
	}
});




var Modal=React.createClass({
	getInitialState: function() {
	    return {data:[]};
	},
	componentDidMount: function() {
		this.setState({data:this.props.data});
	},
	render:function(){
		var dataList=this.state.data;
		if(dataList.length>10){
			dataList=dataList.slice(0,10);
		}
		
		return (
			<div className="modal fade" id="myModal" tabindex="-1" role="dialog"
					aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal"aria-hidden="true">&times;</button>
								<h4 className="modal-title" id="myModalLabel">事务状态流程</h4>
							</div>
							<div className="modal-body">
								<MyTimeLine data={this.state.data}/>
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


var MyTimeLine=React.createClass({
	render:function(){
		var dataList=this.props.data;
		var timeLineList=dataList.map(function(message){
			<li className="tl-item" key={message.sequenceId}>
	            <div className="tl-wrap">
	                <span className="tl-date">{message.eventDateTime}</span>
	                <div className="tl-content panel padder b-a">
	                
	                    <span className="arrow left pull-up"></span>
	                    <div> {message.msgTypeDesc}</div>
	                    <div className="panel-body pull-in b-t b-light">
	                        <div className="clear">
	                        {message.rawData}
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </li>
		});
		return (
			<div className="col">
		        <div className="wrapper">
		            <ul className="timeline">
		                <li className="tl-header">
		                    <div className="btn btn-info btn-default btn-rounded">Now</div>
		                </li>
		               {timeLineList}
		                <li className="tl-header">
		                    <div className="btn btn-sm btn-default btn-rounded">2014</div>
		                </li>
		                <li className="tl-item">
		                    <div className="tl-wrap b-success">
		                        <span className="tl-date">2013-10-08</span>
		                        <div className="tl-content panel bg-success padder">
		                            <span className="arrow left pull-up hidden-left"></span>
		                            <div className="text-lt">病人入院</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A01|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-header">
		                    <div className="btn btn-icon btn-rounded btn-default"><i className="fa fa-twitter"></i></div>
		                </li>
		                <li className="tl-item tl-left">
		                    <div className="tl-wrap b-primary">
		                        <span className="tl-date">2013-05-07</span>
		                        <div className="tl-content panel bg-primary padder">
		                            <span className="arrow left pull-up hidden-left"></span>
		                            <div className="text-lt">病人挂号</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A04|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-header">
		                    <div className="btn btn-sm btn-default btn-rounded">更多</div>
		                </li>
		            </ul>
		        </div>
		    </div>		
		);
	}
});


var PagerLink = React.createClass({
	clickEvent:function(){
		if(this.props.className.indexOf('disabled')<0 && this.props.className.indexOf('active')<0){
			this.props.callBack(this.props.index);
		}
	},
	render: function() {
		return (
			<li className={this.props.className} onClick={this.clickEvent}><a href="javascript:void(0)">{this.props.text}</a></li>
		);
	}
});


var Pager = React.createClass({
	getInitialState: function() {
		return {
			goIndex:'' 
		};
	},
	getDefaultProps: function() {
		return {
			totalCount:0,
			firstText:'First',
			prevText:'Prev',
			nextText:'Next',
			lastText:'Last',
			showLinkNum:10 ,//如果设置小于0的数字，那么则不显示数字标签
			alwaysShow:true,//当总页数只有一页时是否显示
			goWidth:50,//跳转输入框的宽度
			recordTextFormat: '{0}/{1}' //{0}对应当前页 {1}对应总页数 {2}对应总记录数 如果不希望显示此部分内容，将此部分赋空值
		};
	},
	callBack:function(index){
		this.props.callBack(index);
	},
	getPageLink: function(p){
		return <PagerLink key={p.Key} text={p.Text} index={p.Index} className={p.ClassName} callBack={this.callBack}/>;
	},
	goIndexChanged:function(e){
		var n = parseInt(e.target.value);
		var v='';
		if(!isNaN(n)&&n>0){
			v= Math.min(n,this.getTotalPages())+'';
		}
		this.setState({goIndex:v});
	},
	getTotalPages:function(){
		return Math.ceil(this.props.totalCount / this.props.pageSize);
	},
	goClicked:function(){
		var idx = ~~this.state.goIndex -1;
		if(idx>=0&& idx!=this.props.pageIndex){
			this.callBack(idx);
			this.setState({goIndex:''});
		}
	},
	render: function() {
		var display='';
		if(!this.props.alwaysShow || this.props.totalCount == 0){
			display = this.props.totalCount<=this.props.pageSize?'none':'';
		}
		var totalPages = this.getTotalPages();
		var arr=[];
		var prevDisplay = 0==this.props.pageIndex?'disabled':'';
		var lastDisplay = totalPages-1==this.props.pageIndex?'disabled':'';
		arr.push(
			this.getPageLink({
				Key : "F",
				Text :  this.props.firstText,
				Index : 0,
				ClassName : prevDisplay
			})
		);
		arr.push(
			this.getPageLink({
				Key : "P",
				Text :  this.props.prevText,
				Index : Math.max(this.props.pageIndex - 1,0),
				ClassName : prevDisplay
			})
		);
		if(this.props.showLinkNum > 0){
			//PageIndex从0开始计算
			var startIndex = ~~(this.props.pageIndex / this.props.showLinkNum) * this.props.showLinkNum;
			var endIndex = Math.min(startIndex + this.props.showLinkNum,totalPages);
			for(var i=startIndex;i<endIndex;i++){
				arr.push(
					this.getPageLink({
						Key : i,
						Text :  i + 1,
						Index : i,
						ClassName : i==this.props.pageIndex?'active':''
					})
				);
			}
		}
		arr.push(
			this.getPageLink({
				Key : "N",
				Text :  this.props.nextText,
				Index : Math.min(this.props.pageIndex + 1,totalPages - 1),
				ClassName : lastDisplay
			})
		);
		arr.push(
			this.getPageLink({
				Key : "L",
				Text :  this.props.lastText,
				Index : totalPages - 1,
				ClassName : lastDisplay
			})
		);
		
		if(totalPages>this.props.showLinkNum){//显示快速跳转输入框
			var style={display:'inline-block',float:'left'};
			arr.push(
				<li key="G">
					<div className="input-group" style={style}>
						<input type="text" maxLength={(totalPages+"").length} value={this.state.goIndex} onChange={this.goIndexChanged} style={{width:this.props.goWidth,height:'30px'}} />
						<span className="input-group-btn" style={{display:'inline-block'}}>
							<button className="btn btn-default" onClick={this.goClicked} type="button">Go</button>
						</span>
					</div>
				</li>
			);
		}
		if(this.props.recordTextFormat.length>0){//显示文本
			arr.push(
				<li key="T" style={{marginLeft:5}}>
					<span>{this.props.recordTextFormat.replace(/\{0\}/g, this.props.pageIndex + 1)
					.replace(/\{1\}/g, totalPages).replace(/\{2\}/g, this.props.totalCount)}</span>
				</li>
			);
		}
		return (
			<ul className="pagination" style={{margin: '0px 0px',display:display}}>
				{arr}
			</ul>
		);
	}
});

var MyPagination=React.createClass({
	getInitialState: function() {
		return {
			TotalCount:20,
			PageSize:10,
			PageIndex:0
		};
	},
	pageIndexChanged:function(index){
		this.setState({PageIndex:index});
		this.props.onPageIndexChange({pageIndex:index});
	},

	render:function(){
		var totalCount=this.props.data.length;
		var pagerSetting={  
	            totalCount:totalCount,  
	            pageSize:this.state.PageSize,  
	            pageIndex:this.state.PageIndex,  
	            firstText:"首页" ,  
	            prevText:"上一页",  
	            nextText:"下一页",  
	            lastText:"尾页",  
	            recordTextFormat: "{0}/{1}页 共{2}条记录",  
	            //showLinkNum:2,  
	            callBack:this.pageIndexChanged  
	        };  

		return (
			<nav>
			 <Pager {...pagerSetting}/>
			</nav>
		)
	}
});


var MessageView=React.createClass({
	render : function(){
		return (
			<div>
				<Header/>
				<MessageLayout/>
				<Footer/>
			</div>
		);
	}
});



ReactDOM.render(<MessageView/>, document.getElementById('message'));


















