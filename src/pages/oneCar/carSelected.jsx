import { Layout, Typography, Card, Row, Col, Image, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

import jsonData from '../../api/data.json';
const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;

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
  url: car.image,
}));

const SelectCar = () => {
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { carId } = useParams();

  useEffect(() => {
    const selectedCar = jsonData.cars.find((car) => car.id === parseInt(carId));

    setCar(selectedCar);
  }, [carId]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
    );
  };

  const carImages = [
    car?.image,
    car?.image1,
    car?.image2,
    car?.image3,
    car?.image4,
  ].filter(Boolean);
  return (
    <Layout style={{ minHeight: '100vh', padding: '20px' }}>
      <Content>
        {car ? (
          <Row>
            <Col xs={24} sm={18} md={24} lg={14}>
              <div className="slide-container">
                <img
                  style={{ width: '100%' }}
                  src={carImages[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                />
              </div>

              <div
                className="slide-buttons"
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '10px',
                  padding: '5px',
                }}
              >
                <Button
                  type="primary"
                  danger
                  onClick={showPrevImage}
                  style={{
                    background: 'grey',
                    marginRight: '5px',
                    width: '20%',
                  }}
                >
                  <BsFillArrowLeftSquareFill size="1.4rem" />
                </Button>
                <Button
                  type="primary"
                  onClick={showNextImage}
                  style={{
                    background: 'grey',
                    marginLeft: '5px',
                    width: '20%',
                  }}
                >
                  <BsFillArrowRightSquareFill size="1.4rem" />
                </Button>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              <div
                style={{
                  fontSize: '1.8rem',
                  margin: '30px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    padding: '10px',
                  }}
                >
                  Proizvođač: <br />
                  <b>{car?.brand}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Model: <br />
                  <b>{car?.carName}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Godište: <br />
                  <b>{car?.year}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Boja: <br />
                  <b>{car?.color}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Kilometraža: <br />
                  <b>{car?.kilometers} km</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Vrsta karoserije: <br />
                  <b>{car?.carType}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Gorivo: <br />
                  <b>{car?.fuel}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Kubikaža: <br />
                  <b>{car?.motor}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Kilovati: <br />
                  <b>{car?.kw} kW</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '10px',
                    padding: '10px',
                  }}
                >
                  Snaga: <br />
                  <b>{car?.hp} ks</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    marginTop: '20px',
                    padding: '20px',
                  }}
                >
                  CIJENA: <br />
                  <b>
                    {' '}
                    {car?.price} €{/*<BsCurrencyEuro size="1.4rem" />*/}
                  </b>
                </div>
              </div>

              <div
                style={{
                  fontSize: '1.4rem',
                  margin: '30px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: 'auto',
                    padding: '10px',
                  }}
                >
                  <h4>Detaljni opis</h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div>Car not found.</div>
        )}
      </Content>
    </Layout>
  );
};

export default SelectCar;
