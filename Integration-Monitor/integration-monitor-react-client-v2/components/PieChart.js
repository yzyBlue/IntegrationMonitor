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
    // backgroundColor: {
    //     linearGradient: [0, 0, 500, 500],
    //     stops: [
    //         [0, 'rgb(255, 255, 255)'],
    //         [1, 'rgb(200, 200, 255)']
    //     ]
    // },
    reflow: true,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4
};
const title = {
    text: '集成业务一览',
    style: {
        "color": "#333333",
        "fontSize": "20px"
    }
};

const credits = {
    enabled: false
};

const exporting = {
    enabled: true
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
            format: '{point.name}' + '(' + '{point.y}' + ')',
            color: "#000000",
            style: {
                "fontSize": "15px",
                "fontWeight": "bold"
            }
        }
    }
};
const colors = {
    pam: 'rgba(124, 181, 236,0.8)',
    exam: 'rgba(139, 129, 198,0.8)',
    labTest: 'rgba(111, 204, 92,0.8)',
    order: 'rgba(35, 183, 229,0.8)',
    surgery: 'rgba(250, 215, 51,0.8)',
    presc: 'rgba(39, 194, 76,0.8)',
    drug: 'rgba(240, 80, 80,0.8)'
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
    loadDataFromServer: function() {
        var url = IntegrationService.MessageStatisticService.getAllMessageStatistic;
        //var url = 'http://172.16.100.64:8888/integration-monitor/message-statistic/all/';
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (this.isMounted) {
                    this.setState({ data: data });
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        })
    },
    componentDidMount: function() {
        this.loadDataFromServer();
        this.interval = setInterval(this.loadDataFromServer, 60000);
    },
    componentWillMount: function() {
        //console.log("componentWillMount");
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
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
            exporting:exporting,
            credits: credits
        };
        return ( < ReactHighcharts config = { config }
            ref = "piechart" / > );
    }
});
export default PieChart
