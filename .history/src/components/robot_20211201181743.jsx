import React from 'react';
import { useState, useEffect } from 'react';

const Robot = () => {
  const [value, setValue] = useState('');
  const [movements, setMovements] = useState('');
  //const [x, setX] = useState(0);
  // const [ y, setY ] = useState(0);

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
        break;
      case 'l':
        setMovements(movements + 'L');
        break;
      case 'r':
        setMovements(movements + 'R');
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

  const handleClick = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="value" type="text" value={value} />
        <button onClick={handleClick}>Submit</button>
      </form>
      <h1>value: {value}</h1>
      <h1>position: {}</h1>
    </React.Fragment>
  );
};

export default Robot;
