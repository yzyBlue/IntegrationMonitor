import React from 'react'
import MyTimeLine from './MyTimeLine'
import MirthMsgTableBody from './MirthMsgTableBody'
var Modal=React.createClass({
	getInitialState: function() {
	    return {data:[]};
	},
	renderModalBody:function(){
		var modal=this.props.modal;
		var paramMap={correlationId:this.props.message.sourceMsgUid,channelId:this.props.message.channelCode};
		if(modal=='timeline'){
			return (<MyTimeLine message={this.props.message}/>);
		}else if(modal=='table'){
			return (<MirthMsgTableBody paramMap={paramMap} eventType={this.props.message.msgTypeDesc}/>);
		}
	},
	render:function(){
		var modalId=this.props.modal+this.props.message.sequenceId;
		// alert("modal: "+JSON.stringify(this.props.message));
		var myModalLabel=this.props.modal+"Label"+this.props.modalKey;
		return (
			<div className="modal fade" id={modalId}  tabIndex="-1" role="dialog"
					aria-labelledby={myModalLabel} aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal"aria-hidden="true">&times;</button>
								<h4 className="modal-title" id={myModalLabel}>{this.props.title}</h4>
							</div>
							<div className="modal-body">
								{this.renderModalBody()}
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
export default Modal;