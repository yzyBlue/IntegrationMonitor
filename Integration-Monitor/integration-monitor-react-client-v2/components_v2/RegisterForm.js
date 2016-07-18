import React from 'react'
import { FormGroup,ControlLabel,FormControl,HelpBlock,Button  } from 'react-bootstrap';
var RegisterForm = React.createClass({
  getInitialState() {
    return {
      username: '',password:'',isLoading: false,result:''
    };
  },

  getValidationState(name) {
    var length = this.state[name].length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(name,e) {
  	var state={};
  	state[name]= e.target.value;
    this.setState(state);
  },
  handleClick() {
    this.setState({isLoading: true});
    var userInfo = {userName:this.state.username,passWord:this.state.password,roleCode:'admin',creatorId:'admin',voidFlag:'0'};
      $.ajax({
        url: '/integration-monitor/registration',
        dataType: 'json',
        ype: 'POST',
        cache: false,
        data:userInfo,
        success: function(result) {
          this.setState({isLoading: false});
          //this.setState({result: result});
          //alert("resultCode : "+result.resultCode+" , resultDesc : "+result.resultDesc);
        }.bind(this),
        error: function(xhr, status, err) {
          //this.setState({result: result});
          this.setState({isLoading: true});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });

    // This probably where you would have an `ajax` call
    //setTimeout(() => {
      // Completed of async action, set loading state back
      //this.setState({isLoading: false});
    //}, 2000);
  },
  render() {
  	let isLoading = this.state.isLoading;
    return (
      <form method="post" action="/registration">
        <FormGroup validationState={this.getValidationState('username')}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
          	id='username'
            type="text"
            value={this.state.username}
            placeholder="Enter text"
            onChange={this.handleChange.bind(this,'username')}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.{this.state.username.length}</HelpBlock>
        </FormGroup>

		<FormGroup
          validationState={this.getValidationState('password')}
        >
		<FormControl
          	id='password'
            type="password"
            value={this.state.password}
            placeholder="Enter text"
            onChange={this.handleChange.bind(this,'password')}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.{this.state.password.length}</HelpBlock>
		</FormGroup>

		<Button bsStyle="primary" disabled={isLoading} onClick={!isLoading ? this.handleClick : null}>
        	{isLoading ? 'Loading...' : 'Loading state'}
      	</Button>

      </form>
    );
  }
});

export default RegisterForm