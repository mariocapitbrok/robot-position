import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const { position, setPosition } = useState({ x: 0, y: 0 });
  const { value, setValue } = useState('');

  useEffect(() => {
    console.log('Test');
  });

  const handleClick = () => {};

  const handleSubmit = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    setPosition = 'Result';
  };

  const handleChange = () => {
    setValue('Hello');
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
        <button>Submit</button>
      </form>
      <h1>{position}</h1>
    </React.Fragment>
  );
};

export default Robot;
