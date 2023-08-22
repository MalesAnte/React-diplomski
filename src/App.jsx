import React from 'react';

import FloatBtn from './components/UI/FloatBtn';
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import { MainRouter } from './router/MainRouter';
const App = () => {
  const Layout = PublicLayout;

  return (
    <>
      <Layout>
        <MainRouter />
        <FloatBtn />
      </Layout>
    </>
  );
};

export default App;
