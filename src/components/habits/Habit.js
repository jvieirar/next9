import React from 'react';

import HabitButton from './HabitButton';

const colors = ['#718096', '#F56565', '#F6E05E', '#68D391', '#63B3ED'];

const Habit = props => {
  // properties
  const { habit, index } = props;
  const dates = getLast5Days();

  // render
  return (
    <article>
      <h3 style={{ borderColor: colors[index] }}>{habit}</h3>
      <div className="buttons">
        {dates.map(date => (
          <HabitButton key={date.getTime()} date={date} />
        ))}
      </div>
      <style jsx>{`
        article {
          padding: 20px;
          border-radius: 15px;
          box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
        }

        h3 {
           {
            /* because we are SSR, this wont work as expected. We have to assign the color dynamically with cssInJs */
          }
          margin-top: 0;
          border-bottom: solid 4px ${colors[index]};
        }

        .buttons {
          display: flex;
        }
      `}</style>
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
