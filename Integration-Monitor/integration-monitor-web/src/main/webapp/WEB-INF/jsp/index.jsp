<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ include file="jspf/before-angular-init.jspf"%>

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
<%-- 		<%@ include file="jspf/content-home.jspf"%> --%>
		
     	

		<!-- content -->
<!-- 		<div ui-view class="container responsive-container" ng-style="{height: containerHeight} "></div> -->
<!-- 		<section class="content"> -->
<!-- 			<div ui-view  class="container-fluid" ></div> -->
<!-- 		</section> -->
		<!-- footer -->
		<%@ include file="jspf/footer.jspf"%>

	</body>
</html>
