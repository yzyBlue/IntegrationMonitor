/**
 * 
 */
var divStyle = {
		position: 'fixed',
		bottom: '0px',
		width: '99%'
};
var Footer = React.createClass({
  render: function() {
    return (
    	<div className="footer" style={divStyle}>
    		<ul> 
    			<li><a href="#">官方网站</a></li>
    			<li className="divider"></li>
    			<li><a href="#">帮助中心</a></li>
    			<li className="divider"></li>
    			<li>
    				<p>Copyright &copy; 2016 浙江大学</p>
    			</li>
    		</ul>
    	</div>
    );
  }
});

ReactDOM.render(<Footer/>, document.body);