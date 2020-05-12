import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navbar fluid collapseOnselect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Keeper</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
