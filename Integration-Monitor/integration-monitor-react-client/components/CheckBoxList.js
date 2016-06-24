
import React from 'react'

var CheckBoxList=React.createClass({
    render: function(){
        return (
            <div className="widget-tools">
                <ul>
                    <li style={{'marginRight': '20px'}}><label></label></li>
                    <li><label><input type="checkbox"/><span>ADT</span></label></li>
                    <li><label><input type="checkbox"/><span>检查</span></label></li>
                    <li><label><input type="checkbox"/><span>检验</span></label></li>
                    <li><label><input type="checkbox"/><span>医嘱</span></label></li>
                    <li><label><input type="checkbox"/><span>手术</span></label></li>
                    <li><label><input type="checkbox"/><span>摆药</span></label></li>
                    <li><label><input type="checkbox"/><span>费用</span></label></li>
                    <li><button className="btn-blue btn-xs" type="button">
                            <i className="iconfont icon-refresh"></i>
                        </button></li>
                    <li><button className="btn-blue btn-xs" type="button">重置</button></li>
                </ul>
                <div className="text-align-right">
                    <button className="btn-blue btn-sm" type="button">下载报表</button>
                </div>
            </div>
        );
    }
});
export default CheckBoxList;
