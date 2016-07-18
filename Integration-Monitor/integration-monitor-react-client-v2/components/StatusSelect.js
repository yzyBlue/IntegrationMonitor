import React from 'react'
var StatusSelect=React.createClass({
	getInitialState: function() {
	    return {option:""};
	},
	handleChange:function(event){
		this.setState({option:event.target.option});
		this.props.selectChange({status:event.target.value});
	},
	render:function(){
		return (
			<select className="form-control" value={this.state.option} onChange={this.handleChange}>
				<option value="">所有</option>
				<option value="SUCCESS">SUCCESS</option>	
				<option value="FILTERED">FILTERED</option>	
				<option value="ERROR">ERROR</option>
			</select>
		);
	}
});
export default StatusSelect;