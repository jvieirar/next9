import React from 'react';

import { Form, Field } from '@leveluptuts/fresh';

const HabitForm = props => {
  // properties
  const { setHabits } = props;

  // methods
  const handleSubmit = data => {
    setHabits(prevState => [...prevState, data.habit]);
  };

  // render
  return (
    <Form onSubmit={handleSubmit}>
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
