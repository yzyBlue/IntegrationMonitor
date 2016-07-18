import React from 'react'
import ReactHighcharts from 'react-highcharts'
import IntegrationService from './IntegrationService'
const chart = {
    type: 'pie',
    options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
    },
    backgroundColor: 'rgba(0,0,0,0)',
    reflow: true
};
const title = {
    text: '集成事务一览',
    style: {
        "color": "#ffffff",
        "fontSize": "20px"
    }
};

const credits = {
    enabled: false
};

const tooltip = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    style: {
        "color": "#ffffff",
        "fontSize": "15px"
    }
};

const plotOptions = {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        events: {
            click: function(e) {
                 //window.location.replace(e.point.url) //上面是当前页跳转，如果是要跳出新页面，那就用
                 //window.open(e.point.url);
                // 这里的url要后面的data里给出
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'+'('+'{point.y}'+')',
            color: "#F8F1EE",
            style:{
                "fontSize": "15px", "fontWeight": "bold"
            }
        }
    }
};
const colors = {
    pam: '#7CB5EC',
    exam: '#F8F8F8',
    labTest: '#6FCC5C',
    order: '#DD8942',
    surgery: '#CDCD00',
    presc: '#FFA500',
    drug: '#D54064'
};
const dataDefault = [{
    name: 'ADT',
    y: 0,
    color: colors.pam,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '检查',
    y: 0,
    color: colors.exam,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '检验',
    y: 0,
    sliced: true,
    selected: true,
    color: colors.labTest,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '医嘱',
    y: 0,
    color: colors.order,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '手术',
    y: 0,
    color: colors.surgery,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '处方',
    y: 0,
    color: colors.presc,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '摆药',
    y: 0,
    color: colors.drug,
    url: '/integration-monitor/index#/messagequery'
}];
var PieChart = React.createClass({
            getDefaultProps: function() {
                //console.log("getDefaultProps");
            },
            getInitialState: function() {
                //console.log("getInitialState");
                return {
                    data: {}
                };
            },
            loadDataFromServer:function(){
                var url=IntegrationService.MessageStatisticService.getAllMessageStatistic;
                //var url = 'http://172.16.100.64:8888/integration-monitor/message-statistic/all/';
                $.ajax({
                    url: url,
                    method: 'GET',
                    dataType: 'json',
                    cache: false,
                    success: function(data) {
                        this.setState({
                            data: data
                        });
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(url, status, err.toString());
                    }.bind(this)
                })
            },
            componentDidMount() {
                this.loadDataFromServer();
                setTimeout(this.loadDataFromServer, 5000);
            },
            componentWillMount: function() {
                //console.log("componentWillMount");
            },
            render() {
                //console.log("render");
                var statisticData = this.state.data;
                if (typeof statisticData == 'undefined') {
                    //console.log(" statisticData is undefined ");
                    seriesData = dataDefault;
                    //console.log(JSON.stringify(seriesData));
                } else {
                    //console.log(statisticData);
                    //console.log(JSON.stringify(statisticData));
                    var seriesData = [{
                        name: 'ADT',
                        y: statisticData.pam,
                        color: colors.pam,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '检查',
                        y: statisticData.exam,
                        color: colors.exam,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '检验',
                        y: statisticData.labTest,
                        sliced: true,
                        selected: true,
                        color: colors.labTest,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '医嘱',
                        y: statisticData.order,
                        color: colors.order,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '手术',
                        y: statisticData.surgery,
                        color: colors.surgery,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '处方',
                        y: statisticData.presc,
                        color: colors.presc,
                        url: '/integration-monitor/index#/messagequery'
                    }, {
                        name: '摆药',
                        y: statisticData.drug,
                        color: colors.drug,
                        url: '/integration-monitor/index#/messagequery'
                    }]
                }
                var series = [{
                    type: 'pie',
                    name: '所占比重',
                    data: seriesData
                }];
                var config = {
                    chart: chart,
                    title: title,
                    tooltip: tooltip,
                    plotOptions: plotOptions,
                    series: series,
                    credits:credits
                };
                return ( < ReactHighcharts config = {
                        config
                    }
                    />);
                }
            });
        export default PieChart
