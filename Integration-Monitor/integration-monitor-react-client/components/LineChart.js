import React from 'react'
import ReactHighcharts  from 'react-highcharts'
const chart = {
	      type: 'line',
		  animation: ReactHighcharts.svg, // don't animate in IE < IE 10.
		  backgroundColor: 'rgba(0,0,0,0)',
	      marginRight: 10
	   };
const title = {
           text: '事务错误情况一览',
           x: -20, //center
           style:{ "color": "#ffffff", "fontSize": "20px" }
       };
const credits = {
    enabled: false
};
const subtitle= {
           text: '集成监控',
           x: -20,
           style:{ "color": "#ffffff", "fontSize": "15px" }
       };
const xAxis = {
	      type: 'datetime',
	      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	      labels:{
	    	  style:{
	    			color: '#ffffff',
	    			fontWeight: 'bold'
	    		}
	      },
	      title:{
	    	  text:"时间",
	    	  style:{
	    		  color: '#ffffff',
	    		  fontSize:'20px'
	    	  }
	      }
	   
	   };
const yAxis = {
	      title: {
	         text: 'Error (个)',
	         style:{
	   		  color: '#ffffff',
	   		  fontSize:'20px'
	   	  	}
	      },
	      labels:{
	    	  style:{
	    			color: '#ffffff',
	    			fontWeight: 'bold'
	    		}
	      },
          plotLines: [{
              value: 0,
              width: 1,
              color: '#ffffff'
          }]
	   };
const tooltip = {
			   valueSuffix: '个'
	   };
const legend = {
           layout: 'horizontal',
           align: 'center',
           verticalAlign: 'bottom',
           borderWidth: 0,
           itemStyle: { "cursor": "pointer", "color": '#ffffff', "fontSize":"15px" },
           floating: false,
           title:{
        	   style:{ "fontWeight": "bold","color": '#ffffff', "fontSize":"12px"}
           }
       };
const series= [{
           name: 'ADT',
           data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 96]
       }, {
           name: '检查',
           data: [2, 8, 57, 113, 170, 220, 248, 241, 201, 141, 86, 25]
       }, {
           name: '检验',
           data: [9, 6, 5, 84, 135, 170, 186, 17, 143, 90, 39, 10]
       }, {
           name: '医嘱',
           data: [39, 42, 5, 85, 119, 152, 170, 166, 142, 103, 66, 48]
       }, {
           name: '手术',
           data: [39, 42, 57, 5, 19, 152, 170, 166, 14, 103, 6, 48]
       }, {
           name: '摆药',
           data: [39, 4, 57, 8, 119, 15, 170, 166, 12, 103, 66, 48]
       }, {
           name: '处方',
           data: [39, 42, 5, 85, 1, 152, 170, 16, 14, 103, 66, 48]
       }];     
	    
const plotOptions= {
           line: {
               dataLabels: {
                   enabled: true,
                   style:{"color": "#ffffff", "fontSize": "11px", "fontWeight": "bold", "textShadow": "0 0 6px contrast, 0 0 3px contrast" }
               },
               enableMouseTracking: false
           }
       };
const config ={
			chart:chart,
			title : title,
			tooltip : tooltip,
			xAxis : xAxis,
			yAxis : yAxis,
			legend : legend,
			series : series,
			plotOptions : plotOptions,
			credits:credits
			};
var LineChart=React.createClass({
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
export default LineChart