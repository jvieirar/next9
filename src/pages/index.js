import React, { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import HabitList from '../components/habits/HabitList';
import HabitForm from '../components/habits/HabitForm';

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

import { withApollo } from '../services/apollo';
import MainLayout from '../components/layouts/MainLayout';

const Home = () => {
  // properties
  const { data, loading, error } = useQuery(HELLO_QUERY);
  const [habits, setHabits] = useState(['React training', 'Design patterns']);

  // render
  if (loading) {
    return <div>Loading...</div>;
  } else {
    console.log({ data });

    return (
      <MainLayout>
        <div className="hero">
          <h1 className="title">Habit tracker</h1>
          <div className="habitList">
            <HabitForm setHabits={setHabits} />
            <HabitList habits={habits} />
          </div>
        </div>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin-top: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .habitList {
            max-width: 600px;
            margin: 0 auto;
          }
        `}</style>
      </MainLayout>
    );
  }
};

export default withApollo(Home);
