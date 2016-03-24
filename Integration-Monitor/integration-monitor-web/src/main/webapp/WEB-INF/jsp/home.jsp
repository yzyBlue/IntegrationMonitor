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

<!--<script src="/scripts/vendor/animation.ployfill.js" type="text/javascript"></script>-->

<!-- Hotjar Tracking Code for https://ai.oneapm.com -->
<script charset="utf-8" src="js/myjs/lxb.js"></script>
<script charset="utf-8" src="js/myjs/v.js"></script>
<script src="js/myjs/hm.js"></script>
<script src="js/myjs/analytics.js"></script>
<script type="text/javascript" src="js/myjs/mixpanel-2-latest.min.js"></script>
<script type="text/javascript" src="js/myjs/vds.js"></script>
<script>
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:169261,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
<script src="js/myjs/hotjar-169261.js"></script>
<!-- End Hotjar -->
<!-- Start of GrowingIO -->
<script type="text/javascript">
      var _vds = _vds || [];
      window._vds = _vds;
      (function(){
        _vds.push(['setAccountId', 'a78f5e02538f4b2b88cd4fee708bc11b']);
        _vds.push(['setCS1','user_id','723']);
        (function() {
          var vds = document.createElement('script');
          vds.type='text/javascript';
          vds.async = true;
          vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(vds, s);
        })();
      })();
    </script>
<!-- End of GrowingIO -->

<!--mixpanel BEGIN -->
<script type="text/javascript">
      (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
    for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);

      mixpanel.init("808ec91aad9e26fed869c225603697d6");
    </script>
<!--mixpanel END-->
<script src="js/myjs/modules.js"></script>
</head>
<body>
	<div id="layout">
		<div class="header">
			<div class="logo">
				<a class="iconfont icon-brand" href="#" title="InteMonitor">
					<span>InteMonitor</span>
				</a>
				<!-- <a class="iconfont icon-oneapmlogo" href="http://www.oneapm.com/" title="OneAPM">
            <span>OneAPM</span>
          </a> -->
			</div>
			<div class="account">
				<strong class="account-info active"> <i
					class="iconfont large"></i> <span>Admin</span> <i
					class="iconfont icon-arrowup"></i>
				</strong>
				<div class="dropdown-main" style="display: none;">
					<ul>
						<li><a href="http://user.oneapm.com/pages/v2/users/profile"
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
								<a href="https://ai.oneapm.com/tpm/account/723/applications"
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
								<a href="https://rum.oneapm.com/tpm/account/723/beacon/applist"
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
								<a href="https://cloud.oneapm.com/" class="product-link">
									<div class="icon-box">
										<div class="icon-bg ci">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">DataBase Info</p>
										<p class="desp">数据库性能监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="https://ct.oneapm.com/synthetic/monitor"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg syn">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Channel Insight</p>
										<p class="desp">集成通道状态监控</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="https://mi.oneapm.com/mobile/app" class="product-link">
									<div class="icon-box">
										<div class="icon-bg mi">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Problem Manage</p>
										<p class="desp">集成问题管理平台</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a
									href="http://c.110monitor.com/console/alarm/index.jsp?JSESSIONID=4a3e8c35-a8c2-436d-9ec1-620c158a3108"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg alert">
											<i class="icon iconfont"></i>
										</div>
									</div>
									<div class="text-box">
										<p class="name">Transaction Manage</p>
										<p class="desp">集成事务管理平台</p>
									</div>
								</a>
							</div>
						</div>
						<div class="pure-u-1-2 pure-u-lg-1-3">
							<div class="box">
								<a href="https://tpm.oneapm.com/tpm/account/723/servers"
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
								<a href="https://tpm.oneapm.com/tpm/account/723/servers"
									class="product-link">
									<div class="icon-box">
										<div class="icon-bg si">
											<i class="icon iconfont"></i>
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

	<!-- Google Analytics -->
	<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-56334895-2', 'auto',{'allowLinker': true});
      ga('require', 'linker');
      ga('linker:autoLink', ['oneapm.kf5.com','oneapm.udesk.cn'] );
      ga('send', 'pageview');

      
    </script>
	<!-- End Google Analytics -->
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