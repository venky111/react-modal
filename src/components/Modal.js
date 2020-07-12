import React, { Component } from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div className='modal'>
      <div className='header'>{props.title}</div>
      <div className='body'> {props.children}</div>
      <div className='footer'>
        <button
          onClick={() => {
            props.onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
