import React from 'react';
import ModalContent from './ModalContent';
import Button from '../button/button';
import tabbable from '../tabbable';
class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
    this.props.onClose();
  };

  onKeyDown = (e) => {
    let focusableElements = [];
    focusableElements = tabbable(document.getElementById('modal'));
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];
    if (e.keyCode === 27) {
      this.closeModal();
    }
    if (e.keyCode === 9 || e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      } else if (
        !e.shiftKey &&
        document.activeElement === lastFocusableElement
      ) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    }
  };
  render() {
    return (
      <>
        <Button
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerText={this.props.modalProps.title}
          className='custom-button'
        />
        {this.state.show ? (
          <ModalContent
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
          >
            {this.props.children}
          </ModalContent>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Modal;
