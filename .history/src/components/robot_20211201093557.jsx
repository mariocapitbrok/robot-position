import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const { position, setPosition } = useState(null);

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

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input name="instructions" type="text" />
        <button>Submit</button>
      </form>
      <h1>{position}</h1>
    </React.Fragment>
  );
};

export default Robot;
