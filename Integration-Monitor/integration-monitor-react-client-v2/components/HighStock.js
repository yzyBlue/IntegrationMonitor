import React from 'react'
import ReactHighstock from '../node_modules/react-highcharts/dist/ReactHighstock.src'
import IntegrationService from './IntegrationService'

const chart = {
    alignTicks: false,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    zoomType: 'xy'
};
const legend = {
    enabled: false
};

var navigator = {
    outlineColor: '#333333'
};

var scrollbar = {
    barBackgroundColor: '#9DC7F1',
    barBorderRadius: 4,
    barBorderWidth: 0,
    buttonBackgroundColor: '#9DC7F1',
    buttonBorderWidth: 0,
    buttonArrowColor: 'yellow',
    buttonBorderRadius: 4,
    rifleColor: 'white',
    trackBackgroundColor: 'white',
    trackBorderWidth: 1,
    trackBorderColor: 'silver',
    trackBorderRadius: 4
};
var navigation = {
    menuItemStyle: {
        fontWeight: 'normal',
        background: '#7CB5EC',
        color: 'rgba(0,0,0,1)'
    },
    menuItemHoverStyle: {
        fontWeight: 'bold',
        background: 'none',
        color: 'white'
    },
    menuStyle: {
        border: '1px solid #A0A0A0',
        background: '#ddd'
    }
};
const labels = {
    style: {
        color: '#000000',
        fontSize: '10px',
        borderRadius: '4px',
        borderWidth: '2px'
    }
};
const yAxis = {
    gridLineWidth: 1,
    gridLineColor: '#F4F4F4'
};
const xAxis = {
    gridLineWidth: 1,
    gridLineColor: '#F4F4F4',
    type: 'datetime',
    dateTimeLabelFormats: {
        second: '%Y-%m-%d<br/>%H:%M:%S',
        minute: '%Y-%m-%d<br/>%H:%M',
        hour: '%Y-%m-%d<br/>%H:%M',
        day: '%Y<br/>%m-%d',
        week: '%Y<br/>%m-%d',
        month: '%Y-%m',
        year: '%Y'
    }
};
const plotOptions = {
    column: {
        color: '#70D0EE',
        borderColor: '#303030'
    },
    areaspline: {
        showCheckbox: true
    },
    series: {
        borderColor: '#ddd',
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.f}'
        },
        animation: {
            duration: 2000
        },
        marker: {
            enabled: true
        }
    }
};
const credits = {
    enabled: false
};
var tooltip = {
    pointFormat: '{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
};
const exporting = {
    enabled: true
};
var HighStock = React.createClass({
    getInitialState: function() {
        //console.log("getInitialState");
        return { data: [], percent: [] };
    },
    loadDataFromServer: function() {
        var url = IntegrationService.MessageStatisticService.getStatisticList;
        $.ajax({
            url: url,
            method: 'POST',
            dataType: 'json',
            data: '{}',
            contentType: 'application/json; charset=UTF-8',
            cache: false,
            success: function(data) {
                if (this.isMounted) {
                    this.setState({ data: this.getDataList(data.reverse()), percent: this.getPercentList(data.reverse()) });
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        })
    },
    getDataList: function(data) {
        var arrayList = [];
        if (data != null) {
            for (var i = 0; i < data.length; i++) {
                var arrayItem = {
                    x: Date.parse(new Date(data[i].recordDate)),
                    y: data[i].allCount,
                    color: 'rgba(133, 217, 153,0.8)'
                };
                arrayList.push(arrayItem);
            }
        }
        return arrayList;
    },
    getPercentList: function(data) {
        var arrayList = [];
        if (data != null) {
            var sum = 0;
            for (var i = 0; i < data.length; i++) {
                sum = sum + data[i].allCount;
            }
            for (var i = 0; i < data.length; i++) {
                var percentItem = sum == 0 ? 0 : (data[i].allCount / sum * 100).toFixed(1);
                var arrayItem = {
                    x: Date.parse(new Date(data[i].recordDate)),
                    y: parseFloat(percentItem),
                    color: 'rgba(133, 217, 153,0.8)'
                };
                arrayList.push(arrayItem);
            }
        }
        return arrayList;
    },
    componentDidMount: function() {
        this.loadDataFromServer();
        this.interval = setInterval(this.loadDataFromServer(), 60000);
    },
    componentWillMount: function() {
        //console.log("componentWillMount");
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        var config = {
            chart: chart,
            rangeSelector: {
                selected: 1
            },
            plotOptions: plotOptions,
            labels: labels,
            xAxis: xAxis,
            yAxis: yAxis,
            exporting:exporting,
            scrollbar: scrollbar,
            credits: credits,
            navigator: navigator,
            navigation: navigation,
            title: {
                text: '消息事件统计详情',
                style: { color: "#333333", fontSize: "20px" }
            },
            // plotOptions:plotOptions,
            series: [{
                type: 'areaspline',
                name: '消息数目',
                data: this.state.data,
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b><br/>'
                }
            }, {
                type: 'column',
                name: '所占比例',
                data: this.state.percent,
                tooltip: {
                    valueSuffix: '%',
                    pointFormat: '{series.name}: <b>{point.y}</b>'
                }
            }]
        };
        return ( < ReactHighstock config = { config }
            ref = "highStock" / > );
    }
});
export default HighStock
