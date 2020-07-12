import React from 'react';
import { navigate } from '@reach/router';

function LoginForm(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/dashboard');
      }}
    >
      <h1>Login Page</h1>
      <label htmlFor='email'>Email</label>
      <input type='email' autoComplete='username' placeholder='a@b.com'></input>
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        autoComplete='current-password'
        placeholder='******'
      ></input>
      <input type='submit' title='Submit'></input>
    </form>
  );
}

export default LoginForm;
