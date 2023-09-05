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
} from 'antd';
import React, { useState, useEffect } from 'react';
import { AiFillCar, AiOutlineCalendar } from 'react-icons/Ai';
import { BsCurrencyEuro, BsFuelPumpFill } from 'react-icons/Bs';
import { TbRoad } from 'react-icons/Tb';
import { TfiMoney } from 'react-icons/Tfi';
import { Link } from 'react-router-dom';

import '../../assets/styles/public.css';
import jsonData from '../../api/data.json';
import imageBg from '../../assets/images/span.png';
const { Meta } = Card;
const { Content, Footer } = Layout;
const { Search } = Input;
const { Title } = Typography;

const Ipz = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [randomCars, setRandomCars] = useState({});

  const showCarDetails = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedCar(null);
    setModalVisible(!modalVisible);
  };

  // Grupisanje automobila po kategorijama
  const groupedCars = {};
  jsonData.cars.forEach((car) => {
    const { carType } = car;
    if (!groupedCars[carType]) {
      groupedCars[carType] = [];
    }
    groupedCars[carType].push(car);
  });

  // 4 random auta
  const pickRandomCars = (carsArray) => {
    const shuffledCars = carsArray.sort(() => 0.5 - Math.random());
    return shuffledCars.slice(0, 4);
  };

  // Effect hook to select 4 random cars for each category when the component mounts
  useEffect(() => {
    const randomCarsData = {};
    Object.entries(groupedCars).forEach(([carType, cars]) => {
      const randomCars = pickRandomCars(cars);
      randomCarsData[carType] = randomCars;
    });
    setRandomCars(randomCarsData);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout
        style={{
          backgroundImage: `url(${imageBg}) `,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginBottom: '70px',
          padding: '67px',
        }}
      >
        <Content
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 64px - 134px)',
          }}
        >
          <Title
            level={2}
            style={{
              color: 'white',
              fontSize: '40px',
              fontWeight: 'bold',
              marginBottom: 30,
              textAlign: 'center',
            }}
          >
            Find the car that's searching for you.
          </Title>

          <Search
            style={{
              height: '60px',
              maxWidth: '700px',
              padding: 10,
              width: '90%',
            }}
            placeholder="Search..."
            enterButton="Search"
            size="large"
          />
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              marginBottom: 30,
              marginTop: 20,
              maxWidth: '700px',
              width: '90%',
            }}
          >
            <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
            <div style={{ color: '#ccc', margin: '0 10px' }}>or</div>
            <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
          </div>
          <Space wrap>
            <Link to="/cars">
              <Button
                type="primary"
                danger
                style={{
                  height: '45px',
                  maxWidth: '700px',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                Browse all cars
              </Button>
            </Link>
          </Space>
        </Content>
      </Layout>
      <Content>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '100px',
            minHeight: '100vh',
            overflowX: 'auto',
            width: '100%',
          }}
        >
          <div style={{ maxWidth: '95%' }}>
            {/* Prikazivanje kartica po kategorijama sa 4 random automobila */}
            {Object.entries(randomCars).map(([carType, cars]) => (
              <div key={carType}>
                <Title
                  level={2}
                  style={{
                    color: '#FF5757',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    marginLeft: '10px', // Adjust margin for smaller screens
                  }}
                >
                  {carType}
                </Title>
                <Row gutter={[16, 16]} justify="center">
                  {cars.map((car) => (
                    <Col key={car.id} xs={24} sm={12} md={8} lg={6}>
                      <Card
                        onClick={() => showCarDetails(car)}
                        hoverable
                        style={{
                          border: `5px solid #D3D3D3`,
                          margin: '10px',
                          padding: '20px',
                          textAlign: 'center',
                          width: '100%',
                        }}
                        cover={
                          <img
                            alt=""
                            src={car.image}
                            style={{
                              height: '280px',
                              objectFit: 'cover',
                            }}
                          />
                        }
                      >
                        <Meta title={car.carName} />

                        <Space direction="vertical" size={1}>
                          <h5
                            style={{
                              alignItems: 'center',
                              display: 'flex',
                              fontSize: '1.1rem',
                              fontWeight: 'bold',
                              marginLeft: '10px',
                            }}
                          >
                            <AiOutlineCalendar
                              size="1.5rem"
                              style={{ marginRight: '10px' }}
                            />
                            {car.year}
                            <p
                              style={{
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginLeft: '10px',
                                marginRight: '10px',
                              }}
                            >
                              |
                            </p>
                            <p
                              style={{
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                              }}
                            >
                              <TbRoad
                                size="1.5rem"
                                style={{ marginRight: '10px' }}
                              />
                              {car.kilometers} km
                            </p>
                            <p
                              style={{
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginLeft: '10px',
                                marginRight: '10px',
                              }}
                            >
                              |
                            </p>
                            <p
                              style={{
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                              }}
                            >
                              <BsFuelPumpFill
                                size="1.2rem"
                                style={{ marginRight: '10px' }}
                              />
                              {car.fuel}
                            </p>
                          </h5>

                          <p
                            style={{
                              border: `2px dashed red`,
                              borderRadius: 20,
                              fontSize: '1.9rem',
                              fontWeight: 'bold',
                              padding: '5px',
                              textAlign: 'center',
                            }}
                          >
                            Cijena: {car.price}
                            <BsCurrencyEuro size="1.4rem" />
                          </p>
                          <div
                            style={{
                              fontSize: '25px',
                              fontWeight: 'bold',
                            }}
                          ></div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        </div>
      </Content>
      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        width={1000}
        height={1000}
        footer={[
          <Link to="/oneCar">
            <Button
              type="primary"
              key="close"
              onClick={handleModalClose}
              style={{ marginRight: '5px', width: '100px' }}
            >
              Vidi više
            </Button>
          </Link>,
        ]}
      >
        {selectedCar && (
          <div>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>
              {selectedCar.carName}
            </h1>

            <img
              src={selectedCar.image}
              alt="Car"
              style={{ marginBottom: '10px', width: '100%' }}
            />
            {/*<img*/}
            {/*  src={selectedCar.image1}*/}
            {/*  alt="Car"*/}
            {/*  style={{ marginBottom: '10px', width: '100%' }}*/}
            {/*/>*/}
            {/*<img*/}
            {/*  src={selectedCar.image2}*/}
            {/*  alt="Car"*/}
            {/*  style={{ marginBottom: '10px', width: '100%' }}*/}
            {/*/>*/}
            {/*<img*/}
            {/*  src={selectedCar.image3}*/}
            {/*  alt="Car"*/}
            {/*  style={{ marginBottom: '10px', width: '100%' }}*/}
            {/*/>*/}
            {/*<img*/}
            {/*  src={selectedCar.image4}*/}
            {/*  alt="Car"*/}
            {/*  style={{ marginBottom: '10px', width: '100%' }}*/}
            {/*/>*/}
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default Ipz;
