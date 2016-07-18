import React from 'react'
import Pager from './Pager'
var AlertPagination = React.createClass({
  	getInitialState: function() {
		return {
			TotalCount:20,
			PageSize:6,
			PageIndex:0
		};
	},
	pageIndexChanged:function(index){
		this.setState({PageIndex:index});
		this.props.onPageIndexChange({pageIndex:index});
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
export default AlertPagination