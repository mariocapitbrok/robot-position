import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [input, setinput] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e) => {
    let input = e.target;
    let input = input.value;
    setinput(input);
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
        <input onChange={handleChange} name="input" type="text" value={input} />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{input}</h1>
    </React.Fragment>
  );
};

export default Robot;
