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


var BootstrapButton = React.createClass({
	  render: function() {
	    return (
	      <a {...this.props}
	        href="javascript:;"
	        role="button"
	        className={(this.props.className || '') + ' btn'} />
	    );
	  }
});

var BootstrapModal = React.createClass({
	  // The following two methods are the only places we need to
	  // integrate Bootstrap or jQuery with the components lifecycle methods.
	  componentDidMount: function() {
	    // When the component is added, turn it into a modal
	    $(this.refs.root).modal({backdrop: 'static', keyboard: false, show: false});

	    // Bootstrap's modal class exposes a few events for hooking into modal
	    // functionality. Lets hook into one of them:
	    $(this.refs.root).on('hidden.bs.modal', this.handleHidden);
	  },
	  componentWillUnmount: function() {
	    $(this.refs.root).off('hidden.bs.modal', this.handleHidden);
	  },
	  close: function() {
	    $(this.refs.root).modal('hide');
	  },
	  open: function() {
	    $(this.refs.root).modal('show');
	  },
	  render: function() {
	    var confirmButton = null;
	    var cancelButton = null;

	    if (this.props.confirm) {
	      confirmButton = (
	        <BootstrapButton
	          onClick={this.handleConfirm}
	          className="btn-primary">
	          {this.props.confirm}
	        </BootstrapButton>
	      );
	    }
	    if (this.props.cancel) {
	      cancelButton = (
	        <BootstrapButton onClick={this.handleCancel} className="btn btn-info btn-default btn-rounded">
	          {this.props.cancel}
	        </BootstrapButton>
	      );
	    }

	    return (
	      <div className="modal fade" ref="root">
	        <div className="modal-dialog">
	          <div className="modal-content">
	            <div className="modal-header">
	              <button
	                type="button"
	                className="close"
	                onClick={this.handleCancel}>
	                &times;
	              </button>
	              <h3>{this.props.title}</h3>
	            </div>
	            <div className="modal-body">
	              {this.props.children}
	            </div>
	            <div className="modal-footer">
	              {cancelButton}
	              {confirmButton}
	            </div>
	          </div>
	        </div>
	      </div>
	    );
	  },
	  handleCancel: function() {
	    if (this.props.onCancel) {
	      this.props.onCancel();
	    }
	  },
	  handleConfirm: function() {
	    if (this.props.onConfirm) {
	      this.props.onConfirm();
	    }
	  },
	  handleHidden: function() {
	    if (this.props.onHidden) {
	      this.props.onHidden();
	    }
	  }
});

var Example = React.createClass({
	  handleCancel: function() {
	    if (confirm('Are you sure you want to cancel?')) {
	      this.refs.modal.close();
	    }
	  },
	  render: function() {
	    var modal = null;
	    modal = (
	      <BootstrapModal
	        ref="modal"
	        confirm="OK"
	        cancel="Cancel"
	        onCancel={this.handleCancel}
	        onConfirm={this.closeModal}
	        onHidden={this.handleModalDidClose}
	        title="Hello, Bootstrap!">
	          This is a React component powered by jQuery and Bootstrap!
	          <MyTimeLine/>
	      </BootstrapModal>
	    );
	    return (
	      <div className="example">
	        {modal}
	        <BootstrapButton onClick={this.openModal} className="btn btn-info btn-default btn-rounded">
	          Open modal
	        </BootstrapButton>
	      </div>
	    );
	  },
	  openModal: function() {
	    this.refs.modal.open();
	  },
	  closeModal: function() {
	    this.refs.modal.close();
	  },
	  handleModalDidClose: function() {
	    alert("The modal has been dismissed!");
	  }
});

