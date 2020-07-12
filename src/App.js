import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Dashboard } from './components/forms/Dashboard';
import { Main } from './components/forms/Main';

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
