import { Layout, Typography, Card, Row, Col, Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import jsonData from '../../api/data.json';

const { Meta } = Card;
const { Content } = Layout;
const { Title } = Typography;

const SelectCar = () => {
  const [car, setCar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Dodajemo stanje za praćenje selektovane slike
  const { carId } = useParams();

  useEffect(() => {
    const selectedCar = jsonData.cars.find((car) => car.id === parseInt(carId));

    setCar(selectedCar);
    setSelectedImage(selectedCar?.image); // Postavljamo početnu uvećanu sliku
  }, [carId]);

  const contentStyle = {
    background: '#364d79',
    color: '#fff',
    height: '160px',
    lineHeight: '160px',
    margin: 0,
    textAlign: 'center',
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '150px' }}>
        {car ? (
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <Card
                cover={
                  <div>
                    <Image style={{ width: '700px' }} src={selectedImage} />
                    <div style={{ display: 'flex', marginTop: '20px' }}>
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
                            style={{ cursor: 'pointer', marginRight: '25px' }}
                            onClick={() => onThumbnailClick(image)}
                          >
                            <Image style={{ width: '120px' }} src={image} />
                          </div>
                        ))}
                    </div>
                  </div>
                }
                style={{ maxWidth: '50%' }}
              ></Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12}>
              <div>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.9rem',
                    fontWeight: 'bold',
                    padding: '5px',
                    textAlign: 'center',
                  }}
                >
                  {car?.carName}
                </p>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    height: '50px',
                    marginLeft: '50px',
                    padding: '5px',
                    textAlign: 'left',
                    width: '300px',
                  }}
                >
                  Godina: {car?.year}
                </p>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    height: '50px',
                    marginLeft: '50px',
                    padding: '5px',
                    textAlign: 'left',
                    width: '300px',
                  }}
                >
                  Boja: {car?.color}
                </p>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    height: '50px',
                    marginLeft: '50px',
                    padding: '5px',
                    textAlign: 'left',
                    width: '300px',
                  }}
                >
                  Kilometraža: {car?.kilometers} km
                </p>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    height: '50px',
                    marginLeft: '50px',
                    padding: '5px',
                    textAlign: 'left',
                    width: '300px',
                  }}
                >
                  Tip: {car?.carType}
                </p>
                <p
                  style={{
                    borderRadius: 20,
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    height: '50px',
                    marginLeft: '50px',
                    padding: '5px',
                    textAlign: 'left',
                    width: '300px',
                  }}
                >
                  Gorivo: {car?.fuel}
                </p>
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
