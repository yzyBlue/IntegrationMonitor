
import React from 'react'
import MultiSelect from './MultiSelect'
import StatusSelect from './StatusSelect'
var InputTextList = React.createClass({
	getInitialState: function() {
	    return {patientId: '', visitId: '',messageIndex:'',startDate:'',endDate:'',transCode:'',count:100,status:''};
	},
	handlePatientIdChange: function(e) {
	    this.setState({patientId: e.target.value});
	},
	handleVisitIdChange: function(e) {
	    this.setState({visitId: e.target.value});
	},
	handleMessageIndexChange: function(e) {
	    this.setState({messageIndex: e.target.value});
	},
	handleStartDateChange: function(e) {
	    this.setState({startDate: e.target.value});
	},
	handleEndDateChange: function(e) {
	    this.setState({endDate: e.target.value});
	},
	selectTransChange: function(option) {
	    this.setState(option);
	},
	selectStatusChange: function(status) {
	    this.setState(status);
	},
	handleMessageCountChange: function(e) {
		var count=1;
		if(!isNaN(parseInt(e.target.value))&&parseInt(e.target.value)>0){
			count=Math.min(parseInt(e.target.value),10000);
		}
	    this.setState({count: count});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var patientId = this.state.patientId.trim();
		var visitId = this.state.visitId.trim();
		var messageIndex = this.state.messageIndex.trim();
		var startDate = this.state.startDate.trim();
		var endDate = this.state.endDate.trim();
		var transCode=this.state.transCode.trim();
		var handleResultStatus=this.state.status.trim();
		var count=this.state.count;
		this.props.onMsgQuerySubmit({"patientId": patientId, "visitId": visitId,"messageIndex": messageIndex,
			"startDate": startDate, "endDate": endDate,"transCode":transCode,"handleResultStatus":handleResultStatus,"count":count});
		// this.setState({patientId: '', visitId: '', messageIndex: ''});
	},
	render: function(){
		return(
			<div className="widget-tools-msg">
			
				<ul>
					<li style={{'marginRight': '20px'}}><label></label></li>
					<li><label><span>病 人 号 :</span></label></li>
					<li><input className="input-text" name="patientId" type="text" value={this.state.patientId} autoFocus="true"
						onChange={this.handlePatientIdChange} placeholder="M0000001"/></li>
					<li><label><span>就 诊 号 :</span></label></li>
					<li><input className="input-text" name="visitId" type="text" value={this.state.visitId}
						onChange={this.handleVisitIdChange} placeholder="251634"/></li>
					<li><label><span>索引号:</span></label></li>
					<li><input className="input-text" name="messageIndex" type="text" value={this.state.messageIndex}
						onChange={this.handleMessageIndexChange} placeholder="251634"/></li>
					<li><label><span>查询数目:</span></label></li>
					<li><input className="input-text" name="count" type="number" min="1" max="10000" value={this.state.count} style={{width:'100px'}}
						onChange={this.handleMessageCountChange}/></li>
				</ul>
				<ul>
					<li style={{'marginRight': '20px'}}><label></label></li>
					<li><label><span>开始时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.startDate} name="startDate"
						onChange={this.handleStartDateChange} placeholder="2016-04-01 12:25:56"/></li>
					<li><label><span>终止时间:</span></label></li>
					<li><input className="input-text" type="text" value={this.state.endDate} name="endDate"
						onChange={this.handleEndDateChange} placeholder="2016-04-11 12:25:56"/></li>
					<li><label><span>业务类型:</span></label></li>
					<li><MultiSelect selectChange={this.selectTransChange}/></li>
					<li><label><span>处理状态:</span></label></li>
					<li><StatusSelect selectChange={this.selectStatusChange}/></li>
					<button className="btn-blue btn-sm" onClick={this.handleSubmit} type="button">
						<i className="fa fa-search" aria-hidden="true" title="查询"></i>查&nbsp; &nbsp; 询
					</button>
					
				</ul>
			</div>
		);
	}
});

export default InputTextList;
