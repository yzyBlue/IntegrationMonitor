import React from 'react';
import {render} from 'react-dom';
import Pikaday from 'react-pikaday';

var ManualExample = React.createClass({
  getInitialState: function() {
    return {
      date: null
    };
  },

  handleChange: function(date) {
    this.setState({
      date: date
    });
  },

  render: function() {
    var date = this.state.date;
    var formattedDate = date ? date.toDateString() : 'not set';

    return (
      <div>
        <p>
          The date is {formattedDate}
        </p>
        <p>
          <Pikaday value={date} onChange={this.handleChange} />
        </p>
        <button onClick={() => {this.handleChange(null);}}>
          Clear date
        </button>
      </div>
    );
  }
});


var Examples = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Manual Example</h1>
        <ManualExample />
      </div>
    );
  }
});

render(<Examples />, document.getElementById('container'));