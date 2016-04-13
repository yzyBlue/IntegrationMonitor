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
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-TileImage" content="/mstile-144x144.png">
<link rel="stylesheet" href="css/styles/account.css">
<script charset="utf-8" src="js/myjs/lxb.js"></script>
<script charset="utf-8" src="js/myjs/v.js"></script>
<script type="text/javascript" src="js/myjs/vds.js"></script>
<script src="js/myjs/modules.js"></script>
</head>
<body>
	<div id="layout">
		<div class="header">
			<div class="logo">
				<a class="iconfont icon-brand" href="/integration-monitor/" title="InteMonitor">
					<span>InteMonitor</span>
				</a>
			</div>
			<div class="account">
				<strong class="account-info active"> <i
					class="iconfont large"></i> <span>Admin</span> <i
					class="iconfont icon-arrowup"></i>
				</strong>
				<div class="dropdown-main" style="display: none;">
					<ul>
						<li><a href="/integration-monitor/login"
							target="_blank"><i class="iconfont"></i> 个人中心</a></li>
						<li><a href="#" target="_blank"><i class="iconfont"></i>
								控制台</a></li>
						<li><a href="#"><i class="iconfont"></i> 团队信息</a></li>


						<li><a id="logout" href="#"><i class="iconfont"></i> 退出</a></li>
					</ul>
				</div>
			</div>

		</div>
		<div class="wrap clearfix">
			<script type="text/javascript">
          var User = {};
            User['id'] = '723';
            User['groupId'] = '723';
            User['parentId'] = '0';
            User['adminId'] = '723';
            User['role'] = 'admin';
        </script>
			<div class="content no-sidebar " id="root">
				<div class="home-list">
					<div class="pure-g">
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/transaction"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg ai">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Transaction Monitor</p>
										<p class="desp">集成事务监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/message"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg bi">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Message Monitor</p>
										<p class="desp">消息事件监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/server" class="product-link">
									<div class="icon-box">
										<div class="icon-bg ci">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Server Monitor</p>
										<p class="desp">服务器性能监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/channel"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg syn">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Channel Monitor</p>
										<p class="desp">集成通道监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/problem" class="product-link">
									<div class="icon-box">
										<div class="icon-bg mi">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Problem Manage</p>
										<p class="desp">集成问题管理</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a
									href="/integration-monitor/transManager"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg alert">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Transaction Manage</p>
										<p class="desp">集成事务管理</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/service"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg si">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">API Monitor</p>
										<p class="desp">集成服务监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="/integration-monitor/help"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg hi">
											<i class="icon iconfont">&#xe656;</i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Help Document</p>
										<p class="desp">帮助文档</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="layout_footer"></div>
	</div>
	<div class="footer">
		<ul>
			<li><a href="#" >官方网站</a></li>
			<li class="divider"></li>
			<li><a href="#" >帮助中心</a></li>
			<li class="divider"></li>
			<li>
				<p>Copyright © 2016 浙江大学</p>
			</li>
		</ul>
	</div>

	<script src="js/myjs/vendor.js" type="text/javascript"></script>
	<script src="js/myjs/account.js" type="text/javascript"></script>

	
	<script>
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?eb7c5a354730562c0be3470554f756e7";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    })();
    </script>

	<script>
    var BlueWare = {
      siteDomain:'oneapm.com'
    }
    BlueWare['account'] = {
      resend:'重新发送',
      countdown:'重新发送（ {0} 秒）',
      msg:{
        email:'请输入邮箱地址',
        validEmail:'请输入有效邮箱地址',
        regedEmail:'邮箱地址已被注册',
        password:'请输入密码',
        regedPwd:'密码必须同时包含英文字母、数字',
        rewritePwd:'请再次输入密码',
        diffPwd:'两次输入不一致',
        oldPwd:'请输入原密码',
        newPwd:'请输入新密码',
        samePwd:'新密码不能与原密码相同',
        contactName:'请输入您的姓名',
        companyName:'请输入企业名称',
        companySize:'请输入公司人数',
        regedCompanySize:'请输入5位以内不小于1的整数',
        telephone:'请输入联系方式',
        validPhone:'请输入有效联系方式',
        maxlength:'请输入最多 {0} 字符',
        minlength:'请输入至少 {0} 字符',
        coupon:'请输入优惠码',
        groupName:'请输入团队名称'
      }
    }
    </script>
</html>