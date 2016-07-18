import React from 'react';
import IntegrationService from './IntegrationService'
var HeaderNavbar = React.createClass({
	getInitialState: function () {
		return {
			visible:false
        };
    },
    onSelect:function(){
    	this.setState({visible: !this.state.visible});
    },
    componentDidMount: function() {
    	//var dropdown = this.refs.dropdown.getDOMNode();//拿到了原生DOM 
    },
  render:function(){
  	var displayValue = this.state.visible ? 'block' : 'none';
    var username=document.getElementById('username').value;
    //var username="admin";
    var rootUrl=IntegrationService.rootUrl;
    var logout=rootUrl+"logout";
    return (
	<ul className="navbar-right">
          <li className="hidden-xs">
            <a className="">
            	<i className="fa fa-expand fa-fw text"></i>
            	<i className="fa fa-compress fa-fw text-active"></i>
            </a>
          </li>
          <li className="dropdown" onClick={this.onSelect}>
            <a href="#" className="dropdown-toggle clear" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">
              <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="/integration-monitor/images/a0.jpg" alt="..."/>
                <i className="on md b-white bottom"></i>
              </span>
              <span className="hidden-sm hidden-md">{username}</span> 
              <b className="caret"></b>
            </a>
            <ul className="dropdown-menu-header animated fadeInRight" style={{display: displayValue}}>
              <li>
                <a href="">
                  <span className="badge bg-danger pull-right">30%</span>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">
                  <span className="label bg-info pull-right">new</span>
                  Help
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href={logout}>Logout</a>
              </li>
            </ul>
          </li>
        </ul>

    );
  }
});
export default HeaderNavbar