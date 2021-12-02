import React from 'react';
import { useEffect, useState } from 'react';

const Robot = () => {
  const { position, setPosition } = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('Test');
  });

  return (
    <React.Fragment>
      <form action="">
        <input name="instructions" type="text" />
        <button>Submit</button>
      </form>
      <label value={'Hello'}></label>
    </React.Fragment>
  );
};

export default Robot;
