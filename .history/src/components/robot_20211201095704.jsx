import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const [position, setPosition] = useState(null);
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
    setPosition('Position');
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
