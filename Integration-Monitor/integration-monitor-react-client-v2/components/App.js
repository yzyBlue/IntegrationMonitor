import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import DropDown from './DropDown'
import Statistics from './Statistics'
var App=React.createClass({
  render() {
    return (
    <div >
    	<div className="header">
	        <Header/>
	        <Navigation/>
	        <DropDown/>
		  </div>
    	{this.props.children || <Statistics/>}
      <Footer/>
     </div>
    )
  }
});
export default App
