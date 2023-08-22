import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const menu = [
  {
    id: '1',
    name: 'Find your car',
    url: '/ipz',
  },
  {
    id: '2',
    name: 'Sell or trade in',
    url: '/',
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
const PublicLayout = ({ children }) => {
  const location = useLocation();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          alignItems: 'center',
          display: 'flex',
          padding: '0px 30px',
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}
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
    </Layout>
  );
};
export default PublicLayout;
