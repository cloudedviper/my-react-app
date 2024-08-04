import React from 'react';
import './App.css';
import Welcome from './Welcome';
import logo from './Assets/Images/logo.jpg';


function App() {
  return (
    <div className="App">
        <h1>Hello, React!</h1>
        <Welcome name="Cloud" />
        <Welcome name="Renee" />
        <img src={logo} alt="Logo" />
    </div>
  );
}


export default App;
