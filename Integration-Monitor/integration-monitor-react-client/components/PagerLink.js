import React from 'react'
var PagerLink = React.createClass({
	clickEvent:function(){
		if(this.props.className.indexOf('disabled')<0 && this.props.className.indexOf('active')<0){
			this.props.callBack(this.props.index);
		}
	},
	render: function() {
		return (
			<li className={this.props.className} onClick={this.clickEvent}><a href="javascript:void(0)">{this.props.text}</a></li>
		);
	}
});
export default PagerLink;