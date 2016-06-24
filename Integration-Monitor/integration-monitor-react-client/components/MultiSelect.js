import React from 'react'
var MultiSelect=React.createClass({
	getInitialState: function() {
	    return {option:""};
	},
	handleChange:function(event){
		this.setState({option:event.target.option});
		this.props.selectChange({transCode:event.target.value});
	},
	render:function(){
		return (
			<select className="form-control" value={this.state.option} onChange={this.handleChange}>
				<option value="">所有</option>
				<option value="PAM">病人管理</option>	
				<option value="EXAM">检查</option>	
				<option value="LABTEST">检验</option>	
				<option value="ORDER">医嘱</option>	
				<option value="SURGERY">手术</option>	
				<option value="DRUG">摆药</option>	
				<option value="PRESC">处方</option>	
			</select>
		);
	}
});
export default MultiSelect;