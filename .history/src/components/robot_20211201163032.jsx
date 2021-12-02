import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [movement, setMovement] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    let input = e.target;
    let movement = input.value;
    setMovement(movement);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    let newPosition = {};
    let xPos = 1;
    let yPos = 5;
    newPosition = { x: xPos, y: yPos };
    setPosition(newPosition);
    console.log(position);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="movement"
          type="text"
          value={movement}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{movement}</h1>
    </React.Fragment>
  );
};

export default Robot;
