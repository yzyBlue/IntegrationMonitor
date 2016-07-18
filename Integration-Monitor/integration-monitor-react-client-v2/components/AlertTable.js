import React from 'react'
import IntegrationService from './IntegrationService'
var AlertTable = React.createClass({
	getDefaultProps: function() {
		return {
			data:""
		};
	},
	getInitialState: function() {
	    return {memo:""};
	},
	handleMemoChange: function(e) {
	    this.setState({memo: e.target.value});
	},
	handleAlert:function(){
		var alertMemo = this.state.memo.trim();
		var alertStatus=this.props.data.alertStatus;
		if(alertStatus=='TODO'){
			//this.updateAlertStatus(data,'PUT');
		var paramData=this.props.data;
		var alertParam={serialNo:paramData.serialNo,alertCode:paramData.alertCode,alertName:paramData.alertName,
			alertTheme:paramData.alertTheme,msgSequenceId:paramData.msgSequenceId,alertContent:paramData.alertContent,alertLevel:paramData.alertLevel,
			alertStatus:'DOING',createDate:paramData.createDate,notifyPerson:paramData.notifyPerson,alertMemo:alertMemo};
		var alertParam=JSON.stringify(alertParam);
		//console.log(alertParam);
		var url=IntegrationService.AlertService.updateAlert;
		//var url='http://172.16.100.64:8888/integration-monitor/inte-alert/alert';
	    $.ajax({
		      url: url,
		      method:'PUT',
		      data:alertParam,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		      	//console.log(JSON.stringify(data));
		        $.notify({
		  			title: '<strong>警报状态更新</strong><br/>',
		  			message: '结果代码：'+data.resultCode+'<br/>结果描述：'+data.resultDesc
		  		},{
		  			type: 'success',
		  			allow_dismiss: true,
		  			timer: 1000,
		  			delay: 2000,
		  			placement: {
		  				from: "top",
		  				align: "right"
		  			}
		  		});
		  		window.location.reload(true);
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		        $.notify({
		  			title: '<strong>警报状态更新</strong>',
		  			message: err.toString()
		  		},{
		  			type: 'danger',
		  			allow_dismiss: true,
		  			timer: 1000,
		  			delay: 3000,
		  			placement: {
		  				from: "top",
		  				align: "right"
		  			}
		  		});
		      }.bind(this)
		    });
		}
	},
	closeAlert:function(){
		var alertMemo = this.state.memo.trim();
		var alertStatus=this.props.data.alertStatus;
		if(alertStatus=='DOING'||alertStatus=='TODO'){
			//this.updateAlertStatus(data,'POST');
			var paramData=this.props.data;
			var alertParam={serialNo:paramData.serialNo,alertCode:paramData.alertCode,alertName:paramData.alertName,
				alertTheme:paramData.alertTheme,msgSequenceId:paramData.msgSequenceId,alertContent:paramData.alertContent,alertLevel:paramData.alertLevel,
				alertStatus:'DONE',createDate:paramData.createDate,notifyPerson:paramData.notifyPerson,alertMemo:alertMemo};
			var alertParam=JSON.stringify(alertParam);
			//console.log(alertParam);
			var url=IntegrationService.AlertService.updateAlert;
			//var url='/integration-monitor/inte-alert/alert';
		    $.ajax({
			      url: url,
			      method:'PUT',
			      data:alertParam,
			      dataType: 'json',
			      contentType:'application/json; charset=UTF-8',
			      cache: false,
			      success: function(data) {
			      	//console.log(JSON.stringify(data));
			        $.notify({
			  			title: '<strong>警报状态更新</strong><br/>',
			  			message: '结果代码：'+data.resultCode+'<br/>结果描述：'+data.resultDesc
			  		},{
			  			type: 'success',
			  			allow_dismiss: true,
			  			timer: 1000,
			  			delay: 5000,
			  			placement: {
			  				from: "top",
			  				align: "right"
			  			}
			  		});
			  		window.location.reload(true);
			      }.bind(this),
			      error: function(xhr, status, err) {
			        console.error(url, status, err.toString());
			        $.notify({
			  			title: '<strong>警报状态更新</strong>',
			  			message: err.toString()
			  		},{
			  			type: 'danger',
			  			allow_dismiss: true,
			  			timer: 1000,
			  			delay: 5000,
			  			placement: {
			  				from: "top",
			  				align: "right"
			  			}
			  		});
			    }.bind(this)
			});
		}
	},
	sendEmailNotify:function(){
		var alertStatus=this.props.data.alertStatus;
	  if(alertStatus!='DONE'){
		var email={
			sendAddress:"Yuan.Ziyang@vico-lab.com",
			receiveAddress:"Yuan.Ziyang@vico-lab.com",
			copyTo:"Yuan.Ziyang@vico-lab.com",
			subject:this.props.data.alertTheme,
			content:this.props.data.alertContent,
			index:this.props.data.msgSequenceId
		}
		var param=JSON.stringify(email);
		var url=IntegrationService.MailService.notifyPersonEmail;
		//var url='/integration-monitor/notify/mail/';
		    $.ajax({
			      url: url,
			      method:'POST',
			      data:param,
			      dataType: 'json',
			      contentType:'application/json; charset=UTF-8',
			      cache: false,
			      success: function(data) {
			      	//console.log(JSON.stringify(data));
			        $.notify({
			  			title: '<strong>发送邮件通知</strong><br/>',
			  			message: '结果代码：'+data.resultCode+'<br/>结果描述：'+data.resultDesc
			  		},{
			  			type: 'success',
			  			allow_dismiss: true,
			  			timer: 1000,
			  			delay: 2000,
			  			placement: {
			  				from: "top",
			  				align: "right"
			  			}
			  		});
			      }.bind(this),
			      error: function(xhr, status, err) {
			        console.error(url, status, err.toString());
			        $.notify({
			  			title: '<strong>发送邮件通知</strong>',
			  			message: err.toString()
			  		},{
			  			type: 'danger',
			  			allow_dismiss: true,
			  			timer: 1000,
			  			delay: 2000,
			  			placement: {
			  				from: "top",
			  				align: "right"
			  			}
			  		});
			    }.bind(this)
			});
		}
	},
  	render:function(){
  		var handleClassName= '';
  		var closeClassName= '';
  		if(this.props.data.alertStatus=='DOING'){
			handleClassName='disabled';
  		}else if(this.props.data.alertStatus=='DONE'){
  			handleClassName='disabled';
  			closeClassName='disabled';
  		}
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
							</colgroup>
							<thead>
								<tr>
									<th className="sortedth"><span className="sortedtext">编号</span><span
										className="sorted-arrow desc "></span></th>
									<th className="sortedth"><span className="sortedtext">警报内容</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">处理状态</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">通知人员</span><span
										className="sorted-arrow "></span></th>
									<th className="sortedth"><span className="sortedtext">备注说明</span><span
										className="sorted-arrow "></span></th>
								</tr>
							</thead>
							<tbody>
								<tr style={{backgroundColor: 'white'}}> 
									<td>{this.props.data.serialNo}</td>
									<td>{this.props.data.alertContent}</td>
									<td>
										<span className="label text-warning">{this.props.data.alertStatus}</span>
									</td>
									<td>
										<ul className="pagination" style={{margin: '0px 0px',display:'inline-block'}}>
											<li className='disabled'>
												<a href="javascript:void(0)">{this.props.data.notifyPerson}</a>
											</li>
										</ul>
									</td>
									<td>{this.props.data.alertMemo}</td>
								</tr>
							</tbody>
						</table>

						<div className="form-group-memo clearfix">
							<p>操作备注</p>
							<input name="memo" type="text" className="form-control-memo" value={this.state.memo} autoFocus="true"
										onChange={this.handleMemoChange} placeholder={this.props.data.alertMemo}/>
							<ul className="pagination pull-right" style={{margin: '0px 0px',display:'inline-block'}}>
								<li ref="handleAlert" className={handleClassName} onClick={this.handleAlert} title="处理警告"><a href="javascript:void(0)">处理</a></li>
								<li ref="closeAlert" className={closeClassName} onClick={this.closeAlert} title="关闭警告"><a href="javascript:void(0)">关闭</a></li>
							</ul>
						</div>
					</div>
				</div>

	   );
  }
});
export default AlertTable