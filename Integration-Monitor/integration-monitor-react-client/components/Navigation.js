import React from 'react'
import { Link } from 'react-router'
var Navigation = React.createClass({
	render: function() {
    return (
    	<div className="nav">
			<div className="services">
				<ul>
					<li>
				        <Link to="/statistics" activeClassName="active">
					        <i className="iconfont icon-ai" data-toggle="tooltip"  title="事务概览" data-placement="bottom"/>
				        </Link>
		          	</li>
		          	<li>
		          		<Link to="/messagequery" activeClassName="active">
		          			<i className="iconfont icon-bi" data-toggle="tooltip"  title="消息查询" data-placement="bottom"/>
		          		</Link>
		          	</li>
		          	<li>
		          		<Link to="/alarm" activeClassName="active">
		          			<i className="iconfont" data-toggle="tooltip"  title="警报提醒" data-placement="bottom">&#xe66f;</i>
		          		</Link>
		          	</li>
				</ul>
			</div>
		</div>
    );
  }
});
export default Navigation;