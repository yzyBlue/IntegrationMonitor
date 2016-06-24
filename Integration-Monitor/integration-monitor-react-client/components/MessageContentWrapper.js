
import React from 'react'
import MessageContent from './MessageContent'

var MessageContentWrapper=React.createClass({
    render: function () {
        return (
            <div className="content no-sidebar" id="root">
                <div>
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <div className="box">
                                <div className="widget-normal">
                                    <div className="widget-content" style={{display: 'block'}}>
                                        <MessageContent url="/integration-monitor/message-event/query"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
});
export default MessageContentWrapper;
