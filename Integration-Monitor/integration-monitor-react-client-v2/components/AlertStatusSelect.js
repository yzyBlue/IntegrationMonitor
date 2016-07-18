import React from 'react'
var AlertStatusSelect=React.createClass({
	getInitialState: function() {
	    return {option:""};
	},
	handleChange:function(event){
		this.setState({option:event.target.option});
		this.props.selectChange({alertStatus:event.target.value});
	},
	render:function(){
		return (
			<select className="form-control" value={this.state.option} onChange={this.handleChange}>
				<option value="">所有</option>
				<option value="TODO">待处理</option>	
				<option value="DOING">处理中</option>	
				<option value="DONE">已处理</option>
			</select>
		);
	}
});
export default AlertStatusSelect;