var TimeLine=React.createClass({
	render:function(){
		return (
			<div className="container">
			    <div className="page-header">
			        <h1 id="timeline">Timeline</h1>
			    </div>
			    <ul className="timeline">
			        <li>
			          <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			              <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			            </div>
			          </div>
			        </li>
			        <li className="timeline-inverted">
			          <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			              <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>
			            </div>
			          </div>
			        </li>
			        <li>
			          <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			            </div>
			          </div>
			        </li>
			        <li className="timeline-inverted">
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			            </div>
			          </div>
			        </li>
			        <li>
			          <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk"></i></div>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			              <hr/>
			              <div className="btn-group">
			                <button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
			                  <i className="glyphicon glyphicon-cog"></i> <span className="caret"></span>
			                </button>
			                <ul className="dropdown-menu" role="menu">
			                  <li><a href="#">Action</a></li>
			                  <li><a href="#">Another action</a></li>
			                  <li><a href="#">Something else here</a></li>
			                  <li className="divider"></li>
			                  <li><a href="#">Separated link</a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </li>
			        <li>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			            </div>
			          </div>
			        </li>
			        <li className="timeline-inverted">
			          <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
			          <div className="timeline-panel">
			            <div className="timeline-heading">
			              <h4 className="timeline-title">Mussum ipsum cacilds</h4>
			            </div>
			            <div className="timeline-body">
			              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
			            </div>
			          </div>
			        </li>
			    </ul>
			</div>	
		);
	}
});



