/**
 * 
 */
var Header = React.createClass({
  render: function() {
    return (
      <div className="logo">
      	<a className="iconfont icon-brand" href="/integration-monitor-react/"	title="Inte-Monitor"> 
		</a>
      </div>
    );
  } 
});
ReactDOM.render(<Header/>, document.body);