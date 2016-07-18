import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonToolbar, Button,OverlayTrigger,Popover } from 'react-bootstrap';
var MsgPopover = React.createClass({
	getInitialState: function() {
		return {
			show: false
		};
	},
	getDefaultProps: function() {
		return {
			data:{response:"",status:""}
		};
	},
	componentDidMount() {

	},
  render:function(){
    return (
    <ButtonToolbar>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover id={this.props.id} title="详情"><div className="clear">{this.props.data.response}</div></Popover>}>
      		<Button className={this.props.btnClass}>{this.props.data.status}</Button>
    	</OverlayTrigger>
    </ButtonToolbar>
      );
  }
});
export default MsgPopover