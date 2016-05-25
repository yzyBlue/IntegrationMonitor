var MyButton = React.createClass({
	render: function() {
		return (
			<p>
				<button type="button" className="btn btn-default">（大按钮）Large button</button>
				<button type="button" className="btn btn-primary">（首选项）Primary</button>
				<button type="button" className="btn btn-success">（成功）Success</button>
				<button type="button" className="btn btn-info">（一般信息）Info</button>
				<button type="button" className="btn btn-warning">（警告）Warning</button>
				<button type="button" className="btn btn-link">（链接）Link</button>
			</p>
		);
	}
});
ReactDOM.render(<MyButton />, document.getElementById('example'));