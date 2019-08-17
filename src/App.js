import React from 'react';
import cleaner from './cleaner.jpg'
import './App.css';
import NavbarPage from './Navi'

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <header className="App-header">
        
        <img src={cleaner} className="App-logo" alt="logo" />
        <p>
          Nando's Cleaning Services
        </p>
      </header>
    </div>
  );
}

export default App;