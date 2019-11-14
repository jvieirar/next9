import React from 'react';
import Habit from './Habit';

const HabitList = props => {
  return (
    <section>
      <h2>My habits</h2>
      <Habit />
      <Habit />
      <Habit />
    </section>
  );
};

export default HabitList;
