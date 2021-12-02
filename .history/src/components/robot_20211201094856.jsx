import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const { position, setPosition } = useState({ x: 0, y: 0 });
  const { value, setValue } = useState('');

  const handleChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    setValue(value);
  };

  return (
    <React.Fragment>
      <form>
        <input
          onChange={handleChange}
          name="instructions"
          type="text"
          value={value}
        />
        <button>Submit</button>
      </form>
      <h1>{'hello'}</h1>
    </React.Fragment>
  );
};

export default Robot;
