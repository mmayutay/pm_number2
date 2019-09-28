import React from 'react';
import './App.css';
import Calculator from './calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table">
        <p>
          <Calculator/>
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
