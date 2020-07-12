import React from 'react';

function Button() {
    return (
        <button
          ref={this.props.buttonRef}
          onClick={this.props.showModal}
          className="modal-button"
        >
          {this.props.triggerText}
        </button>
      );
}

export default Button;
