import React from 'react';
import { useState, useEffect } from 'react';

const Robot = () => {
  const [value, setValue] = useState('');
  const [movements, setMovements] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log(movements);
  });

  const createMovements = (value) => {
    const valueArr = [...value];
    if (valueArr.length === 0) {
      setValue('');
      return;
    }
    let move = valueArr.pop();
    //console.log(move);
    switch (move) {
      case 'u':
        setMovements(movements + 'U');
        setY(y + 1);
        break;
      case 'd':
        setMovements(movements + 'D');
        setY(y - 1);
        break;
      case 'l':
        setMovements(movements + 'L');
        setX(x - 1);
        break;
      case 'r':
        setMovements(movements + 'R');
        setX(x + 1);
        break;
      default:
        break;
    }
    setValue(move);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    createMovements(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <h1>Instructions</h1>
        <ul>
          <li>Press "u" for going up.</li>
        </ul>
        <input onChange={handleChange} name="value" type="text" value={value} />
      </form>
      <h1>Robot position</h1>
      <h2>
        x:{x}, y:{y}
      </h2>
    </React.Fragment>
  );
};

export default Robot;
