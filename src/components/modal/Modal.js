import React from 'react';
import ModalContent from './ModalContent';
import Button from '../button/button';
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  showModal = () => {
    this.setState({ show: true }, () => {
      this.closeButton.focus();
    });
  };
  closeModal = () => {
    this.setState({ show: false });
    this.TriggerButton.focus();
  };
  render() {
    return (
      <React.Fragment>
        <Button
          showModal={this.showModal}
          buttonRef={n => (this.TriggerButton = n)}
          triggerText={this.props.modalProps.triggerText}
        />
        {this.state.show ? (
          <ModalContent
            modalRef={n => (this.modal = n)}
            buttonRef={n => (this.closeButton = n)}
            closeModal={this.closeModal}
            content={this.props.modalContent}
          />
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
