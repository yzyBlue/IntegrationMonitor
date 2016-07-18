import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'
var LoginIndex=React.createClass({
  render() {
    return (
    <div >
    	<div className="header">
	        <Header/>
	        <DropDown/>
		  </div>
    	{this.props.children || <Index/>}
      <Footer/>
     </div>
    )
  }
});
export default LoginIndex