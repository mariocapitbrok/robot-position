import React from 'react';
import { useState, useEffect } from 'react';

const style = {
  input: {
    marginLeft: '20px',
  },
};

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
      case 'e':
        setMovements(movements + 'U');
        setY(y + 1);
        break;
      case 'd':
        setMovements(movements + 'D');
        setY(y - 1);
        break;
      case 's':
        setMovements(movements + 'L');
        setX(x - 1);
        break;
      case 'f':
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
          <li>Press "e" for going up.</li>
          <li>Press "d" for going down.</li>
          <li>Press "s" for going left.</li>
          <li>Press "f" for going right.</li>
        </ul>
        <input
          style={style.input}
          onChange={handleChange}
          name="value"
          type="text"
          value={value}
        />
      </form>
      <h1>Robot position</h1>
      <h2>
        x:{x}, y:{y}
      </h2>
    </React.Fragment>
  );
};

export default Robot;
