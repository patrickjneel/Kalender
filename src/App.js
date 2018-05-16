import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from './components/Months';
import InputArea from './components/InputArea';

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  handleEvents = (event) => {
    const allEvents = this.state.events
    
    this.setState({ events: [...allEvents, event] })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Kalender</h1>
        </header>
        <InputArea  handleEvents={this.handleEvents}/>
        <Month />
      </div>
    );
  }
}

export default App;
