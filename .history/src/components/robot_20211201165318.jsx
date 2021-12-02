import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [value, setValue] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    let value = e.target.value;
    setValue(value);
  };

  const handleClick = () => {
    let newPosition = {};
    let xPos = 1;
    let yPos = 5;
    newPosition = { x: xPos, y: yPos };
    setPosition(newPosition);
    console.log(position);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="value" type="text" value={value} />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{value}</h1>
    </React.Fragment>
  );
};

export default Robot;
