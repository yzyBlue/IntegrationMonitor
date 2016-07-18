import React from 'react'
import ReactHighcharts  from 'react-highcharts'
var chart = {
      type: 'spline',
	     animation: ReactHighcharts.Highcharts.svg, // don't animate in IE < IE 10.
	     backgroundColor: 'rgba(0,0,0,0)',
      marginRight: 10,
	     events: {
         load: function () {
            // set up the updating of the chart each second
            var series = this.series[0];
            setInterval(function () {
               var x = (new Date()).getTime(), // current time
               y = Math.random();
               series.addPoint([x, y], true, true);
            }, 1000);
         }
      }
   };
const credits = {
    enabled: false
};
var title = {
      text: '事务运行情况实时监控',
      style:{ "color": "#ffffff", "fontSize": "20px" ,"letter-spacing":".03em"}
   };   
var xAxis = {
      type: 'datetime',
      tickPixelInterval: 150,
      labels:{
    	  style:{
    		  "color": "#ffffff",
    			"fontWeight": "bold",
    			"letter-spacing":".01em"
    		}
      },
      title:{
    	  text:"时间",
    	  style:{
    		  "color": "#ffffff",
    		  "fontSize":"20px",
    		  "letter-spacing":".03em"
    	  }
      }
   
   };
var yAxis = {
      title: {
         text: '消息数目',
         style:{
        	 "color": "#ffffff",
   		  	 "fontSize":"20px",
   		  	 "letter-spacing":".03em"
   	  	}
      },
      labels:{
    	  style:{
    		  "color": "#ffffff",
       		  "fontSize":"20px",
       		  "letter-spacing":".01em"
    		}
      },
      alternateGridColor: '#687589',
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080',
         style:{ "color": "#ffffff", "fontSize": "10px" }
      }]
   };
var tooltip = {
	backgroundColor: 'rgba(0,0,0,0)',
	style:{ "color": "#ffffff", "fontSize": "10px" ,"letter-spacing":"-.02em"},
      formatter: function () {
      return '<b >' + this.series.name + '</b><br/>' +
         ReactHighcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
         ReactHighcharts.numberFormat(this.y, 2);
      }
   };
var plotOptions = {
      area: {
         pointStart: 1940,
         marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
var legend = {
      enabled: false
   };
var exporting = {
      enabled: false
   };
var series= [{
      name: 'Random data',
      data: (function () {
         // generate an array of random data
         var data = [],time = (new Date()).getTime(),i;
         for (i = -19; i <= 0; i += 1) {
            data.push({
               x: time + i * 1000,
               y: Math.random(),
               color:'#ffffff'
            });
         }
         return data;
      }())    
   }];


const config ={
			chart:chart,
			title : title,
			tooltip : tooltip,
			xAxis : xAxis,
			yAxis : yAxis,
			legend : legend,
			series : series,
			exporting : exporting, 
			plotOptions : plotOptions,
      credits:credits
			};
var SplineChart=React.createClass({
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
export default SplineChart