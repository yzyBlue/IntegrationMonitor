import React from 'react'
import {Button,Modal } from 'react-bootstrap';
var MsgTableBodyItem=React.createClass({
	getInitialState: function() {
		return {
			display:'none',show: false 
		};
	},
	showDetail:function(){
		var error=this.props.data.status=='ERROR'?this.props.data.errors:'成功';
		var display= this.state.display=='none'?'table-row':'none';
		this.setState({display:display});
	},
	render:function(){
		let close = () => this.setState({ show: false});
		// console.log("MsgTableBodyItem");
		var connectorName=this.props.data.connectorName;
		var response=this.props.data.responseMap[connectorName];
		var response=(response==null||response=='')?'处理成功':response;
		var response=this.props.data.status=='ERROR'?this.props.data.errors:response;
		var className="";
		var statusDesc="";
		if(this.props.data.status=='ERROR'){
			className="danger";
			statusDesc="异常";
		}else if (this.props.data.status=='FILTERED'){
			className="warning";
			statusDesc="过滤";
		}else if (this.props.data.status=='SENT'){
			className="success";
			statusDesc="成功";
		}else if (this.props.data.status=='TRANSFORMED'){
			className="info";
			statusDesc="转换";
		}
		var modalSize="small";
		if((typeof response!='undefined' )&&response!=null&&response.length>50){
			modalSize='large';
		}
		return (
			<tbody>
				<tr className={className}>
					<td>{this.props.id}</td>
					<td>{this.props.data.connectorName}</td>
					<td>{this.props.data.dateCreated}</td>
					<td>{this.props.data.encodedDataProtocol}</td>
					<td>
						<button type="button" className="btn btn-white text-danger" data-toggle="tooltip" data-placement="right" title={response} onClick={() => this.setState({ show: true})}>
							{statusDesc}
						</button>
						<Modal bsSize={modalSize} container={this} show={this.state.show} onHide={close} aria-labelledby="contained-modal-title">
          					<Modal.Header closeButton>
            					<Modal.Title id="contained-modal-title">处理详情</Modal.Title>
          					</Modal.Header>
          					<Modal.Body>
            					<pre style={{textAlign:'left'}}>{response}</pre>
          					</Modal.Body>
          					<Modal.Footer>
            					<Button onClick={close}>Close</Button>
          					</Modal.Footer>
        				</Modal>
					</td>
				</tr>
			</tbody>
		);
	}
});
export default MsgTableBodyItem;