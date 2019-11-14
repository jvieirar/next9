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
      <style jsx>{`
        span {
          display: flex;
          flex-direction: column;
        }
        span + span {
          margin-left: 10px;
        }
        button {
          margin-top: 1rem;
          border: none;
        }
      `}</style>
    </span>
  );
};

export default HabitButton;
