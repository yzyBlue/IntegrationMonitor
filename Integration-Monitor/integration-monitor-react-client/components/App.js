import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import Statistics from './Statistics'
var App=React.createClass({
  render() {
    return (
    <div >
    	<div className="header">
	        <Header/>
	        <Navigation/>
		  </div>
    	{this.props.children || <Statistics/>}
      <Footer/>
     </div>
    )
  }
});
export default App
