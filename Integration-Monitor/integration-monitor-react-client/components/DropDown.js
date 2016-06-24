import React from 'react'
var DropDown = React.createClass({
	getInitialState: function () {
		return {
			visible:false
        };
    },
    onSelect:function(){
    	this.setState({visible: !this.state.visible});
    },
    componentDidMount: function() {
    	var dropdown = this.refs.dropdown.getDOMNode();//拿到了原生DOM 
    },
    render: function() {
      	var displayValue = this.state.visible ? 'block' : 'none';
        return (
        <div className="account" onSelect={this.onSelect}>
			<strong className="account-info"> 
				<i className="iconfont large"></i>
				<span> Admin</span> 
				<i className="iconfont icon-arrowup"></i>
			</strong>
			<div className="dropdown-main" ref="dropdown" style={{display: displayValue}} >
				<ul>
					<li><a href="#"><i className="iconfont"></i>个人中心 </a></li>
					<li><a href="#"><i class="iconfont"></i>控制台</a></li>
					<li><a href="#"><i className="iconfont"></i> 团队信息</a></li>
					<li><a href="#"><i className="iconfont"></i> 退出</a></li>
				</ul>
			</div>
		</div>
        );
     }
});
export default DropDown;