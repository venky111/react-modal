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
        <Modal
          onClose={onClose}
          close={() => {
            return <Button></Button>;
          }}
          title='Test Model'
        >
          <label>Hello</label>
        </Modal>
      )}
    </>
  );

  function Button() {
    return <button>close</button>;
  }
}
export default App;
