import React from 'react';
import '../custom-button/custom-button.styles.scss';

function Button(props) {
  return (
    <button
      ref={props.buttonRef}
      onClick={props.showModal}
      className='custom-button'
    >
      {props.triggerText}
    </button>
  );
}

export default Button;
