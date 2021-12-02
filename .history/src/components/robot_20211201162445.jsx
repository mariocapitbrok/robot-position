import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [positionX, setPositionX] = useState(0);
  // const [positionY, setPositionY] = useState(0);

  const [positions, setpositions] = useState('');

  const handleChange = (e) => {
    let input = e.target;
    let positions = input.value;
    setpositions(positions);
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
          name="positions"
          type="text"
          value={positions}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{positions}</h1>
    </React.Fragment>
  );
};

export default Robot;
