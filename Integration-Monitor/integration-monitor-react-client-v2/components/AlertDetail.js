import React from 'react'
import AlertTable from './AlertTable'
import AlertDetailTab from './AlertDetailTab'
import IntegrationService from './IntegrationService'
var AlertDetail = React.createClass({
  getDefaultProps: function() {
    //console.log("AlertDetail : getDefaultProps");
    return {
      //data:{sequenceId:0}
    };
  },
  getInitialState:function(){
    //console.log("AlertDetail : getInitialState");
    return {
      messsage:{}
    };
  },
  componentWillReceiveProps: function(nextProps) {
    //console.log("AlertDetail : componentWillReceiveProps");
  },
  componentDidMount: function() {
    //console.log("AlertDetail : componentDidMount");
    //this.loadDataFromServer();
    //setInterval(this.loadDataFromServer(), 1000);
  },
  //shouldComponentUpdate: function(nextProps, nextState) {
    //console.log("AlertDetail : shouldComponentUpdate");
    //return nextProps.data.msgSequenceId !== this.props.data.msgSequenceId;
  //},
  render:function(){
  	//var test=JSON.stringify(this.props.data);
    //console.log(test);
    //console.log("AlertDetail : render");
    return (
    	<div className="col-alert-datail">
        	<div className="whitebg">
    			   <div style={{paddingTop:'10px'}}>
                <AlertTable data={this.props.data}/>
             </div>
             <div className="alert-detail-content">
                <h1>警报关联详情</h1>
                <AlertDetailTab data={this.props.data}/>
             </div>
    		  </div>
    	</div>
    );
  }
});
export default AlertDetail