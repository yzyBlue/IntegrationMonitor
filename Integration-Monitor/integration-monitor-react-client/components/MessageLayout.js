
import React from 'react'
import PageTitle from './PageTitle'
import MessageContentWrapper from './MessageContentWrapper'
var MessageLayout=React.createClass({
     render: function () {
            return (
              <div id="layout">
                <div className="wrap clearfix">
                    <PageTitle />
                    <MessageContentWrapper/>
                </div>
              </div>
            );
        }
});
export default MessageLayout;
