import React from 'react'
import IntegrationService from './IntegrationService'
import { Button, Modal } from 'react-bootstrap'
var HeaderModal = React.createClass({
	getInitialState:function() {
    	return { showModal: false };
  	},
  	close:function() {
    	this.setState({ showModal: false });
  	},
  	open:function() {
    	this.setState({ showModal: true });
  	},
	  render:function(){
	    return (
	    <div>
	    	<Button bsStyle="primary" bsSize="small" onClick={this.open}>
	            Launch demo modal
	        </Button>
	        <Modal show={this.state.showModal} onHide={this.close()}>
	            <Modal.Header closeButton>
	                <Modal.Title>用户中心</Modal.Title>
	            </Modal.Header>
	            <Modal.Body>
	                <h4>Text in a modal</h4>
	                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
	            </Modal.Body>
	            <Modal.Footer>
	                <Button onClick={this.close()}>Close</Button>
	            </Modal.Footer>
	        </Modal>
	    </div>
	    )
	  }
});
export default HeaderModal