var MyTimeLine=React.createClass({
	render:function(){
		return (
			<div className="col">
		        <div className="wrapper">
		            <ul className="timeline">
		                <li className="tl-header">
		                    <div className="btn btn-info btn-default btn-rounded">Now</div>
		                </li>
		               <li className="tl-item">
		                    <div className="tl-wrap">
		                        <span className="tl-date">2h ago</span>
		                        <div className="tl-content panel padder b-a">
		                        
		                            <span className="arrow left pull-up"></span>
		                            <div>病人出院结算</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A01|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-item">
		                    <div className="tl-wrap">
		                        <span className="tl-date">2h ago</span>
		                        <div className="tl-content panel padder b-a">
		                            <span className="arrow left pull-up"></span>
		                            <div>病人出院结算</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A012|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-item">
		                    <div className="tl-wrap">
		                        <span className="tl-date">7:30 am</span>
		                        <div className="tl-content panel padder b-a">
		                            <span className="arrow arrow-success left pull-up hidden-left"></span>
		                            <div className="text-lt">病人取消转科</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A07|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-item">
		                    <div className="tl-wrap b-primary">
		                        <span className="tl-date">04.2014</span>
		                        <div className="tl-content panel padder b-a">
		                            <span className="arrow left pull-up"></span>
		                            <div className="text-lt m-b-sm">病人转科</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A02|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-item tl-left">
		                    <div className="tl-wrap b-primary">
		                        <span className="tl-date">04.2014</span>
		                        <div className="tl-content panel padder b-a">
		                            <span className="arrow left pull-up hidden-left"></span>
		                            
		                            <div className="text-lt m-b-sm">病人入科</div>
		                            <div className="panel-body pull-in b-t b-light">
		                                <div className="clear">
		                                    MSH|^~\&amp;|Shine||PACS||||ADT^A06|16847330|P|2.4|||NE|AL| EVN|A01|20150609140610| PID|1||M000394849|00991720|周俩呼^ZEH||19991229|U|||^^^^||^^^^^^^^15952234778|^^^^^^^^13852155574|||| PV1|1|I|呼吸科^呼吸科A护理站^||||^|^|||||||||^||1519541|||||||||||||||||||||||||20150429143009| IN1|||1|普通患者 |
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </li>
		                <li className="tl-header">
		                    <div className="btn btn-sm btn-default btn-rounded">2014</div>
		                </li>
		                <li className="tl-item">
		                    <div className="tl-wrap">
		                        <span className="tl-date">10.08.2013</span>
		                        <div className="tl-content panel padder b-a">
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
		                    <div className="tl-wrap b-white">
		                        <span className="tl-date">5.07.2013</span>
		                        <div className="tl-content panel padder b-a">
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


var Alert=React.createClass({
	displayName: 'Alert',
	reProcessMsg:function(){
		$.notify({
			title: '<strong>Heads up!</strong>',
			message: 'You can use any of bootstraps other alert styles as well by default.'
		},{
			type: 'success',
			allow_dismiss: false,
			timer: 1000,
			delay: 5000,
			placement: {
				from: "top",
				align: "right"
			},
		});
	},
	render:function(){
		return (
			<form onSubmit={this.reProcessMsg}>
				<button className="btn-info btn-back" type="submit">重试</button>
			</form>
		);
	}
});

var MirthMsgTableBody=React.createClass({
	getInitialState: function() {
	    return {data:[]};
	},
	loadMessageFromServer:function() {
		var paramMap= this.props.paramMap;
		paramMap=JSON.stringify(paramMap);
		//alert(JSON.stringify(paramMap));
		var url="/integration-monitor/message-event/mirthmessage";
	    $.ajax({
		      url: url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      async:false,
		      success: function(data) {
		    	//console.log(JSON.stringify(data.messageObjList[0]));
//		    	  $.notify({
//		  			title: '<strong>Heads up!</strong>',
//		  			message: JSON.stringify(data.messageObjList[0])
//		  		},{
//		  			type: 'success',
//		  			allow_dismiss: false,
//		  			timer: 1000,
//		  			delay: 5000,
//		  			placement: {
//		  				from: "top",
//		  				align: "right"
//		  			},
//		  		});
		    	this.setState({data: data.messageObjList});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
	},
	componentDidMount: function() {
		this.loadMessageFromServer();
	    //setInterval(this.loadMessageFromServer, 1000);
	},
//	componentWillReceiveProps (nextProps) {
//		this.loadMessageFromServer();
//	},
	componentWillUnmount: function () {
		this.isMounted = false;
	},
	renderBodyList:function(){
		var datas=this.state.data;
		//alert(JSON.stringify(data));
		return this.state.data.map(function(messageObj,i){
			console.log(JSON.stringify(messageObj));
			<MsgTableBodyItem data={messageObj} key={i}/>
		});
	},
	render: function(){
		return (
				<table className="table table-striped ">
					<colgroup>
						<col style={{'width': 'auto'}}/>
						<col style={{'width': 'auto'}}/>		
						<col style={{'width': 'auto'}}/>
						<col style={{'width': 'auto'}}/>
					</colgroup>
					<thead>
						<tr>
							<th className="sortedth"><span className="sortedtext">序号</span><span
								className="sorted-arrow "></span></th>
							<th className="sortedth"><span className="sortedtext">名称</span><span
								className="sorted-arrow"></span></th>
							<th className="sortedth"><span className="sortedtext">处理时间</span><span
								className="sorted-arrow "></span></th>
							<th className="sortedth"><span className="sortedtext">处理状态</span><span
								className="sorted-arrow "></span></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Source</td>
							<td>2016-05-16 04:37:27</td>
							<td>
								<span className="label text-warning">SENT</span>
							</td>
						</tr>
					</tbody>
					{this.renderBodyList()}
				</table>
		);
	}
});

var MsgTableBodyItem=React.createClass({
	render:function(){
	<tbody>
		<tr>
			<td>id</td>
			<td>{this.props.data.connectorName}</td>
			<td>{this.props.data.dateCreated}</td>
			<td>
				<span className="label text-warning">{this.props.data.status}</span>
			</td>
		</tr>
	</tbody>
	}
});

//var WithLink = React.createClass({
//	  mixins: [LinkedStateMixin],
//	  getInitialState: function() {
//	    return {message: 'Hello!'};
//	  },
//	  render: function() {
//	    return (
//	    		<div>
//		    		<input type="text" valueLink={this.linkState('message')} />
//		    		<a>{this.state.message}</a>
//	    		</div>
//	    		);
//	  }
//});



var TestView=React.createClass({
//	var paramMap={correlationId:"f8bba958-c234-475c-8df6-97d253a5dfe9",channelId:"e36244f2-b005-42a0-8ecc-dedc3ddc6022"};
	render : function(){
		return (
			<div>
				<Alert />
				<MirthMsgTableBody paramMap={{correlationId:"f8bba958-c234-475c-8df6-97d253a5dfe9",channelId:"e36244f2-b005-42a0-8ecc-dedc3ddc6022"}}/>
			</div>
		);
	}
});



ReactDOM.render(<TestView/>, document.getElementById('test'));


















