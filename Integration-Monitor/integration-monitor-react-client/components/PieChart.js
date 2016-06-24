import React from 'react'
import ReactHighcharts  from 'react-highcharts'
const chart = {      
      type: 'pie',     
      options3d: {
         enabled: true,
         alpha: 45,
         beta: 0
      },
   	backgroundColor: 'rgba(0,0,0,0)',
   	reflow:true
   };
const title = {
      text: '集成事务一览',
      style:{ "color": "#ffffff", "fontSize": "20px" }
   }; 
   
   
const tooltip = {
	  backgroundColor: 'rgba(0,0,0,0.5)',
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      style:{ "color": "#ffffff", "fontSize": "10px" }
   };

const plotOptions = {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          events: {
          	click: function(e) {
          	//location.href = e.point.url; //上面是当前页跳转，如果是要跳出新页面，那就用
            //window.open(e.point.url);
                  //这里的url要后面的data里给出
          	}
      	 },
          dataLabels: {
             enabled: true,
             format: '{point.name}',
             color: "#F8F1EE"
          }
      }
   };   
const series= [{
         type: 'pie',
         name: '所占比重',
         data: [
				{
					name:'ADT',
					y:45.0,
					color:'#7CB5EC',
					url:'/integration-monitor/adt'
				},
				{
                	name:'检查',
                	y:45.0,
                	color:'#F8F8F8',
					url:'/integration-monitor/exam'
				},
                {
                    name: '检验',
                    y: 12.8,
                    sliced: true,
                    selected: true,
                    color:'#6FCC5C',
					url:'/integration-monitor/labtest'
                },
                {
                	name:'医嘱',
                	y:8.5,
                	color:'#DD8942',
					url:'/integration-monitor/order'
				},
                {
                	name:'手术',
                	y:6.2,
                	color:'#CDCD00',
					url:'/integration-monitor/sugery'
				},
				{
                	name:'费用',
                	y:3.6,
                	color:'#FFA500',
					url:'/integration-monitor/fare'
				},
				{
                	name:'摆药',
                	y:6.2,
                	color:'#D54064',
					url:'/integration-monitor/drug'
				}
            ]
   }];     
      
const config ={
	chart:chart,
	title : title,
	tooltip : tooltip,
	plotOptions : plotOptions,
	series : series,
};
var PieChart=React.createClass({
	getInitialState:function(){
		return {config:{}};
	},
	componentDidMount() {
		this.setState({config:config});
	},
	render() {
		return(
			<ReactHighcharts config={this.state.config}/>
		);
	}
});
export default PieChart