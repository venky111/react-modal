import React from 'react';
import './App.css';
import Modal from './components/modal/Modal';

function App() {
  const onLogin = () => {
    console.log('login clicked');
  };

  const onSignUp = () => {
    console.log('signUp clicked');
  };
  return (
    <>
      <Modal modalProps={{ title: 'Login' }} onClose={onLogin}>
        <label>Hello</label>
        <button>TestButton</button>
        <label>Hello</label>
        <button>TestButton</button>
        <label>Hello</label>
        <button>TestButton</button>
      </Modal>
      <Modal modalProps={{ title: 'SignUp' }} onClose={onSignUp}>
        <label>Hello</label>
        <button>TestButton</button>
        <label>Hello</label>
        <button>TestButton</button>
        <label>Hello</label>
        <button>TestButton</button>
      </Modal>
    </>
  );
}
export default App;
