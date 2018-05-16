import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from './components/Months';
import InputArea from './components/InputArea';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Kalender</h1>
        </header>
        <InputArea />
        <Month />
      </div>
    );
  }
}

export default App;
