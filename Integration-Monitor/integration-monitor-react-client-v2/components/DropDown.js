import React from 'react'
import IntegrationService from './IntegrationService'
// import HeaderModal from './HeaderModal'
var DropDown = React.createClass({
	 getInitialState: function () {
		return {
			visible:false,showModal: false
        };
    },
    onSelect:function(){
    	this.setState({visible: !this.state.visible});
    },
    close:function() {
      this.setState({ showModal: false });
    },
    open:function() {
      this.setState({ showModal: true });
    },
    showUserInfo:function(){

    },
    componentDidMount: function() {
    	//var dropdown = this.refs.dropdown.getDOMNode();//拿到了原生DOM 
    },
    render: function() {
      	var displayValue = this.state.visible ? 'block' : 'none';
      	var username=document.getElementById('username').value;
      	//var username="admin";
      	var rootUrl=IntegrationService.rootUrl;
      	var logout=rootUrl+"logout";
        return (
            <div className="account" onClick={this.onSelect}>
              <ul>
                <li>
                  <a>
                    <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                      <img src="/integration-monitor/images/a0.jpg" alt="..."/>
                      <i className="on md b-white bottom"></i>
                    </span>
                    <span style={{color:'#005192',fontSize: '20px'}}>{username}</span>
                    <b className="caret"></b>
                  </a>
                </li>
              </ul>
              <div className="dropdown-main" ref="dropdown" style={{display: displayValue}} >
                  <ul >
                    <li><a href="#"><i className="iconfont">&#xe601;</i>&nbsp; 个人中心 </a></li>                  
                    <li className="divider"></li>
                    <li><a href={logout}><i className="iconfont">&#xe636;</i>&nbsp;  退出</a></li>
                  </ul>
              </div>
  		      </div>
        );
     }
});
export default DropDown;