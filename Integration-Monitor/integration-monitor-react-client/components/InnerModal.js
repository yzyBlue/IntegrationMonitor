import React from 'react'
import {Button,Modal } from 'react-bootstrap';

var InnerModal = React.createClass({
  getInitialState() {
    return { show: false };
  },
 
  render() {
    let close = () => this.setState({ show: false});
    //console.log(JSON.stringify(this.props.data));
    var response=this.props.data.response;
    console.log(response);
    return (
      <div className="modal-container" style={{height: 'auto'}}>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={() => this.setState({ show: true})}
        >
          {this.props.data.status}
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">处理详情</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {response}
          </Modal.Body>
          <Modal.Footer>
            	<Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
export default InnerModal;