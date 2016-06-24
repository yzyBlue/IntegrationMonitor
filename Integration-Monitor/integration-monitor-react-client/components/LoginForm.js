import React from 'react'
import Login from './Login'
var LoginForm = React.createClass({
	handleValidateSubmit: function(user) {
	    var result = this.state.result;
	    $.ajax({
	      url: this.props.url+"?userName="+user.username+"&&passWord="+user.password,
	      dataType: 'json',
	      //t// ype: 'GET',
	      cache: false,
	      success: function(result) {
	        this.setState({result: result});
	        alert("resultCode : "+result.resultCode+" , resultDesc : "+result.resultDesc);
	      }.bind(this),
	      error: function(xhr, status, err) {
	        this.setState({result: result});
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function() {
		    return {result:{resultCode:'',resultDesc:''}};
		  },
	  render: function() {
	    return (
	    <div className="form-wrapper">
			<Login onValidateSubmit={this.handleValidateSubmit}/>
		</div>
	    );
	 }
});
export default LoginForm;