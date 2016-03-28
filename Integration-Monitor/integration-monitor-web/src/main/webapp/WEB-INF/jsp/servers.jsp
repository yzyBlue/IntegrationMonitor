<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!DOCTYPE html>
<!-- saved from url=(0048)https://tpm.oneapm.com/tpm/account/723/servers#/ -->
<html class="no-js">
<!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Integration Monitor</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="description" content="">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1.5">
<!-- 国产双核浏览器用 start -->
<meta name="renderer" content="webkit">
<!-- 国产双核浏览器用 end -->
<link rel="stylesheet" type="text/css"
	href="./css/styles/style-server.css">
<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
<link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico">
<script charset="utf-8" src="js/myjs/lxb.js"></script>
<script charset="utf-8" src="js/myjs/v.js"></script>
<script src="js/myjs/hm.js"></script>
<script src="js/myjs/analytics.js"></script>
<script type="text/javascript" charset="utf-8"src="js/myjs/vendor.js"></script>
<script type="text/javascript" charset="utf-8" async=""
	data-requirecontext="_" data-requiremodule="ui"
	src="js/myjs/ui-server.js"></script>
<script type="text/javascript" charset="utf-8" async=""
	data-requirecontext="_" data-requiremodule="server/servers/main"
	src="js/myjs/main-server.js"></script>
