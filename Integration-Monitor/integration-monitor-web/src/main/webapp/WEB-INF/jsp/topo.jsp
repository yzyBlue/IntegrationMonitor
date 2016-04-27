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
						<li><a class="iconfont icon"href="/integration-monitor/adt">ADT事务 </a></li>
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
						<li><a class="iconfont icon" href="/integration-monitor/errorinfo">错误信息</a></li>
					</ul>
				</li>
				<li><strong><a href="#"><i class="iconfont icon-table"></i> 报表</a> </strong>
					<ul>
						<li><a class="iconfont icon"href="/integration-monitor/statistics">事务统计</a></li>
					</ul>
				</li>
				<li><strong> <a	href="/integration-monitor/alert"> <i class="iconfont icon-settings"></i>警报记录</a> </strong></li>
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
		<div class="topo-content">
			<div class="box" style="width: 20%; height: 60%;padding-right: 10;padding-bottom: 40;float:left">
				<div class="topo-map widget-normal" >
					<div class="topo-title">
						<h2>
							<span>集成信息系统</span>
						</h2>
					</div>
					<div class="widget-content" style="display: block;">
						<div style=" position: relative; padding: 0;">
							<svg width="100%" height="92.6%">
								<g>
									<rect width="100%" height="100%" style="fill: none; pointer-events: all;" />
									<g>
										<rect x="0" y="0" rx="10" ry="10" width="98%" height="40" style="fill: #56BC76; padding: 20; fill-opacity:0.9;stroke:rgba(86, 188, 118,0.6)" />
										<text x="50" y="20" dx="0.01em" dy="3em" fill="#fff">HIS</text>
										<rect x="0" y="70" rx="10" ry="10" width="98%" height="40" style="fill: #c86432; padding: 20; fill-opacity:0.9;stroke:rgba(200,100,50,0.6)" />
										<text x="50" y="90" dx="0.01em" dy="3em" fill="#fff">LIS</text>
										<rect x="0" y="140" rx="10" ry="10" width="98%" height="40" style="fill: #88e85c; padding: 20; fill-opacity:0.9;stroke:rgba(136, 232, 92,0.6)" />
										<text x="50" y="160" dx="0.01em" dy="3em" fill="#fff">CIS</text>
										<rect x="0" y="210" rx="10" ry="10" width="98%" height="40" style="fill: #fce5cd; padding: 20; fill-opacity:0.9;stroke:rgba(252, 229, 205,0.6)" />
										<text x="50" y="230" dx="0.01em" dy="3em" fill="#fff">RIS</text>
										<rect x="0" y="280" rx="10" ry="10" width="98%" height="40" style="fill: #ead1dc; padding: 20; fill-opacity:0.9;stroke:rgba(234, 209, 220,0.6)" />
										<text x="50" y="300" dx="0.01em" dy="3em" fill="#fff">CPOE</text>
										<rect x="0" y="350" rx="10" ry="10" width="98%" height="40" style="fill: #CD69C9; padding: 20; fill-opacity:0.9;stroke:rgba(205, 105, 201,0.6)" />
										<text x="50" y="370" dx="0.01em" dy="3em" fill="#fff">集成平台</text>
									</g>
								</g>
							</svg>
						</div>
					</div>	
				</div>
			</div>
			<div class="box" style="width: 75%; height: 60%;padding-right: 10;padding-bottom: 40;float:left">
				<div class="topo-map widget-normal" >
					<div class="widget-content" style="display: block;">
						<div style=" position: relative; padding: 0;">
							<svg width="100%" height="100%">
									<g>
										<rect width="100%" height="100%" style="fill: none; pointer-events: all;" />
										<g>
											<rect  width="80" height="80" style="fill: #99a3b2;; padding: 20;" />
											<circle cx="200" cy="150" r="40" stroke="none" stroke-width="2" fill="red" />
											<circle cx="200" cy="250" r="40" stroke="none" stroke-width="2" fill="blue" />
											<circle cx="200" cy="250" r="40" stroke="none" stroke-width="2" fill="#99a3b2" />
											<ellipse cx="200" cy="350" rx="100" ry="40"style="fill:rgb(200,100,50);stroke:none;stroke-width:2"/>
										</g>
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