import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
// import Toggle from './components/toggle/toggle';

function App() {
  const [showModal, setShowModal] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShowModal(true);
  // };

  // const { Button } = Toggle;
  return (
    <>
    {/* <Toggle>
      <Button/>
      <Toggle.On>
      <Modal show={Toggle.On}>
        {console.log(<Toggle.On/>)}
        <label>Hello</label>
      </Modal>
      </Toggle.On>
      
    </Toggle> */}
    </>
  );
}
export default App;
