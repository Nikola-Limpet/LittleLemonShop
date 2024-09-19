import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Nav />
      <ToastContainer />
      <Main />
    </> 
  );
}

export default App;