import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {showModal && (
        <Modal onClose={onClose} closeButtonTitle='Test Model'>
          <label>Hello</label>
          <input type='text'></input>
          <button title='text'>Button</button>
          <label>Hello</label>
          <input type='text'></input>
          <button title='text'>Button</button>
          <label>Hello</label>
          <input type='text'></input>
          <button title='text'>Button</button>
        </Modal>
      )}
    </>
  );
}
export default App;
