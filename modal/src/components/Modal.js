import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

function Modal(props) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) props.onClose();
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  });
  return createPortal(
    <aside className='modal'>
      <div className='header'>{props.title}</div>
      <div className='body'> {props.children}</div>
      <div className='footer'>
        {props.close()}
        <button
          onClick={() => {
            props.onClose();
          }}
          title={props.closeButtonTitle}
        ></button>
      </div>
    </aside>,
    document.body
  );
}

export default Modal;
