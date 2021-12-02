import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [position, setPosition] = useState([{ x: 0, y: 0 }]);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

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
    let arr = position;
    let pos = { x: 1, y: 2 };
    arr = [pos, ...arr];
    setPosition(arr);
    console.log(arr);
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
      <h1>{value}</h1>
    </React.Fragment>
  );
};

export default Robot;
