import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [positionX, setPositionX] = useState(0);
  // const [positionY, setPositionY] = useState(0);

  const [instruction, setInstructions] = useState('');

  const handleChange = (e) => {
    let input = e.target;
    //let name = e.target.name;
    let instructions = input.value;

    setValue(instructions);
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
          name="instructions"
          type="text"
          value={instructions}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{instructions}</h1>
    </React.Fragment>
  );
};

export default Robot;
