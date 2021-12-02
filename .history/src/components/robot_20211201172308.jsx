import React from 'react';
import { useState } from 'react';

const Robot = () => {
  const [value, setValue] = useState('');
  // const { x, setX } = useState(0);
  // const { y, setY } = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === 0) return;
    const valueArr = [...value];
    let move = valueArr.pop();
    console.log(move);
    switch (move) {
      case 'u':
        console.log('up');
      case 'd':
        console.log('down');
      case 'l':
        console.log('left');
      case 'r':
        console.log('right');
      default:
        break;
    }

    setValue(move);
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
      <h1>{value}</h1>
    </React.Fragment>
  );
};

export default Robot;
