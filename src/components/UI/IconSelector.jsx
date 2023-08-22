import { DashboardOutlined, WalletOutlined } from '@ant-design/icons';
import React from 'react';

const IconSelector = (props) => {
  const Icons = {
    DashboardOutlined: <DashboardOutlined />,
    WalletOutlined: <WalletOutlined />,
  };

  const getIcon = (type) => {
    // Default Icon when not found
    let comp = <DashboardOutlined />;

    let typeNew = type;

    // Default is Outlined when no theme was appended (ex: 'smile')
    if (!typeNew.match(/.+(Outlined|Filled|TwoTone)$/i)) {
      typeNew += 'Outlined';
    }

    // If found by key then return value which is component
    const found = Object.entries(Icons).find(
      ([k]) => k.toLowerCase() === typeNew.toLowerCase()
    );
    if (found) {
      [, comp] = found;
    }

    return comp;
  };

  return getIcon(props.type);
};

export default IconSelector;
