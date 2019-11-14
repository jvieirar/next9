import React from 'react';

import HabitButton from './HabitButton';

const Habit = props => {
  // properties
  const { habit } = props;
  const dates = getLast5Days();

  // render
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map(date => (
          <HabitButton key={date.getMilliseconds()} date={date} />
        ))}
      </div>
    </article>
  );
};

export default Habit;

const getLast5Days = () => {
  const dates = '01234'.split('').map(day => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });
  return dates;
};
