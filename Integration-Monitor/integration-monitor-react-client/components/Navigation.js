import React from 'react'
import { Link } from 'react-router'
import { Tooltip,OverlayTrigger } from 'react-bootstrap';

var Navigation = React.createClass({
	getTooltip:function(tooltip){
		return (<Tooltip id="tooltip">{tooltip}</Tooltip>);
	},
	render: function() {
    return (
    	<div className="nav">
			<div className="services">
				<ul>
					<li>
				        <Link to="/statistics" activeClassName="active">
					        <OverlayTrigger placement="bottom" overlay={this.getTooltip('事务概览')}>
						        <i className="iconfont icon-ai"/>
						    </OverlayTrigger>
				        </Link>
		          	</li>
		          	<li>
		          		<Link to="/messagequery" activeClassName="active">
		          			<OverlayTrigger placement="bottom" overlay={this.getTooltip('消息查询')}>
						        <i className="iconfont icon-bi"/>
						    </OverlayTrigger>
		          		</Link>
		          	</li>
		          	<li>
		          		<Link to="/alarm" activeClassName="active">
		          			<OverlayTrigger placement="bottom" overlay={this.getTooltip('警报提醒')}>
						        <i className="iconfont">&#xe66f;</i>
						    </OverlayTrigger>
		          			
		          		</Link>
		          	</li>
				</ul>
			</div>
		</div>
    );
  }
});
export default Navigation;