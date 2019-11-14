import React from 'react';
import Habit from './Habit';

const HabitList = props => {
  // properties
  const { habits } = props;

  // render
  return (
    <section>
      <h2>My habits</h2>
      {habits.map((habit, index) => (
        <Habit key={habit} habit={habit} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
