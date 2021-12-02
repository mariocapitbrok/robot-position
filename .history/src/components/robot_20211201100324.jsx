import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(1);
  const [position, setPosition] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setPositionX(1);
    setPositionY(2);

    let arr = [];
    let position = { x: 1, y: 2 };
    arr = [position, ...arr];
    setPosition(arr);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="instructions"
          type="text"
          value={value}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>{position}</h1>
    </React.Fragment>
  );
};

export default Robot;
