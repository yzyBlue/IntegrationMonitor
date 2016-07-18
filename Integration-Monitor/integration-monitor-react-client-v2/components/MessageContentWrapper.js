
import React from 'react'
import MessageContent from './MessageContent'
import IntegrationService from './IntegrationService'
var MessageContentWrapper=React.createClass({
    render: function () {
        var url=IntegrationService.MessageEventService.queryMessageEventByMap;
        return (
            <div className="content no-sidebar" id="root">
                <div>
                    <div className="pure-g">
                        <div className="pure-u-1">
                            <div className="box">
                                <div className="widget-normal">
                                    <div className="widget-content" style={{display: 'block'}}>
                                        <MessageContent url={url}/>
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
