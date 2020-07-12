import React from 'react';

function Button(props) {
  return (
    <button
      ref={props.buttonRef}
      onClick={props.showModal}
      className='modal-button'
    >
      {props.triggerText}
    </button>
  );
}

export default Button;
