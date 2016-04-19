<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="jspf/before-angular-init.jspf"%>
<script src="js/lib/jquery/jquery-2.1.1.js"></script>
<script src="js/myjs/highcharts.js"></script>
<script src="js/myjs/highcharts-3d.js"></script>
<script language="JavaScript">
$(document).ready(function() {  
   var chart = {      
      type: 'pie',     
      options3d: {
         enabled: true,
         alpha: 45,
         beta: 0
      },
   	backgroundColor: 'rgba(0,0,0,0)',
   	reflow:true
   };
   var title = {
      text: '集成事务一览',
      style:{ "color": "#ffffff", "fontSize": "20px" }
   }; 
   
   
   var tooltip = {
	  backgroundColor: 'rgba(0,0,0,0.5)',
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      style:{ "color": "#ffffff", "fontSize": "10px" }
   };

   var plotOptions = {
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
   var series= [{
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
      
   var json = {};   
   json.chart = chart; 
   json.title = title;       
   json.tooltip = tooltip; 
   json.plotOptions = plotOptions; 
   json.series = series;   
   $('#container').highcharts(json);
});
</script>
<script language="JavaScript">
$(document).ready(function() {  
   var chart = {
      type: 'spline',
	  animation: Highcharts.svg, // don't animate in IE < IE 10.
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
         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
         Highcharts.numberFormat(this.y, 2);
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
      
   var json = {};   
   json.chart = chart; 
   json.title = title;     
   json.tooltip = tooltip;
   json.xAxis = xAxis;
   json.yAxis = yAxis; 
   json.legend = legend;  
   json.exporting = exporting;   
   json.series = series;
   json.plotOptions = plotOptions;
   
   
   Highcharts.setOptions({
      global: {
         useUTC: false
      }
   });
   $('#container2').highcharts(json);
  
});
</script>

<script>
$(document).ready(function() {  
	   var chart = {
	      type: 'line',
		  animation: Highcharts.svg, // don't animate in IE < IE 10.
		  backgroundColor: 'rgba(0,0,0,0)',
	      marginRight: 10
	   };
	   var title = {
           text: '事务错误情况一览',
           x: -20, //center
           style:{ "color": "#ffffff", "fontSize": "20px" }
       };
	  var subtitle= {
           text: '集成监控',
           x: -20,
           style:{ "color": "#ffffff", "fontSize": "15px" }
       };
	   var xAxis = {
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
	   var yAxis = {
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
	   var tooltip = {
			   valueSuffix: '个'
	   };
	   var legend = {
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
	   var series= [{
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
	    
	  var plotOptions= {
           line: {
               dataLabels: {
                   enabled: true,
                   style:{"color": "#ffffff", "fontSize": "11px", "fontWeight": "bold", "textShadow": "0 0 6px contrast, 0 0 3px contrast" }
               },
               enableMouseTracking: false
           }
       };
	   
	   var json = {};   
	   json.chart = chart; 
	   json.title = title;
// 	   json.subtitle = subtitle;
	   json.tooltip = tooltip;
	   json.xAxis = xAxis;
	   json.yAxis = yAxis; 
	   json.legend = legend;   
	   json.series = series;
	   json.plotOptions = plotOptions;
	   
	   Highcharts.setOptions({
	      global: {
	         useUTC: false
	      }
	   });
	   $('#container3').highcharts(json);
	  
	});
</script>

<html ng-app="inteMonitorApp">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<title>集成监控系统</title>
		<meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'/>
		<!-- trun off cache for debugging -->
		<meta http-equiv="cache-control" content="max-age=0" />
		<meta http-equiv="cache-control" content="no-cache" />
		<meta http-equiv="expires" content="0" />
		<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
		<meta http-equiv="pragma" content="no-cache" />

		<link rel="icon" href="images/favicon.ico" />
		<!-- css init -->
		<%@ include file="jspf/css-init.jspf"%>
		<!-- js init -->
<%-- 		<%@ include file="jspf/js-init.jspf"%> --%>
	</head>
	<body ng-controller="appCtrl" style="font-family: Microsoft YaHei;" ng-cloak>
	
<!-- 	<toaster-container></toaster-container> -->
		<!-- header -->
		<%@ include file="jspf/header.jspf"%>
		
		<!-- busy hint -->
		<busy-model size="60"></busy-model>
<%-- 		<%@ include file="jspf/content-channel.jspf"%> --%>
<%-- 		<%@ include file="jspf/content-body.jspf"%> --%>
<%-- 		<%@ include file="jspf/content-server.jspf"%> --%>
		<%@ include file="jspf/content-transaction.jspf"%>
		
     	

		<!-- content -->
<!-- 		<div ui-view class="container responsive-container" ng-style="{height: containerHeight} "></div> -->
<!-- 		<section class="content"> -->
<!-- 			<div ui-view  class="container-fluid" ></div> -->
<!-- 		</section> -->
		<!-- footer -->
		<%@ include file="jspf/footer.jspf"%>

	</body>
</html>