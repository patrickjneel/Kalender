import React, { Component } from 'react';
import './months.css';
import JuneData from '../JuneData';
import JulyData from '../JulyData';

class Month extends Component {
  
  showEvents = (currentDay) => {
    return this.props.events.map((event, index) => {   
      if(event.day == currentDay.day){
        return <div className="specific-day" key={index}>{event.eventDesc}</div>
      }    
    })
  }

  daysShown = () => {
    return JuneData.map((day, index) => {
      return (
        <div key={index} className="days-month">
          <p className="individual-day">{day.day}</p>
          <p>{day.event}</p>
          <div>{this.showEvents(day)}</div>
        </div>
      )
    })
  }

  shownMonth = () => {
    if(this.props.length) {
      return this.props.map(month => {
        console.log(month)
      })
    }
  }

  render() { 
    return (
      <div className="calendar">
        <span className="current-month">{this.shownMonth}</span>
        <div className="calendar-body">
        <div className="weekdays">
          <span className="days">Søndag</span>
          <span className="days">Mandag</span>
          <span className="days">Tirsdag</span>
          <span className="days">Onsdag</span>
          <span className="days">Torsdag</span>
          <span className="days">Fredag</span>
          <span className="days">Lørdag</span>
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
