import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './routes';

function App() {
  return (
    <BrowserRouter>
        <RouterView/>
    </BrowserRouter>
  );
}

export default App;
