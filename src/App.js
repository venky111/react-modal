import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Toggle from './components/toggle/toggle';

function App() {
  const [showModal, setShowModal] = useState(false);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShowModal(true);
  // };

  const onClose = () => {
    return <Toggle><Button/></Toggle>
  };
  const { Button, On, Off } = Toggle;
  return (
    <>
    <Toggle>
      <Button/>
      <On>
        <Modal onClose={onClose}>
          <label>Hello</label>
        </Modal>
      </On>
      <Off>
        <div>I'm Off</div>
      </Off>
    </Toggle>
    </>
  );
}
export default App;
