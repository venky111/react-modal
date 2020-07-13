import React, { useState } from 'react';
import { navigate } from '@reach/router';
import FormInput from '../input/input';
import CustomButton from '../custom-button/custom-button.component';

function SignUpForm() {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/dashboard');
      }}
    >
      <h1>SignUp Page</h1>
      <FormInput type='text' label='Full Name' value={fullName} onChange={e => setfullName(e.target.value)}/>
      <FormInput type='email' autoComplete='username' label='Email' value={email} onChange={e => setEmail(e.target.value)}/>
      <FormInput
        type='password'
        autoComplete='new-password'
        label='Password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <FormInput
        type='password'
        autoComplete='new-password'
        label='Confirm Password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <CustomButton type='submit' title='Submit'>SUBMIT</CustomButton>
    </form>
  );
}

export default SignUpForm;
