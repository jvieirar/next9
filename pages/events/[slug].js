import React from 'react';
// nextjs babel configuration takes care of importing React, we don't need to do it

import { useRouter } from 'next/router';

import MainLayout from '../../components/layouts/MainLayout';

const Event = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <MainLayout>
      <h1>{slug}</h1>
    </MainLayout>
  );
};

export default Event;
