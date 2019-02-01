
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isOpen, header, content, actionOnOk} = this.props.modalOptions;
    if (!isOpen) return null;

    return (
      <div>
        <Modal isOpen={isOpen}>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>
            {content}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
