import React from 'react'
var AlertDetail = React.createClass({
  render:function(){
  	var test=JSON.stringify(this.props.data);
    return (
    	<div className="col-alert-datail">
        	<div className="whitebg childdata" style={{minHeight: '540px'}}>
    			<div>{test}</div>
    		</div>
    	</div>
    );
  }
});
export default AlertDetail