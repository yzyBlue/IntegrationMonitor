import React from 'react'
import ReactDOM from 'react-dom'
import { DateField } from 'react-date-picker'
import 'react-date-picker/index.css'

var DatePicker = React.createClass({
  render:function(){
     return (<DateField dateFormat="YYYY-MM-DD HH:mm:ss"/>)
  }
});
export default DatePicker