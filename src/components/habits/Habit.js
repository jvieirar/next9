import React from 'react';

import HabitButton from './HabitButton';

const Habit = props => {
  return (
    <article>
      <h3>Habit title</h3>
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
