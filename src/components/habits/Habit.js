import React from 'react';

import HabitButton from './HabitButton';

const Habit = props => {
  // properties
  const { habit } = props;

  // render
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
        <HabitButton />
      </div>
    </article>
  );
};

export default Habit;
