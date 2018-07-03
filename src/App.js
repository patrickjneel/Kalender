import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from './components/Months';
import InputArea from './components/InputArea';

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      month: 'June'
    }
  }

  handleEvents = (event) => {
    const allEvents = this.state.events
    this.setState({ events: [...allEvents, event] })
  }

  changeMonth = (newMonth) => {
      this.setState({ month: newMonth })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Kalender</h1>
         <img className="flag" src={require('./flag-waving-250.png')} />
        </header>
        <InputArea  
          handleEvents={this.handleEvents}  
          changeMonth={this.changeMonth}
          month={this.state.month}
        />
        <Month events={this.state.events} month={this.state.month}/>
      </div>
    );
  }
}

export default App;
