import { Layout, Typography, Card, Row, Col, Carousel, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { TbRoad } from 'react-icons/tb';
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Proizvođač: <br />
                  <b>{car?.brand}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Model: <br />
                  <b>{car?.carName}</b>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Godište: <br />
                  <b>{car?.year}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Boja: <br />
                  <b>{car?.color}</b>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Kilometraža: <br />
                  <b>{car?.kilometers} km</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Tip: <br />
                  <b>{car?.carType}</b>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Gorivo: <br />
                  <b>{car?.fuel}</b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Kubikaža: <br />
                  <b>{car?.motor}</b>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Kilovata [KW]: <br />
                  <b></b>
                </div>
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '80px',
                    marginLeft: '20px',
                    padding: '10px',
                    width: '300px',
                  }}
                >
                  Broj vrata: <br />
                  <b></b>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: '1.4rem',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    border: `2px solid #D3D3D3`,
                    borderRadius: 20,
                    height: '500px',
                    marginLeft: '50px',
                    marginRight: '20px',
                    padding: '10px',
                    width: '645px',
                  }}
                >
                  <h4>OPIS</h4>
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
