import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header'; 

function App() {
  return (
    <div className="App">
        <Header /> 
        <h1>Hello, React!</h1>
        <Welcome name="Cloud" age="30"/>
        <Welcome name="Renee" age="20"/>
        <img src={`${process.env.PUBLIC_URL}images/logo.jpg`} alt="logo" />
    </div>
  );
}

export default App;

