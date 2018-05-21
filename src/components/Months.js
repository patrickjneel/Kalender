import React, { Component } from 'react';
import './months.css';
import JuneData from '../JuneData';
import JulyData from '../JulyData';

class Month extends Component {
  
  showEvents = () => {
    if(this.props.events.length) {
      return this.props.events.map((event, index) => {
        return (
          <div key={index}>
            {event.eventDesc}
          </div>
        )
      })
    }
  }

  daysShown = () => {
    return JuneData.map((day, index) => {
      return (
        <div key={index} className="days-month">
          <p className="individual-day">{day.day}</p>
          <p>{day.event}</p>
          <p>{this.showEvents()}</p>
        </div>
      )
    })
  }

  render() {    
    return (
      <div className="calendar">
        <span className="current-month">June</span>
        <div className="calendar-body">
        <div className="weekdays">
          <span className="days">Sunday</span>
          <span className="days">Monday</span>
          <span className="days">Tuesday</span>
          <span className="days">Wednesday</span>
          <span className="days">Thursday</span>
          <span className="days">Friday</span>
          <span className="days">Saturday</span>
        </div>
        <div className="dates">
          {this.daysShown()}
        </div>
        </div>
      </div>
    )
  }
}

export default Month;
