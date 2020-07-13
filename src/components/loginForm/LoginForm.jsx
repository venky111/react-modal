import React, { useState } from 'react';
import { navigate } from '@reach/router';
import FormInput from '../input/input';
import CustomButton from '../custom-button/custom-button.component';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/dashboard');
      }}
    >
      <h1>Login Page</h1>
      <FormInput type='email' autoComplete='username' label='Email' value={email} onChange={e => setEmail(e.target.value)}></FormInput>
      <FormInput
        type='password'
        autoComplete='current-password'
        label='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      ></FormInput>
      <CustomButton type='submit' title='Submit'>SUBMIT</CustomButton>
    </form>
  );
}

export default LoginForm;
