
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

export default class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {

  }

  render() {
    const status = this.props.isOpenModal;
    if (status == false) return null;

    return (
      <div>
        <Modal isOpen={status} toggle={this.toggle(status)} className={this.props.className}>
          {/* <ModalHeader toggle={this.toggle(status)}></ModalHeader> */}
          <ModalBody>
            {this.props.modalContent}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle()}>Do Something</Button>
            <Button color="secondary" onClick={this.toggle(status)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}