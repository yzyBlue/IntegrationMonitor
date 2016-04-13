<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="jspf/before-angular-init.jspf"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
<title>集成监控系统</title>
<meta
	content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
	name='viewport' />
<!-- trun off cache for debugging -->
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />

<link rel="icon" href="images/favicon.ico" />
<!-- css init -->
<%@ include file="jspf/css-init.jspf"%>
<body style="font-family: Microsoft YaHei;">


	<%@ include file="jspf/header.jspf"%>

	<!-- busy hint -->
	<busy-model size="60"></busy-model>
	<div class="sidebar">
		<div class="menu">
			<ul>
				<li>
					<strong> 
						<a ><i class="iconfont icon-eye"></i>监控</a>
					</strong>
					<ul>
						<li><a class="iconfont icon" href="/integration-monitor/transaction"> 总览详情 </a></li>
						<li><a class="iconfont icon active"href="/integration-monitor/topo">拓扑网络</a></li>
						<li><a class="iconfont icon"href="#">ADT事务 </a></li>
						<li><a class="iconfont icon"href="#">检查事务</a></li>
						<li><a class="iconfont icon"href="#">检验事务</a></li>
						<li><a class="iconfont icon"href="#">医嘱事务</a></li>
						<li><a class="iconfont icon"href="#">手术事务</a></li>
						<li><a class="iconfont icon"href="#">摆药事务</a></li>
						<li><a class="iconfont icon"href="#">费用事务</a></li>
					</ul>
				</li>
				<li><strong><a href="#"><i class="iconfont icon-flag"></i>事件</a> </strong>
					<ul>
						<li><a class="iconfont icon" href="#">错误信息</a></li>
					</ul>
				</li>
				<li><strong><a href="#"><i class="iconfont icon-table"></i> 报表</a> </strong>
					<ul>
						<li><a class="iconfont icon"href="#">事务统计</a></li>
					</ul>
				</li>
				<li><strong> <a	href="#"> <i class="iconfont icon-settings"></i>警报设置</a> </strong></li>
			</ul>
		</div>
	</div>
	<div class="content">
		<div>
			<div class="page-title">
				<h2>
					<span>拓扑</span> <sub>集成事务拓扑网络</sub>
				</h2>
			</div>
		</div>
		<div>
			<div class="box" style="position: relative;">
				<div class="topo-map widget-normal">
					<div class="widget-content" style="display: block;">
						<div
							style="width: 100%; height: 700px; position: relative; padding: 0;">
							<svg width="100%" height="700">
									<g >
										<rect width="100%" height="700" style="fill: none; pointer-events: all;" />
											<g>
												<rect width="80" height="80" style="fill: #99a3b2;; padding: 10;" />
												
												<circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
											</g>
										</rect>
									</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<%@ include file="jspf/footer.jspf"%>

</body>
</html>