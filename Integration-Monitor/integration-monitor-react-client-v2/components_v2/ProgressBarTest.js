import React from 'react';
import { ProgressBar  } from 'react-bootstrap';
var ProgressBarTest = React.createClass({
  render:function(){
    return (<ProgressBar bsStyle="success" active now={45} />)
  }
});

export default ProgressBarTest