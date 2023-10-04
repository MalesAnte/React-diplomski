import { Layout, Card, Col, Row, Space } from 'antd';
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import jsonData from '../../api/data.json';

const { Meta } = Card;
const { Content, Footer } = Layout;

const spanStyle = {
  background: '#efefef',
  color: '#000000',
  padding: '20px',
};

const divStyle = {
  alignItems: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  height: '400px',
  justifyContent: 'center',
};
const carImages = jsonData.cars.map((car, index) => ({
  caption: car.carName,
  url: car.image,
}));
const Login = () => {
  return (
    <div className="slide-container">
      <Fade>
        {carImages.map((carImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={carImage.url} />
            <h2>{carImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Login;
