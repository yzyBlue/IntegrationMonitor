import React from 'react'
import { Button,Collapse,Well } from 'react-bootstrap';
var TimeLineItem=React.createClass({
	getInitialState: function() {
		return {
			open: false
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
	render:function(){
		// var datetime=this.props.data.eventDateTime;
		// datetime=datetime.replace(' ','\n');
		// alert(datetime);
		var tlWrapClass="tl-wrap b-success";
		var arrowClass="arrow arrow-success left pull-up";
		var tlContentClass="tl-content panel bg-success padder";
		if(this.props.data.handleResultStatus=='ERROR'){
			tlWrapClass="tl-wrap b-danger";
			tlContentClass="tl-content panel bg-danger padder";
			arrowClass="arrow arrow-danger left pull-up";
		}else if(this.props.data.sequenceId==this.props.message.sequenceId){
			tlWrapClass="tl-wrap b-primary";
			tlContentClass="tl-content panel bg-primary padder";
			arrowClass="arrow arrow-primary left pull-up";
		}
		var status=this.props.data.handleResultStatus;
		var statusColor="label text-warning";
		if(status=='SUCCESS'){
			statusColor='label text-success';
		}else if(status=='FILTERED'){
			statusColor='label text-warning';
		}else if(status=='ERROR'){
			statusColor='label text-danger';
		}
		var paramMap={correlationId:this.props.data.sourceMsgUid,channelId:this.props.data.channelCode};
		return (
			<li className="tl-item">
	            <div className={tlWrapClass}>
	                <span className="tl-date">{this.props.data.eventDateTime}</span>
	                <div className={tlContentClass}>
	                    <span className={arrowClass}></span>
	                    <div>{this.props.data.msgTypeDesc}</div>
	                    <div className="panel-body pull-in b-t b-light">
	                    	<ul className="pagination" style={{margin: '0px 10px 0px 0px',display:'inline-block'}}>
								<li>
									<a href="javascript:void(0)" className={statusColor}><i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{this.props.data.handleResultStatus}</a>
								</li>
							</ul>
							<ul className="pagination" style={{margin: '0px 0px',display:'inline-block'}}>
								<li onClick={()=> this.setState({ open: !this.state.open })} title="查看详情">
									<a href="javascript:void(0)"><i className="fa fa-eye" aria-hidden="true"></i>源数据</a>
								</li>
							</ul>
	                    	<Collapse in={this.state.open}>
		                        <div className="clear">
			                        <pre>
			                        	<Well>
			                        		{this.formatXml(this.props.data.rawData)}
			                        	</Well>
			                        </pre>
		                        </div>
	                        </Collapse>
	                    </div>
	                </div>
	            </div>
	        </li>
		);
	}
});
export default TimeLineItem;