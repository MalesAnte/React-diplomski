import { Layout, Typography, Card, Row, Col, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsCurrencyEuro } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import jsonData from '../../api/data.json';
const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;

const SelectCar = () => {
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { carId } = useParams();

  useEffect(() => {
    const selectedCar = jsonData.cars.find((car) => car.id === parseInt(carId));

    setCar(selectedCar);
    setSelectedImage(selectedCar?.image);
  }, [carId]);

  const onThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Layout style={{ minHeight: '100vh', padding: '20px' }}>
      <Content
      // style={{ margin: '0 auto', maxWidth: '1200px', padding: '50px 10px' }}
      >
        {car ? (
          <Row>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Card
                cover={
                  <div
                    style={{
                      height: 'auto',
                      maxWidth: '100%',
                    }}
                  >
                    <Image src={selectedImage} />
                    <div
                      style={{
                        alignItems: 'center',
                        display: 'flex',
                        marginTop: '20px',
                      }}
                    >
                      {car.image &&
                        [
                          car.image,
                          car.image1,
                          car.image2,
                          car.image3,
                          car.image4,
                        ].map((image, index) => (
                          <div
                            key={index}
                            style={{ cursor: 'pointer', marginRight: '10px' }}
                            onClick={() => onThumbnailClick(image)}
                          >
                            <Image
                              style={{
                                marginLeft: '2px',
                                padding: '5px',
                                width: '105px',
                              }}
                              src={image}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                }
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div style={{ fontSize: '1.4rem' }}>
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
                    marginTop: '20px',
                    padding: '20px',
                  }}
                >
                  CIJENA:
                  <b>
                    {' '}
                    {car?.price} <BsCurrencyEuro size="1.4rem" />
                  </b>
                </div>
              </div>

              <div style={{ fontSize: '1.4rem', marginTop: '20px' }}>
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
                  like Aldus PageMaker including versions of Lorem Ipsum.
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
