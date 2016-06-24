import React from 'react'
var  SideBar= React.createClass({
  render:function(){
    return (
    	<div className="sidebar">
    		<ul>
    			<li>
    				<Link to="" activeClassName="/hosts" onlyActiveOnIndex=false>
    					<a style={} href="#" className="active">
    						<i className='iconfont icon-side'><i/>平台
    						<i className='iconfont icon-right'><i/>
    					</a>
    				</Link>
    			</li>
    		</ul>
    	</div>
    );
  }
});