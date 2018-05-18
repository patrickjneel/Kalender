import React, { Component } from 'react';
import './input-area.css';
import JuneData from '../JuneData';

class InputArea extends Component {
  constructor() {
    super()
    this.state = {
      eventDesc: '',
      day: null,
      month: ''
    }
  }

  renderDays = () => {
    return JuneData.map((day, index) => {
      return (
        <option key={index}>{day.day}</option>
      )
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })

  }

  handleEvent = () => {
    this.props.handleEvents(this.state)
    this.setState({eventDesc: '', day: null, month: ''})
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
          onChange={this.handleChange}
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
          ref="day"
        >
          <option default>Select Day</option>
          {this.renderDays()}
        </select>
        <button onClick={this.handleEvent}>
          Submit
        </button>
      </div>
    ) 
  }
}

export default InputArea;
