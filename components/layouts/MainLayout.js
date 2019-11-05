import React from 'react';
import Head from 'next/head';

import Nav from '../nav';

const MainLayout = props => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{props.children}</main>
    </div>
  );
};

export default MainLayout;
