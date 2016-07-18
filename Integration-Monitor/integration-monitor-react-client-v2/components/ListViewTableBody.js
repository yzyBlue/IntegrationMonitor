import React from 'react';
import { Modal } from 'react-bootstrap';
var ListViewTableBody = React.createClass({
	getInitialState() {
    	return { showModal: false };
  	},
	close() {
    	this.setState({ showModal: false });
  	},
  	open() {
    	this.setState({ showModal: true });
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
  	var id=parseInt(this.props.id);
	var trStyle={backgroundColor: 'white'};
	if(id%2 ==0){
		trStyle={backgroundColor: '#f9f9f9'};
	}
  	var handleClassName= '';
  	var closeClassName= '';
  	if(this.props.data.alertStatus=='DOING'){
		handleClassName='disabled';
  	}else if(this.props.data.alertStatus=='DONE'){
  		handleClassName='disabled';
  		closeClassName='disabled';
  	}
    return (
		<tbody>
			<tr style={trStyle}> 
				<td>{this.props.data.serialNo}</td>
				<td>{this.props.data.alertName}</td>
				<td>{this.props.data.alertTheme}</td>
				<td>{this.props.data.msgSequenceId}</td>
				<td>
					<span className="label text-warning">{this.props.data.alertStatus}</span>
				</td>
				<td>
					<span className="label text-warning">{this.props.data.alertLevel}</span>
				</td>
				<td>{this.props.data.createDate}</td>
				<td>
					<ul className="pagination" style={{margin: '0px 0px',display:'inline-block'}}>
						<li className='disabled'>
							<a href="javascript:void(0)"><i className="fa fa-user" aria-hidden="true"></i>{this.props.data.notifyPerson}</a>
						</li>
					</ul>
				</td>
				<td>{this.props.data.alertMemo}</td>
				<td>
					<ul className="pagination" style={{margin: '0px 0px',display:'inline-block'}}>
						<li onClick={this.open} title="查看详情">
							<a href="javascript:void(0)"><i className="fa fa-wpforms" aria-hidden="true"></i>查看</a>
						</li>
						<Modal show={this.state.showModal} onHide={this.close}>
          					<Modal.Header closeButton>
            					<Modal.Title>警报详细内容</Modal.Title>
          					</Modal.Header>
          					<Modal.Body>
          						<div className="clear">
			                        <pre>
			                        	{this.formatXml(this.props.data.alertContent)}
			                        </pre>
	                        	</div>
							</Modal.Body>
					        <Modal.Footer>
						        <a className="btn btn-red btn-sm" onClick={this.close}>OK</a>
					        </Modal.Footer>
        				</Modal>
					</ul>
				</td>
			</tr>
		</tbody>
    )
  }
});
export default ListViewTableBody