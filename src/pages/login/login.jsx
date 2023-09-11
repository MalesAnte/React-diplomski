import { Layout, Card } from 'antd';
import React, { useState, useEffect } from 'react';

import '../../assets/styles/public.css';

const { Meta } = Card;
const { Content, Footer } = Layout;

const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <h1 style={{ color: 'red' }}>ANTE</h1>
      </Content>
    </Layout>
  );
};

export default Login;
