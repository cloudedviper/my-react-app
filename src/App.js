import React from 'react';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <Welcome name="Cloud" />
        <Welcome name="Renee" />
      </header>
    </div>
  );
}

export default App;
