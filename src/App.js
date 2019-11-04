import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './elements';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Main app - React 16.11
      </header>
      <div className="App-body">
        <div className="angular-app">
          Angular app
          <angular-app></angular-app>
        </div>
        <div className="react-app">
          React app
          <react-app></react-app>
        </div>
      </div>
    </div>
  );
}

export default App;
