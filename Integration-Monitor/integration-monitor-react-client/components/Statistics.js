import React from 'react'
import PieChart from './PieChart'
import LineChart from './LineChart'
import SplineChart from './SplineChart'
import HighStock from './HighStock'
var Statistics=React.createClass({
  render() {
    return (
    			<div className="wrap clearfix">
    				<div className="page-title">
    					<h2 >
							<span>总览</span><sub>总览应用监控情况</sub>
						</h2>
    				</div>
    				<div>
    					<div className="pure-u-1 pure-u-xl-3-8" >
							<div id="rt-chart" className="box" >
								<div className="widget-normal" >
									<div className="widget-content" style={{display: 'block'}}>
										<div>
											<PieChart/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pure-u-1 pure-u-xl-7-12">
							<div className="box" >
								<div className="widget-normal">
									<div className="widget-content">
										<div id="container3" style={{width: '99%', height: '400px'}}>
											<LineChart/>
										</div>
									</div>
								</div>
							</div>
						</div>
    				</div>
    				<div className="pure-g">
						<div className="pure-u-1 pure-u-xl-23-24">
							<div className="pure-g">
								<div className="box">
									<div className="widget-normal">
										<div className="widget-content">
											<div id="container2" style={{width: '99%'}}>
												<HighStock/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
    			</div>);
  }
});
export default Statistics
