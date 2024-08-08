import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header'; // Import the Header component

function App() {
  return (
    <div className="App">
        <Header /> {/* Use the Header component */}
        <h1>Hello, React!</h1>
        <Welcome name="Cloud" age="30"/>
        <Welcome name="Renee" age="20"/>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="logo" />
    </div>
  );
}

export default App;

