<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html class="no-js" lang="zh-CN">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<title>IM 集成监控系统</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 国产双核浏览器用 start -->
<meta name="renderer" content="webkit">
<!-- 国产双核浏览器用 end -->
<link rel="shortcut icon" href="images/favicon.ico">
<link rel="stylesheet" href="css/styles/account.css" type="text/css">

<script async="" src="js/myjs/analytics.js"></script>
<script type="text/javascript" src="js/myjs/mixpanel-2-latest.min.js"></script>
<script charset="utf-8" src="js/myjs/lxb.js"></script>
<script charset="utf-8" src="js/myjs/v.js"></script>
<script src="js/myjs/hm.js"></script>
<script type="text/javascript" async=""	src="js/myjs/mixpanel-2-latest.min.js"></script>
<script src="js/myjs/modules.js"></script>
<script	src="js/myjs/stacktrace-with-polyfills.min.js"></script>
</head>
<body>
	<div class="lang">
		<strong class="lang-info"> <i class="iconfont large"></i> <span>中文</span>
			<i class="iconfont icon-arrowup"></i>
		</strong>
		<div class="dropdown-main" style="display: none;">
			<ul>
				<li><a data-lang="en" href="javascript:;">English</a></li>
				<li><a data-lang="zh_CN" href="javascript:;">中文</a></li>
			</ul>
		</div>
	</div>
	<div id="layout">
		<div class="wrap clearfix">
			<script type="text/javascript">
          var User = {};
        </script>
			<div class="content no-sidebar form-middle" id="root"
				style="height: 408px;">
				<div class="logo-center">
					<a id="logo-center" class="iconfont icon-monitor"
						href="http://www.oneapm.com/" title="Integration Monitor"></a>
				</div>
				<div class="container clearfix">
					<div class="box login-box">
						<div class="title">
							<h2>登录IM系统</h2>
						</div>
						<div class="form-wrapper">
							<form method="post" action="#"
								id="loginform" novalidate="novalidate">
								<div class="input-box">
									<input class="input-text valid" type="text" name="email"
										placeholder="邮箱">
									<p class="error-top"></p>
								</div>
								<div class="input-box no-margin">
									<input class="input-text" type="password" name="password"
										placeholder="密码">
									<p class="error-top"></p>
								</div>
								<div class="remember-box">
									<input type="checkbox" name="rememberPassword" value="false" checked="checked"
										id="remember"> <label> <span class="check-out">
											<span class="iconfont check-in" style="display: block;"></span>
									</span> 自动登录
									</label> <a class="float-right"
										href="http://user.oneapm.com/pages/v2/password/forget">忘记密码？</a>
								</div>
								<div class="input-box margin-min">
									<input type="hidden" name="encode" value="false"> <input
										class="btn btn-blue btn-block" type="submit" name="submit"
										value="登录">
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="layout_footer"></div>
	</div>
	<div class="footer">
		<ul>
			<li><a href="http://oneapm.com/" target="_blank">官方网站</a></li>
			<li class="divider"></li>
			<li><a href="http://support.oneapm.com/" target="_blank">帮助中心</a></li>
			<li class="divider"></li>
			<li>
				<p>Copyright © 2016 浙江大学</p>
			</li>
		</ul>
	</div>
	<script src="js/myjs/vendor.js" type="text/javascript"></script>
	<script src="js/myjs/account.js" type="text/javascript"></script>
</body>
</html>