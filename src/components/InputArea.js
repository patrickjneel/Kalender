import React from 'react';
import './input-area.css';

const InputArea = () => {
  return (
    <div className="inputs">
      <input />
      <select>
        <option>Select Month</option>
        <option>June</option>
        <option>July</option>
      </select>
      <select>
        <option>Select Day</option>
        <option>1</option>
        <option>2</option>
      </select>
      <button>Submit</button>
    </div>
  )
}

export default InputArea;
