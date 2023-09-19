import { Layout, Card, Col } from 'antd';
import React, { useState, useEffect } from 'react';

import '../../assets/styles/public.css';

const { Meta } = Card;
const { Content, Footer } = Layout;

const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div>
            <div>
              <h1>ANTE</h1>
            </div>
            <div>
              <h1>ANTE</h1>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div>
            <div>
              <h1>ANTE</h1>
            </div>
            <div>
              <h1>ANTE</h1>
            </div>
          </div>
        </Col>
      </Content>
    </Layout>
  );
};

export default Login;
