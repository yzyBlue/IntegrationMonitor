import React from 'react'
var AlertLevelSelect=React.createClass({
	getInitialState: function() {
	    return {option:""};
	},
	handleChange:function(event){
		this.setState({option:event.target.option});
		this.props.selectChange({alertLevel:event.target.value});
	},
	render:function(){
		return (
			<select className="form-control" value={this.state.option} onChange={this.handleChange}>
				<option value="">所有</option>
				<option value="ERROR">异常</option>	
				<option value="WARN">警告</option>	
			</select>
		);
	}
});
export default AlertLevelSelect;