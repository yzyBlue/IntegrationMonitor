import React from 'react'
import Pager from './Pager'
var MyPagination=React.createClass({
	getInitialState: function() {
		return {
			TotalCount:20,
			PageSize:10,
			PageIndex:0
		};
	},
	getDefaultProps: function() {
		return {
			pageIndex:0
		};
	},
	pageIndexChanged:function(index){
		this.setState({PageIndex:index});
		this.props.onPageIndexChange({pageIndex:index});
	},
	componentWillReceiveProps: function(nextProps) {
		//console.log(nextProps.refresh+","+this.props.refresh);
		if(nextProps.refresh != this.props.refresh){
			this.setState({PageIndex: 0});
			nextProps.onPageIndexChange({pageIndex:0});
		}
	  ;
	},
	componentWillUpdate(nextProps, nextState){

	},
	render:function(){
		var totalCount=this.props.data.length;
		var pagerSetting={  
	            totalCount:totalCount,  
	            pageSize:this.state.PageSize,  
	            pageIndex:this.state.PageIndex,  
	            firstText:"首页" ,  
	            prevText:"上一页",  
	            nextText:"下一页",  
	            lastText:"尾页",  
	            recordTextFormat: "{0}/{1}页 共{2}条记录",  
	            // showLinkNum:2,
	            callBack:this.pageIndexChanged  
	        };  

		return (
			<nav>
			 <Pager {...pagerSetting}/>
			</nav>
		)
	}
});
export default MyPagination;