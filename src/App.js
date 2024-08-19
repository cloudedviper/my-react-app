import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header'; 
import Counter from './Counter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header /> 
        <h1>Hello, React!</h1>
        <Counter />
        <Welcome name="Criss" age="40"/>
        <Welcome name="Renee" age="20"/>
        {/* Simplified image source */}
        <img src="/images/logo.jpg" alt="Fallout logo" />
        <Footer />
    </div>
  );
}

export default App;
