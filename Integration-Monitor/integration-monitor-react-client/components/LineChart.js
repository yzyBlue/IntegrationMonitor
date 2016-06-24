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
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
       }, {
           name: '检查',
           data: [0.2, 8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
       }, {
           name: '检验',
           data: [0.9, 0.6, 5, 8.4, 13.5, 17.0, 18.6, 17, 14.3, 9.0, 3.9, 1.0]
       }, {
           name: '医嘱',
           data: [3.9, 4.2, 5, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
       }, {
           name: '手术',
           data: [3.9, 4.2, 5.7, 5, 1.9, 15.2, 17.0, 16.6, 14, 10.3, 6, 4.8]
       }, {
           name: '摆药',
           data: [3.9, 4, 5.7, 8, 11.9, 15, 17.0, 16.6, 12, 10.3, 6.6, 4.8]
       }, {
           name: '费用',
           data: [3.9, 4.2, 5, 8.5, 1, 15.2, 17.0, 1.6, 14, 10.3, 6.6, 4.8]
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
			plotOptions : plotOptions
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