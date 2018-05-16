import React, { Component } from 'react';
import './months.css';

class Month extends Component {
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
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Month;
