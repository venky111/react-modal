import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import tabbable from './tabbable';
import './Modal.css';

function Modal(props) {
  Modal.modalTrigger = document.activeElement;
  useEffect(() => {
    const focusableElements = tabbable(document.getElementById('modal'));
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];
    firstFocusableElement.focus();
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        Modal.modalTrigger.focus();
        props.onClose();
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
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  return createPortal(
    <aside id='modal' className='modal'>
      <div className='header'>{props.title}</div>
      <div className='body'> {props.children}</div>
      <div className='footer'>
        <button
          onClick={() => {
            Modal.modalTrigger.focus();
            props.onClose();
          }}
          title={props.closeButtonTitle}
        >
          {props.closeButtonTitle}
        </button>
      </div>
    </aside>,
    document.body
  );
}

export default Modal;
