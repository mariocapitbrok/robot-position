import react from 'react';
import React from 'react';

const Robot = () => {
  const { position, setPosition } = useState({ x: 0, y: 0 });

  useEffect(() => {});

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
