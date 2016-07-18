import React from 'react'
import ReactHighcharts from 'react-highcharts'
const chart = {
    type: 'pie',
    options: {
        enabled: true,
        alpha: 45,
        beta: 0
    },
    animation: ReactHighcharts.Highcharts.svg,
    backgroundColor: {
        linearGradient: [0, 0, 500, 500],
        stops: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(200, 200, 255)']
        ]
    },
    reflow: true
};
const title = {
    text: '集成事务一览',
    style: {
        "color": "#333333",
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
    y: 10,
    color: colors.pam,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '检查',
    y: 21,
    color: colors.exam,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '检验',
    y: 32,
    sliced: true,
    selected: true,
    color: colors.labTest,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '医嘱',
    y: 56,
    color: colors.order,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '手术',
    y: 11,
    color: colors.surgery,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '处方',
    y: 25,
    color: colors.presc,
    url: '/integration-monitor/index#/messagequery'
}, {
    name: '摆药',
    y: 31,
    color: colors.drug,
    url: '/integration-monitor/index#/messagequery'
}];
var PieChartTest = React.createClass({
    getDefaultProps: function() {
        //console.log("getDefaultProps");
    },
    getInitialState: function() {
        //console.log("getInitialState");
        return { data: {} };
    },
    componentDidMount() {
        //let chart = this.refs.chart.getChart();
        //chart.setOptions();
    },
    componentWillMount: function() {
        //console.log("componentWillMount");
    },
    componentWillUnmount: function() {
        //clearInterval(this.interval);
    },
    render: function() {
        //console.log("render");
        var series = [{
            type: 'pie',
            name: '所占比重',
            data: dataDefault
        }];
        var config = {
            chart: chart,
            title: title,
            tooltip: tooltip,
            plotOptions: plotOptions,
            series: series,
            credits: credits
        };
        return ( < ReactHighcharts config = { config }
            ref = "piechart" / > );
    }
});
export default PieChartTest
