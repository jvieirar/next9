import React, { useState } from 'react';

const HabitButton = props => {
  // properties
  const { date } = props;
  const [complete, setComplete] = useState(false);

  // render
  return (
    <span>
      {date.getDate()} / {date.getMonth() + 1}
      <button onClick={() => setComplete(!complete)}>{complete ? 'X' : 'O'}</button>
    </span>
  );
};

export default HabitButton;
