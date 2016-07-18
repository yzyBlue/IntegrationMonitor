import React from 'react'
import Modal from './Modal'
var TableBody=React.createClass({
	reProcessMsg:function(e){
		e.preventDefault();
		var message=this.props.message;
		var paramMap={channelId:message.channelCode,rawData:message.rawData};
		var paramMap=JSON.stringify(paramMap); 
		// alert(paramMap);
		 $.ajax({
		      url: this.props.url,
		      method:'POST',
		      data:paramMap,
		      dataType: 'json',
		      contentType:'application/json; charset=UTF-8',
		      cache: false,
		      success: function(data) {
		    	  // alert(JSON.stringify(data));
		    	  $.notify({
		  			title: '<strong>消息重试结果</strong><br/>',
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
		  			title: '<strong>消息重试结果!</strong>',
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
	},
	render:function(){
		var modalId="#timeline"+this.props.message.sequenceId;
		var tableModal="#table"+this.props.message.sequenceId;
		var transCode=this.props.message.transCode;
		var transName="";
		if(transCode=="PAM"){
			transName="病人管理";
		}else if(transCode=="EXAM"){
			transName="检查";
		}else if(transCode=="LABTEST"){
			transName="检验";
		}else if(transCode=="ORDER"){
			transName="医嘱";
		}else if(transCode=="SURGERY"){
			transName="手术";
		}else if(transCode=="DRUG"){
			transName="摆药";
		}else if(transCode=="FARE"){
			transName="费用";
		}else if(transCode=="PRESC"){
			transName="处方";
		}
		// alert("tbody: "+JSON.stringify(this.props.message));
		return (
			<tbody >
				<tr>
					<td><i className="iconfont  state-downtime"></i></td>
					<td>{this.props.message.sequenceId}</td>
					<td>{this.props.message.msgTypeDesc}</td>
					<td>{this.props.message.msgSubType}</td>
					<td>{transName}</td>
					<td>{this.props.message.eventDateTime}</td>
					<td>{this.props.message.messageIndex}</td>
					<td>{this.props.message.patientId}</td>
					<td>{this.props.message.visitId}</td>
					<td>
						<span className="label text-warning">{this.props.message.handleResultStatus}</span>
					</td>
					<td>
						<a className="btn-green" data-toggle="modal" data-target={tableModal}>查看处理过程</a>
						<Modal message={this.props.message} title="通道处理过程详情" modalKey={this.props.id} modal="table"/>
					</td>
					<td>
						<a className="btn-green" data-toggle="modal" data-target={modalId}>查看状态</a>
						<Modal message={this.props.message} title="事务流程状态" modalKey={this.props.id} modal="timeline"/>
					</td>
					<td>
						<li onClick={this.reProcessMsg}><a className="btn-info btn-back" href="javascript:void(0)">重试</a></li>
					</td>
				</tr>
			</tbody>	
		);
	}
});
export default TableBody;
