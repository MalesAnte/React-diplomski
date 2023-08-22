import {
  Layout,
  Typography,
  Input,
  Button,
  Space,
  Card,
  Col,
  Row,
  Modal,
  Menu,
  Slider,
} from 'antd';
import React, { useState } from 'react';

import jsonData from '../../api/data.json';

const { Meta } = Card;
const { Content, Footer } = Layout;
const { Search } = Input;
const { Title } = Typography;

const SelectCar = () => {
  return (
    <>
      <h1 style={{ background: 'red' }}>Ante</h1>
    </>
  );
};

export default SelectCar;
