import React from 'react';
import { navigate } from '@reach/router';

function SignUpForm(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/dashboard');
      }}
    >
      <h1>SignUp Page</h1>
      <label htmlFor='fullName'>Full Name:</label>
      <input type='text' placeholder='Full Name'></input>
      <label htmlFor='email'>Email</label>
      <input type='email' autoComplete='username' placeholder='a@b.com'></input>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        autoComplete='new-password'
        placeholder='******'
      ></input>
      <label htmlFor='confirm password'>Confirm Password</label>
      <input
        type='password'
        autoComplete='new-password'
        placeholder='******'
      ></input>
      <input type='submit' title='Submit'></input>
    </form>
  );
}

export default SignUpForm;
