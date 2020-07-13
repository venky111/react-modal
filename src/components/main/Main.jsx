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
    <div className='Main'>
      <Modal buttonTitle='Login' onClose={onLogin}>
        <LoginForm />
      </Modal>
      <Modal buttonTitle='SignUp' closeOnEsc={false} onClose={onSignUp}>
        <SignUpForm />
      </Modal>
    </div>
  );
};

export default Main;
