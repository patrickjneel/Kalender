import React, { Component } from 'react';
import './input-area.css';
import JuneData from '../JuneData';
import JulyData from '../JulyData';

class InputArea extends Component {
  constructor() {
    super()
    this.state = {
      eventDesc: '',
      day: '',
      month: ''
    }
  }

  renderDays = () => {
    return JuneData.map((day, index) => {
      if(day.day) {
        return (
          <option key={index}>{day.day}</option>
        ) 
      }
    })
  }

  handleMonth = event => {
    this.props.changeMonth(event.target.value);
    this.setState({month: event.target.value});
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleEvent = () => {
    this.props.handleEvents(this.state)
    this.setState({ eventDesc: '', day: '', month: '' })
  }

  render() {
    return (
      <div className="inputs">
        <input 
          onChange={this.handleChange}
          value={this.state.eventDesc}
          name="eventDesc"
        />
        <select
          onChange={this.handleMonth}
          name="month"
          value={this.state.month}
        >
          <option default>Select Month</option>
          <option>June</option>
          <option>July</option>
        </select>
        <select 
          onChange={this.handleChange}
          name="day"
          value={this.state.day}
        >
          <option default>Select Day</option>
            {this.renderDays()}
        </select>
        <button 
          onClick={this.handleEvent} 
          disabled={!this.state.eventDesc || this.state.day === '' || this.state.month === ''} 
        >
          Submit
        </button>
      </div>
    ) 
  }
}

export default InputArea;
