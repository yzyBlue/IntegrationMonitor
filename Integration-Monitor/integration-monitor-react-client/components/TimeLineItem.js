import React from 'react'

var TimeLineItem=React.createClass({
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
		var tlContentClass="tl-content panel bg-success padder";
		if(this.props.data.handleResultStatus=='ERROR'){
			tlWrapClass="tl-wrap b-danger";
			tlContentClass="tl-content panel bg-danger padder";
		}else if(this.props.data.sequenceId==this.props.message.sequenceId){
			tlWrapClass="tl-wrap b-primary";
			tlContentClass="tl-content panel bg-primary padder";
		}
		var paramMap={correlationId:this.props.data.sourceMsgUid,channelId:this.props.data.channelCode};
		return (
			<li className="tl-item">
	            <div className={tlWrapClass}>
	                <span className="tl-date">{this.props.data.eventDateTime}</span>
	                <div className={tlContentClass}>
	                    <span className="arrow left pull-up"></span>
	                    <div>{this.props.data.msgTypeDesc}</div>
	                    <div className="panel-body pull-in b-t b-light">
	                    	<h2>{this.props.data.handleResultStatus}</h2>
	                        <div className="clear">
		                        <pre>
		                        	{this.formatXml(this.props.data.rawData)}
		                        </pre>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </li>
		);
	}
});
export default TimeLineItem;