import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Row, Col, Space } from 'antd';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../assets/images/logo.png';

const { Header, Content } = Layout;

const menu = [
  {
    id: '1',
    name: 'POČETNA',

    url: '/ipz',
  },
  {
    id: '2',
    name: 'PONUDA VOZILA',
    url: '/cars',
  },
  {
    id: '3',
    name: 'VOZILA U DOSLASKU!',
    url: '/incomingVehicles',
  },
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
      icon: React.createElement(icon),
      key: `sub${key}`,
      label: `subnav ${key}`,
    };
  }
);

const Footer = () => {
  return (
    <div
      style={{
        background: '#001529', // Set your desired background color here
        color: '#fff',
        padding: '100px',
        textAlign: 'center',
      }}
    >
      <Row gutter={[16, 16]}>
        {/* First row */}
        <Col xs={24} sm={6}>
          <h3>Popularne marke</h3>
          <Space direction="vertical">
            <span>Mercedes</span>
            <span>BMW</span>
            <span>Audi</span>
            <span>Škoda</span>
            <span>Volkswagen</span>
          </Space>
        </Col>

        {/* Second row */}
        <Col xs={24} sm={12} md={12} lg={6}>
          <h3>Tip auta</h3>
          <Space direction="vertical">
            <span>SUV</span>
            <span>Limuzina</span>
            <span>Coupe</span>
            <span>Sportski</span>
            <span>Kabriolet</span>
          </Space>
        </Col>

        {/* Third row */}
        <Col xs={24} sm={6}>
          <h3>About Me</h3>
          <p>O meni</p>
        </Col>

        {/* Fourth row */}
        <Col xs={24} sm={6}>
          <h3>Follow Me</h3>
          <Space>
            <a
              href="https://www.facebook.com/antemales3?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined />
            </a>
            <a
              href="https://x.com/Mega187777?t=5ZmnDCI6lVxFX7YYaUgdaQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterOutlined />
            </a>
            <a
              href="https://instagram.com/ante.males_99?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramOutlined />
            </a>
          </Space>
        </Col>
      </Row>
      <br />
      <br />

      <Row gutter={[16, 16]}>
        {/* Last row - Centered Text */}
        <Col xs={24} sm={12} md={12} lg={24}>
          <h3
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UEDR
          </h3>
        </Col>
      </Row>
    </div>
  );
};

const PublicLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Layout>
      {/*<Header*/}
      {/*  style={{*/}
      {/*    alignItems: 'center',*/}
      {/*    display: 'flex',*/}
      {/*    padding: '0px 30px',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <img*/}
      {/*    src={logo}*/}
      {/*    alt="Logo"*/}
      {/*    style={{ marginRight: '50px', width: '175px' }}*/}
      {/*  />*/}
      {/*  <Menu*/}
      {/*    style={{ width: '100vh' }}*/}
      {/*    theme="dark"*/}
      {/*    mode="horizontal"*/}
      {/*    defaultSelectedKeys={['/']}*/}
      {/*    selectedKeys={[location.pathname]}*/}
      {/*    items={menu.map((item) => ({*/}
      {/*      key: item.id,*/}
      {/*      label: (*/}
      {/*        <NavLink*/}
      {/*          key={item.id}*/}
      {/*          to={item.url}*/}
      {/*          className={({ isActive }) => (isActive ? 'active' : '')}*/}
      {/*        >*/}
      {/*          {item.name}*/}
      {/*        </NavLink>*/}
      {/*      ),*/}
      {/*    }))}*/}
      {/*  />*/}
      {/*</Header>*/}

      <Header style={{ alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          items={menu.map((item) => ({
            key: item.id,
            label: (
              <NavLink
                key={item.id}
                to={item.url}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.name}
              </NavLink>
            ),
          }))}
        />
      </Header>

      <Layout>
        <Layout>
          <Content
            style={{
              margin: '0px 0px 50px 0px',
              minHeight: '100vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>

      <Footer />
    </Layout>
  );
};

export default PublicLayout;
