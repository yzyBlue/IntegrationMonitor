import React from 'react'
import MyModal from './MyModal'
import { Button,Modal } from 'react-bootstrap';
import MsgPopover from './MsgPopover'
var AlertMithTableBody = React.createClass({
	getInitialState() {
    	return { showModal: false };
  	},
  	close() {
    	this.setState({ showModal: false });
  	},
  	open() {
    	this.setState({ showModal: true });
  	},
  	formatXml: function(xml) {
  		if(xml==null||typeof xml =='undefined'){
  			return "";
  		}else{
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
  		}
	 },
	 getModal(response){
	 	var modalDisplay={display:this.state.showModal?'block':'none'};
	 	var btnClass=this.props.messageObj.status=='ERROR'?"btn btn-red btn-xs":"btn btn-green btn-xs";
	 	if(response!=null&&typeof response !='undefined'){
	 		if(response.length>100){
	 			return (
	 				<td>
						<li title={response} onClick={this.open}>
    						<a className={btnClass}>{this.props.messageObj.status}</a>
    					</li>
    					<div className="static-modal" style={modalDisplay}>
						    <Modal.Dialog>
						      <Modal.Header>
						        <Modal.Title>通道处理结果描述</Modal.Title>
						      </Modal.Header>

						      <Modal.Body>
						        <div className="clear-ellipsis">
			                        <pre>
			                        	{this.formatXml(response)}
			                        </pre>
	                        	</div>
						      </Modal.Body>

						      <Modal.Footer>
						        <a className="btn btn-blue btn-sm" onClick={this.close}>OK</a>
						      </Modal.Footer>

						    </Modal.Dialog>
  						</div>
					</td>
	 			)
	 		}else{
	 			return (<td><MsgPopover id={""+this.props.id} btnClass={btnClass} data={{id:this.props.id,response:response,status:this.props.messageObj.status}}/></td>)
	 		}
	 	}
	 },
  render:function(){
  	var messageObj=this.props.messageObj;
  	var connectorName=messageObj.connectorName;
	var response=messageObj.status=='ERROR'?messageObj.errors:messageObj.responseMap[connectorName];
	var trStyle={backgroundColor: 'white'};
	var id=isNaN(this.props.id)?0:parseInt(this.props.id);
	if(id%2 ==0){
		trStyle={backgroundColor: '#f9f9f9'};
	}
	
	var modalDisplay={display:this.state.showModal?'block':'none'};
    return (<tbody>
				<tr style={trStyle}>
					<td>{this.props.id}</td>
					<td>{this.props.messageObj.connectorName}</td>
					<td>{this.props.messageObj.dateCreated}</td>
					<td>{this.props.messageObj.encodedDataProtocol}</td>
					{this.getModal(response)}
				</tr>
			</tbody>
	);
  }
});
export default AlertMithTableBody