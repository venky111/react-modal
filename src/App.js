import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Dashboard from './components/dashboard/Dashboard';
import Main from './components/main/Main';

function App() {
  return (
    <div className='App'>
      <h1>React Modal App</h1>
      <div className='body'>
      <Router>
        <Main path='/' />
        <Dashboard path='dashboard' />
      </Router>
      </div>
    </div>
  );
}
export default App;
