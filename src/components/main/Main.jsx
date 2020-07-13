import React from 'react';
import Modal from '../modal/Modal';
import SignUpForm from '../signupForm/SignUpForm';
import LoginForm from '../loginForm/LoginForm';

const Main = () => {
  const onLogin = () => {
    console.log('login clicked');
  };

  const onSignUp = () => {
    console.log('signUp clicked');
  };
  return (
    <>
      <Modal modalProps={{ title: 'Login' }} onClose={onLogin}>
        <LoginForm/>
      </Modal>
      <Modal modalProps={{ title: 'SignUp' }} onClose={onSignUp}>
        <SignUpForm/>
      </Modal>
    </>
  );
};

export default Main;