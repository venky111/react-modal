import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

function ModalContent(props) {
  return createPortal(
    <aside
      tag='aside'
      role='dialog'
      tabIndex='-1'
      aria-modal='true'
      id='modal'
      className='modal'
      onKeyDown={props.onKeyDown}
    >
      <div className='header'>
        <button
          onClick={() => {
            props.closeModal();
          }}
          data-testid='modalClose'
          ref={props.buttonRef}
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
