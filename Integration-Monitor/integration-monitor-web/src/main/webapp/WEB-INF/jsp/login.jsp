<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
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
<script charset="utf-8" src="js/myjs/lxb.js"></script>
<script charset="utf-8" src="js/myjs/v.js"></script>
<script src="js/myjs/hm.js"></script>
<script src="js/myjs/modules.js"></script>
<!-- <script src="js/myjs/stacktrace-with-polyfills.min.js"></script> -->
</head>
<body>
	<div class="lang">
		<strong class="lang-info"> <i class="iconfont large"></i> <span>中文</span>
			<i class="iconfont icon-arrowup"></i>
		</strong>
		<div class="dropdown-main" style="display: none;">
			<ul>
				<li><a data-lang="en" href="javascript:;">中文</a></li>
				<li><a data-lang="zh_CN" href="javascript:;">English</a></li>
			</ul>
		</div>
	</div>
	<div id="layout">
		<div class="wrap clearfix">
			<script type="text/javascript">
				var User = {};
			</script>
			<div class="content no-sidebar form-middle" id="root">
				<div class="logo-center">
					<a id="logo-center" class="iconfont icon-monitor" href="#"
						title="Integration Monitor"></a>
				</div>
				<div class="container clearfix">
					<div class="box login-box">
						<div class="title">
							<h2>登陆</h2>
						</div>
						<div class="form-wrapper">
							<form method="post"
								action="/integration-monitor/"
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
									<input type="checkbox" name="rememberPassword" value="false"
										id="remember"> <label> <span class="check-out">
											<span class="iconfont check-in"></span>
									</span> 自动登陆
									</label> <a class="float-right"
										href="#">忘记密码？</a>
								</div>
								<div class="input-box margin-min">
									<input type="hidden" name="encode" value="false"> 
									<input class="btn btn-blue btn-block" type="submit" name="submit" value="登录" >
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
			<li><a href="#" target="_blank">官方网站</a></li>
			<li class="divider"></li>
			<li><a href="#" target="_blank">帮助中心</a></li>
			<li class="divider"></li>
			<li>
				<p>Copyright © 2016 浙江大学</p>
			</li>
		</ul>
	</div>
	<script src="js/myjs/vendor.js" type="text/javascript"></script>
	<script src="js/myjs/account.js" type="text/javascript"></script>
	<script>
		var BlueWare = {
			siteDomain : 'zju.edu.com'
		}
		BlueWare['account'] = {
			resend : '重新发送',
			countdown : '重新发送（ {0} 秒）',
			msg : {
				email : '请输入邮箱地址',
				validEmail : '请输入有效邮箱地址',
				regedEmail : '邮箱地址已被注册',
				password : '请输入密码',
				regedPwd : '密码必须同时包含英文字母、数字',
				rewritePwd : '请再次输入密码',
				diffPwd : '两次输入不一致',
				oldPwd : '请输入原密码',
				newPwd : '请输入新密码',
				samePwd : '新密码不能与原密码相同',
				contactName : '请输入您的姓名',
				companyName : '请输入企业名称',
				companySize : '请输入公司人数',
				regedCompanySize : '请输入5位以内不小于1的整数',
				telephone : '请输入联系方式',
				validPhone : '请输入有效联系方式',
				maxlength : '请输入最多 {0} 字符',
				minlength : '请输入至少 {0} 字符',
				coupon : '请输入优惠码',
				groupName : '请输入团队名称'
			}
		}
 	</script>
</body>
</html>