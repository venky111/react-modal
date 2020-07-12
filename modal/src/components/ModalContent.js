import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import tabbable from './tabbable';
import './Modal.css';

function ModalContent(props) {
  Modal.modalTrigger = document.activeElement;
  useEffect(() => {
    const focusableElements = tabbable(document.getElementById('modal'));
    if (focusableElements === null) return () => {};
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
    <aside
      tag='aside'
      role='dialog'
      tabIndex='-1'
      aria-modal='true'
      id='modal'
      className='modal'
    >
      <div className='header'>
        <div>
          <p>{props.closeButtonTitle}</p>
        </div>
        <button
          onClick={() => {
            props.onClose();
          }}
          className='_modal-close'
        >
          <span className='_hide-visual'>Close</span>
          <svg className='_modal-close-icon' viewBox='0 0 40 40'>
            <path d='M 10,10 L 30,30 M 30,10 L 10,30' />
          </svg>
        </button>
      </div>
      <div className='body'> {props.children}</div>
    </aside>,
    document.body
  );
}

export default ModalContent;
