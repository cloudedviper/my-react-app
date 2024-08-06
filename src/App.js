import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header'; // Import the Header component
import logo from './Assets/Images/logo.jpg';

function App() {
  return (
    <div className="App">
        <Header /> {/* Use the Header component */}
        <h1>Hello, React!</h1>
        <Welcome name="Cloud" />
        <Welcome name="Renee" />
        <Header />
        <img src={logo} alt="Logo" />
    </div>
  );
}

export default App;
