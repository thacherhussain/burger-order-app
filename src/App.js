import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
        {/* <Header /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Burger Order App 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button>Halp. Escaped Doggo on the loose!</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
