import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Dashboard from './components/dashboard/Dashboard';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Router>
        <Main path='/' />
        <Dashboard path='dashboard' />
      </Router>
    </>
  );
}
export default App;
