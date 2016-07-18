import React from 'react';
import AlertStatusSelect from './AlertStatusSelect';
import AlertLevelSelect from './AlertLevelSelect';
import MultiSelect from './MultiSelect';
var AlertSelectOption = React.createClass({
	getInitialState: function() {
	    return {alertName: '', alertTheme: '',alertLevel:'',alertStatus:'',startDate:'',endDate:''};
	},
	handleStartDateChange: function(e) {
	    this.setState({startDate: e.target.value});
	},
	handleEndDateChange: function(e) {
	    this.setState({endDate: e.target.value});
	},
	selectTransChange: function(option) {
	    this.setState({alertName:option.transCode});
	},
	selectStatusChange: function(status) {
	    this.setState(status);
	},
	selectLevelChange: function(level) {
	    this.setState(level);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var alertName = this.state.alertName.trim();
		var startDate = this.state.startDate.trim();
		var endDate = this.state.endDate.trim();
		var alertStatus=this.state.alertStatus.trim();
		var alertLevel=this.state.alertLevel.trim();
		this.props.onAlertQuery({"alertName": alertName,"startDate": startDate, "endDate": endDate,"alertStatus":alertStatus,"alertLevel":alertLevel});
		// this.setState({patientId: '', visitId: '', messageIndex: ''});
	},
	callback:function(){
		this.props.refreshData();
	},
  render:function(){
    return (
    	<div className="widget-tools-msg">
    		<ul>
					<li style={{'marginRight': '20px'}}><label></label></li>
					<li><label><span>警报类型:</span></label></li>
					<li><MultiSelect selectChange={this.selectTransChange}/></li>
					<li><label><span>处理状态:</span></label></li>
					<li><AlertStatusSelect selectChange={this.selectStatusChange}/></li>
					<li><label><span>警报级别:</span></label></li>
					<li><AlertLevelSelect selectChange={this.selectLevelChange}/></li>
			</ul>
			<ul>
					<li style={{'marginRight': '20px'}}><label></label></li>
					<li><label><span>开始时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.startDate} name="startDate"
						onChange={this.handleStartDateChange} placeholder="2016-04-01 12:25:56"/></li>
					<li><label><span>终止时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.endDate} name="endDate"
						onChange={this.handleEndDateChange} placeholder="2016-04-11 12:25:56"/></li>
					<button className="btn-blue btn-sm" onClick={this.handleSubmit} type="button">
						<i className="fa fa-search" aria-hidden="true" title="查询"></i>查&nbsp; &nbsp; 询
					</button>
					<button className="btn-blue btn-sm" style={{marginLeft:'10px'}} onClick={this.callback} type="button">
						<i className="fa fa-refresh" aria-hidden="true" title="刷新"></i>刷新
					</button>
			</ul>
		</div>
   )
  }
});
export default AlertSelectOption