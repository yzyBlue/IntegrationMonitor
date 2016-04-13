<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<!-- js init -->
<%@ include file="jspf/js-init.jspf"%>
</head>
<body>
<div ng-app="inteMonitorApp">
    <div class="row">
        <div class="col-md-2">
            <div ng-controller="appController">
                <carousel current-slide="currentSlide" forward="forward">
                    <slide ng-repeat="img in images">
                        <img ng-src="{{img}}" alt=""/>
                    </slide>
                </carousel>
                <button ng-click="prev()" class="btn btn-primary">Prev</button>
                <button ng-click="next()" class="btn btn-primary">Next</button>
            </div>
        </div>
    </div>
</div>
</body>
</html>