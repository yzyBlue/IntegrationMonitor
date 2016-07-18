<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
	
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<!-- <meta http-equiv="refresh" content="60">  -->
<title>集成监控系统</title>
<link rel="icon" href="images/favicon.ico" />
<link rel="stylesheet" href="css/styles/theme-light.css" type="text/css">
<link rel="stylesheet" href="css/font-awesome.css" type="text/css">
<!-- <script src="js/lib/react/react.js"></script> -->
<!-- <script src="js/lib/react/ReactUI.js"></script> -->
<!-- <script src="js/lib/react/react-dom.js"></script> -->
<!-- <script src="js/lib/react/react-bootstrap.js"></script> -->
<script src="js/lib/react/browser.min.js"></script>
<script src="js/lib/jquery/jquery-2.1.1.js"></script>
<script src="js/lib/bootstrap/bootstrap.js"></script>
<script src="js/lib/bootstrap/bootstrap-notify.js"></script>
<!-- <link rel="stylesheet" href="css/styles/modal.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/sidebar.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/font-awesome.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/navbar.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/timeline.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/label.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/msg.table.css" type="text/css"> -->
<!-- <link rel="stylesheet" href="css/styles/bootstrap-notify.css" type="text/css"> -->
</head>
<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal.username" var="userName" />
</sec:authorize>
<div id="hidden">
<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal.username" var="userName" />
</sec:authorize>
<input id="username" type="hidden" value='${userName}'/>
</div>
<div id="index" stytle="width:100%;height:100%">
</div>

<script src="js/vendor.js"></script>
<script src="js/index.js"></script>
</html>
