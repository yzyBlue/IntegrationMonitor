import React from 'react'
import MyModal from './MyModal'
import { Button,Modal } from 'react-bootstrap';
var TableBody=React.createClass({
	getInitialState() {
    	return { showModal: false };
  	},
  	close() {
    	this.setState({ showModal: false });
  	},
  	open() {
    	this.setState({ showModal: true });
  	},
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
		    	  this.setState({ showModal: false });
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
		        this.setState({ showModal: true });
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
	formatXml: function(xml) {
		//console.log(xml);
	        var formatted = '';
	        var reg = /(>)(<)(\/*)/g;
	        xml = xml.replace(reg, '$1\r\n$2$3');
	        var pad = 0;
	        jQuery.each(xml.split('\r\n'), function(index, node) {
	            var indent = 0;
	            if (node.match(/.+<\/\w[^>]*>$/)) {
	                indent = 0;
	            } else if (node.match(/^<\/\w/)) {
	                if (pad != 0) {
	                    pad -= 1;
	                }
	            } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
	                indent = 1;
	            } else {
	                indent = 0;
	            }

	            var padding = '';
	            for (var i = 0; i < pad; i++) {
	                padding += '  ';
	            }

	            formatted += padding + node + '\r\n';
	            pad += indent;
	        });
	        formatted = formatted.replace(/\n$/, '');
	        //console.log(formatted);
	        return formatted;
	 },
	render:function(){
		var modalId="#timeline"+this.props.message.sequenceId;
		var tableModal="#table"+this.props.message.sequenceId;
		var transCode=this.props.message.transCode;
		var id=parseInt(this.props.id);
		var trStyle={backgroundColor: 'white'};
		if(id%2 ==0){
			trStyle={backgroundColor: '#f9f9f9'};
		}
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
		var status=this.props.message.handleResultStatus;
		var statusColor="label text-warning";
		if(status=='SUCCESS'){
			statusColor='label text-success';
		}else if(status=='FILTERED'){
			statusColor='label text-warning';
		}else if(status=='ERROR'){
			statusColor='label text-danger';
		}
		// alert("tbody: "+JSON.stringify(this.props.message));

		//var modalDisplay={display:this.state.showModal?'block':'none'};
		return (
			<tbody >
				<tr style={trStyle}>
					<td><i className="iconfont state-downtime"></i></td>
					<td>{this.props.message.sequenceId}</td>
					<td>{this.props.message.msgTypeDesc}</td>
					<td>{this.props.message.msgSubType}</td>
					<td>{transName}</td>
					<td>{this.props.message.eventDateTime}</td>
					<td>{this.props.message.messageIndex}</td>
					<td>{this.props.message.patientId}</td>
					<td>{this.props.message.visitId}</td>
					<td>
						<span className={statusColor}>{this.props.message.handleResultStatus}</span>
					</td>
					<td>
						<a className="btn-green" data-toggle="modal" data-target={tableModal}><i className="fa fa-cog" aria-hidden="true"></i>通道处理</a>
						<MyModal message={this.props.message} title="通道处理过程详情" modalKey={this.props.id} modal="table"/>
					</td>
					<td>
						<a className="btn-red" data-toggle="modal" data-target={modalId}><i className="fa fa-line-chart" aria-hidden="true"></i>查看</a>
						<MyModal message={this.props.message} title="事务流程状态" modalKey={this.props.id} modal="timeline"/>
					</td>
					<td>
						<li onClick={this.open}>
							<a className="btn-info btn-back" href="javascript:void(0)"><i className="fa fa-recycle" aria-hidden="true"></i>重试</a>
						</li>
						<Modal show={this.state.showModal} onHide={this.close}>
          					<Modal.Header closeButton>
            					<Modal.Title>消息重试源数据</Modal.Title>
          					</Modal.Header>
          					<Modal.Body>
          						<div className="clear">
			                        <pre>
			                        	{this.formatXml(this.props.message.rawData)}
			                        </pre>
	                        	</div>
							</Modal.Body>
					        <Modal.Footer>
					            <a className="btn btn-blue btn-sm" onClick={this.close}>取消</a>
						        <a className="btn btn-red btn-sm" onClick={this.reProcessMsg}>确认</a>
					        </Modal.Footer>
        				</Modal>
					</td>
				</tr>
			</tbody>	
		);
	}
});
export default TableBody;
