
import React from 'react'

var Footer = React.createClass({
	getInitialState:function(){
		return {
			website:"官方网站",
			help:"帮助中心",
			copyright:"Copyright © 2016 浙江大学"
		};
	},
  render: function() {
    return (
    	<div className="footer" style={{position: 'fixed',bottom: '0px',width: '99%'}}>
    		<ul>
    			<li><a href="#">{this.state.website}</a></li>
    			<li className="divider"></li>
    			<li><a href="#">{this.state.help}</a></li>
    			<li className="divider"></li>
    			<li>
    				<p>{this.state.copyright}</p>
    			</li>
    		</ul>
    	</div>
    );
  }
});
export default Footer;
