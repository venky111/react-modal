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
    console.log('this is called');
    setShowModal(false);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {showModal && (
        <Modal onClose={onClose}>
          <label>Hello</label>
        </Modal>
      )}
    </>
  );
}
export default App;