</head>
<body>
	<div id="layout">
		<div class="header">
			<div class="logo">
				<a class="iconfont icon-brand"
					href="https://user.oneapm.com/account/home.do" title="Inte-Monitor">
					<span>OneAPM</span>
				</a>
			</div>
			<div class="account">
				<strong class="account-info"> <i class="iconfont large"></i>
					<span>Admin</span> <i class="iconfont icon-arrowup"></i>
				</strong>
				<div class="dropdown-main" style="display: none;">
					<ul>
						<li><a href="https://user.oneapm.com/account/profile.do"
							target="_blank"><i class="iconfont"></i> 个人中心</a></li>
						<li><a href="https://user.oneapm.com/account/home.do"
							target="_blank"><i class="iconfont"></i> 控制台</a></li>
						<li><a href="https://user.oneapm.com/account/group.do"><i
								class="iconfont"></i> 团队信息</a></li>
						<li><a href="javascript:;"><i class="iconfont"></i> 切换团队</a>
							<ul>
								<li><a
									href="https://user.oneapm.com/account/groupChange.do?groupId=723">Inte-Monitor</a>
								</li>
								<li><a
									href="https://user.oneapm.com/account/groupChange.do?groupId=581943253">1</a>
								</li>
							</ul></li>
						<li><a href="https://oneapm.kf5.com/community/"
							target="_blank"><i class="iconfont"></i>社区</a></li>
						<li><a href="https://tpm.oneapm.com/tpm/account/logout"><i
								class="iconfont"></i> 退出</a></li>
					</ul>
				</div>
			</div>

			<div class="btn-sidebar">
				<a class="iconfont" href="javascript:;"></a>
			</div>
			<div class="nav">
				<div class="services">
					<ul>
						<li><a class=""
							href="https://ai.oneapm.com/tpm/account/723/applications"
							data-tip="应用性能管理" data-place="bottom"> <i class="iconfont"></i>
						</a></li>
						<li><a class=""
							href="https://rum.oneapm.com/tpm/account/723/beacon/applist"
							data-tip="真实用户体验监控" data-place="bottom"> <i class="iconfont"></i>
						</a></li>
						<li><a class="" href="https://cloud.oneapm.com/"
							data-tip="系统监控和中间件监控" data-place="bottom"> <i
								class="iconfont"></i>
						</a></li>
						<li><a class=""
							href="https://ct.oneapm.com/synthetic/monitor" data-tip="模拟业务监控"
							data-place="bottom"> <i class="iconfont"></i>
						</a></li>
						<li><a class="" href="https://mi.oneapm.com/mobile/app"
							data-tip="移动应用性能管理平台" data-place="bottom"> <i
								class="iconfont"></i>
						</a></li>
						<li><a class=""
							href="http://c.110monitor.com/console/alarm/index.jsp?JSESSIONID=e3ef654e-f4ee-41a9-8fe5-acee07974519"
							data-tip="一站式告警管理平台" data-place="bottom"> <i class="iconfont"></i>
						</a></li>
						<li><a class="active"
							href="https://tpm.oneapm.com/tpm/account/723/servers"
							data-tip="主机监控" data-place="bottom"> <i class="iconfont"></i>
						</a></li>
					</ul>
				</div>
				<div class="notice-tips">
					<ul data-reactid=".2">
						<li data-reactid=".2.$notice1" style="display: none;"><div
								class="notice" data-reactid=".2.$notice1.0">
								<a class="iconfont close" href="javascript:;"
									data-reactid=".2.$notice1.0.0"></a><i
									class="iconfont icon-info" data-reactid=".2.$notice1.0.1"></i>
								<div class="notice-inner" data-reactid=".2.$notice1.0.2">
									<div data-reactid=".2.$notice1.0.2.0">
										<p data-reactid=".2.$notice1.0.2.0.0">
											<span data-reactid=".2.$notice1.0.2.0.0.0">OneAPM
												Server
												属于轻量级服务器监控产品，采集cpu，网络，内存，磁盘等指标。如您有5台或5台以下的服务器监控需求，建议你使用</span><a
												href="https://tpm.oneapm.com/tpm/account/723/servers/addServers"
												data-reactid=".2.$notice1.0.2.0.0.1"> OneAPM Server。</a>
										</p>
										<p data-reactid=".2.$notice1.0.2.0.1">
											<span data-reactid=".2.$notice1.0.2.0.1.0">如你有5台以上的服务器，需要进行集群管理监控或对tomcat、Memcached、Nginx等组件监控，建议您使用</span><a
												href="https://cloud.oneapm.com/#/settings"
												data-reactid=".2.$notice1.0.2.0.1.1"> Cloud Insight。</a>
										</p>
									</div>
								</div>
							</div></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="wrap clearfix">
			<div class="page-title">
				<h2>
					服务器监控<sub>服务器监控列表</sub>
				</h2>
			</div>

			<div class="content no-sidebar" id="root">
				<div data-reactid=".0">
					<div class="pure-g" data-reactid=".0.0">
						<div class="pure-u-1" data-reactid=".0.0.0">
							<div class="box" data-reactid=".0.0.0.0">
								<div class="widget-normal" data-reactid=".0.0.0.0.0">
									<div class="widget-content" style="display: block;"
										data-reactid=".0.0.0.0.0.1">
										<div data-reactid=".0.0.0.0.0.1.0">
											<table class="table table-striped "
												data-reactid=".0.0.0.0.0.1.0.0">
												<colgroup data-reactid=".0.0.0.0.0.1.0.0.0">
													<col style="width: 15px;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$memRate">
													<col style="width: auto;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$name">
													<col style="width: 12%;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$cpuRate">
													<col style="width: 12%;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$diskIORate">
													<col style="width: 12%;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$memUsage">
													<col style="width: 12%;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$diskUsage">
													<col style="width: 10%;"
														data-reactid=".0.0.0.0.0.1.0.0.0.$ctrls">
												</colgroup>
												<thead data-reactid=".0.0.0.0.0.1.0.0.1">
													<tr data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr">
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$0"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$0.0"></span><span
															class="sorted-arrow "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$0.1"></span></th>
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$1"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$1.0">服务器名称</span><span
															class="sorted-arrow desc "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$1.1"></span></th>
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$2"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$2.0">CPU使用率</span><span
															class="sorted-arrow "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$2.1"></span></th>
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$3"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$3.0">磁盘IO利用率</span><span
															class="sorted-arrow "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$3.1"></span></th>
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$4"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$4.0">内存使用率</span><span
															class="sorted-arrow "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$4.1"></span></th>
														<th class="sortedth"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$5"><span
															class="sortedtext"
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$5.0">磁盘使用率</span><span
															class="sorted-arrow "
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$5.1"></span></th>
														<th style="width: 10%;" class=""
															data-reactid=".0.0.0.0.0.1.0.0.1.$thead_tr.$6"></th>
													</tr>
												</thead>
												<tbody data-reactid=".0.0.0.0.0.1.0.0.2">
													<tr data-reactid=".0.0.0.0.0.1.0.0.2.0:$0">
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0"><i
															class="iconfont  state-downtime"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0.0"></i></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1"><a
															href="https://tpm.oneapm.com/tpm/account/723/server/8027/10698/main"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1.0">shine数据库服务器</a></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$2">66.3%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$3">36.00%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$4">60%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$5">45%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6"><div
																class="operation"
																data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0">
																<a class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.0"></a><a
																	class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.1"></a>
															</div></td>
													</tr>
												</tbody>
												<tbody data-reactid=".0.0.0.0.0.1.0.0.2">
													<tr data-reactid=".0.0.0.0.0.1.0.0.2.0:$0">
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0"><i
															class="iconfont  state-downtime"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0.0"></i></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1"><a
															href="https://tpm.oneapm.com/tpm/account/723/server/8027/10698/main"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1.0">CDR集成服务器</a></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$2">66.3%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$3">36.00%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$4">60%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$5">45%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6"><div
																class="operation"
																data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0">
																<a class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.0"></a><a
																	class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.1"></a>
															</div></td>
													</tr>
												</tbody>

												<tbody data-reactid=".0.0.0.0.0.1.0.0.2">
													<tr data-reactid=".0.0.0.0.0.1.0.0.2.0:$0">
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0"><i
															class="iconfont  state-downtime"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0.0"></i></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1"><a
															href="https://tpm.oneapm.com/tpm/account/723/server/8027/10698/main"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1.0">CDR数据库服务器</a></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$2">66.3%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$3">36.00%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$4">60%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$5">45%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6"><div
																class="operation"
																data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0">
																<a class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.0"></a><a
																	class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.1"></a>
															</div></td>
													</tr>
												</tbody>
												<tbody data-reactid=".0.0.0.0.0.1.0.0.2">
													<tr data-reactid=".0.0.0.0.0.1.0.0.2.0:$0">
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0"><i
															class="iconfont  state-downtime"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$0.0"></i></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1"><a
															href="https://tpm.oneapm.com/tpm/account/723/server/8027/10698/main"
															data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$1.0">shine应用服务器</a></td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$2">66.3%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$3">36.00%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$4">60%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$5">45%</td>
														<td class="" data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6"><div
																class="operation"
																data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0">
																<a class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.0"></a><a
																	class="iconfont" href="javascript:;"
																	data-reactid=".0.0.0.0.0.1.0.0.2.0:$0.$6.0.1"></a>
															</div></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="layout_footer"></div>
	</div>
	<div class="footer" style="display: none;">
		<ul>
			<li><a href="http://oneapm.com/" target="_blank">官方网站</a></li>
			<li class="divider"></li>
			<li><a href="http://oneapm.udesk.cn/hc" target="_blank">帮助中心</a></li>
			<li class="divider"></li>
			<li>
				<p>Copyright © 浙江大学</p>
			</li>
		</ul>
	</div>
	<script src="./Integration Monitor_files/bluewareui-seed-f6fcb92e.js"
		type="text/javascript"></script>
	<script type="text/javascript">
		require([ 'vendor' ], function() {
			require([ 'ui', 'server/servers' + '/main' ]);
		})
	</script>
	<script type="text/javascript">
		// notify qingcloud window to adjust iframe height
		if (parent.location != location && parent.postMessage) {
			window.addEventListener('load', function() {
				var origin = 'https://console.qingcloud.com';
				setInterval(function() {
					parent.postMessage(document.body.scrollHeight, origin);
				}, 50)
			});
		}
	</script>
	<!-- Start of KF5 supportbox script -->
	<script src="./Integration Monitor_files/main.js"
		id="kf5-provide-supportBox" kf5-domain="OneAPM.kf5.com"></script>
	<!-- End of KF5 supportbox script -->
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
    (function()
    { var hm = document.createElement("script"); hm.src = "//hm.baidu.com/hm.js?eb7c5a354730562c0be3470554f756e7"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s); }
    )();
    </script>


	<link rel="styleSheet" type="text/css"	href="css/styles/btn.css">
	
</body>
</html>