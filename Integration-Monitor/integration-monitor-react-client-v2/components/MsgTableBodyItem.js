import React from 'react'
import {Button,Modal } from 'react-bootstrap';
var MsgTableBodyItem=React.createClass({
	getInitialState: function() {
		return {
			display:'none',show: false 
		};
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
	showDetail:function(){
		var error=this.props.data.status=='ERROR'?this.props.data.errors:'成功';
		var display= this.state.display=='none'?'table-row':'none';
		this.setState({display:display});
	},
	getRespMapMessage(resp){
		if(resp!=null&&typeof resp!='undefined'){
			var array=resp.split(":",2);
			console.log(array);
			if(array.length==2&&array[1].indexOf('xml')){
				return this.formatXml(array[1]);
			}else if(array.length==2&&!array[1].indexOf('xml')){
				return array[1];
			}else{
				return array[0];
			}
		}else{
			return "Loading";
		}
	},
	render:function(){
		let close = () => this.setState({ show: false});
		// console.log("MsgTableBodyItem");
		var connectorName=this.props.data.connectorName;
		var response=this.props.data.responseMap[connectorName];
		var response=(response==null||response=='')?'处理成功':response;
		var response=this.props.data.status=='ERROR'?this.props.data.errors:response;
		var className="";
		var statusDesc=this.props.data.status;
		var preStyle={textAlign:'left',paddingLeft:'10px',overflow:'auto',whiteSpace:'pre-wap'};
		if(this.props.data.status=='ERROR'){
			className="danger";
			//statusDesc="异常";
		}else if (this.props.data.status=='FILTERED'){
			className="warning";
			// statusDesc="过滤";
		}else if (this.props.data.status=='SENT'){
			className="success";
			// statusDesc="成功";
		}else if (this.props.data.status=='TRANSFORMED'){
			className="info";
			// statusDesc="转换";
		}else if (this.props.data.status=='QUEUED'){
			className="success";
			// statusDesc="路由";
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
          						<div className='highlight'>
            						<pre id="pre" style={{textAlign:'left',paddingLeft:'10px',overflow:'auto',whiteSpace:'pre-wrap'}}>{this.formatXml(response)}</pre>
            					</div>
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