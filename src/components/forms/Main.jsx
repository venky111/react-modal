import React from 'react';
import Modal from '../modal/Modal';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

export const Main = () => {
  const onLogin = () => {
    console.log('login clicked');
  };

  const onSignUp = () => {
    console.log('signUp clicked');
  };
  return (
    <>
      <Modal modalProps={{ title: 'Login' }} onClose={onLogin}>
        <LoginForm></LoginForm>
      </Modal>
      <Modal modalProps={{ title: 'SignUp' }} onClose={onSignUp}>
        <SignUpForm></SignUpForm>
      </Modal>
    </>
  );
};
