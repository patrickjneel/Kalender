import React, { Component } from 'react';
import './months.css';
import JuneData from '../JuneData';
import JulyData from '../JulyData';

class Month extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  daysShown = () => {
    return JuneData.map((day, index) => {
      return (
        <div key={index}>
          <p key={`${index}${day}`}>{day.day}</p>
          <p key={index}>{day.event}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="calendar">
        <span className="current-month">June</span>
        <table>
          <tbody>
            <tr>
              <th className="days">Sunday</th>
              <th className="days">Monday</th>
              <th className="days">Tuesday</th>
              <th className="days">Wednesday</th>
              <th className="days">Thursday</th>
              <th className="days">Friday</th>
              <th className="days">Saturday</th>
            </tr>
            <tr>
              {this.daysShown()}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Month;
