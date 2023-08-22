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

const marks = {
  0: '0',
  100000: '100,000',
  150000: '150,000',
  200000: '200,000',
  50000: '50,000',
};

const Login = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredCars, setFilteredCars] = useState(jsonData.cars);
  const [filter, setFilter] = useState({
    brand: '',
    carType: '',
    color: '',
    kilometers: [0, 200000],
    price: [0, 200000],
    year: [2010, 2023],
  });

  const showCarDetails = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSearch = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = jsonData.cars.filter(
      (car) =>
        car.carName.toLowerCase().includes(searchValue) ||
        car.brand.toLowerCase().includes(searchValue) ||
        car.carType.toLowerCase().includes(searchValue)
    );
    setFilteredCars(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  const applyFilter = () => {
    let filtered = jsonData.cars;

    if (filter.brand) {
      filtered = filtered.filter((car) => car.brand === filter.brand);
    }

    if (filter.year) {
      filtered = filtered.filter(
        (car) => car.year >= filter.year[0] && car.year <= filter.year[1]
      );
    }

    if (filter.kilometers) {
      filtered = filtered.filter(
        (car) =>
          car.kilometers >= filter.kilometers[0] &&
          car.kilometers <= filter.kilometers[1]
      );
    }

    if (filter.price) {
      filtered = filtered.filter(
        (car) => car.price >= filter.price[0] && car.price <= filter.price[1]
      );
    }

    if (filter.color) {
      filtered = filtered.filter((car) => car.color === filter.color);
    }

    if (filter.carType) {
      filtered = filtered.filter((car) => car.carType === filter.carType);
    }

    setFilteredCars(filtered);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <Row gutter={[16, 16]} align="top">
          <Col xs={24} sm={8} md={6} lg={4}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Search
                placeholder="Search cars"
                onSearch={handleSearch}
                style={{ width: '100%' }}
              />
              <div>
                <p>Brand:</p>
                <Menu
                  style={{ width: '100%' }}
                  selectedKeys={[filter.brand]}
                  onClick={(e) => handleFilterChange('brand', e.key)}
                >
                  <Menu.Item key="Mercedes">Mercedes</Menu.Item>
                  <Menu.Item key="BMW">BMW</Menu.Item>
                  <Menu.Item key="Audi">Audi</Menu.Item>
                  <Menu.Item key="Škoda">Škoda</Menu.Item>
                </Menu>
              </div>
              <div>
                <p>Year:</p>
                <Slider
                  range
                  marks={{ 2010: '2010', 2023: '2023' }}
                  min={2010}
                  max={2023}
                  value={filter.year}
                  onChange={(value) => handleFilterChange('year', value)}
                />
              </div>
              <div>
                <p>Kilometers:</p>
                <Slider
                  range
                  marks={marks}
                  step={10000}
                  max={200000}
                  value={filter.kilometers}
                  onChange={(value) => handleFilterChange('kilometers', value)}
                />
              </div>
              <div>
                <p>Price:</p>
                <Slider
                  range
                  marks={marks}
                  step={10000}
                  max={200000}
                  value={filter.price}
                  onChange={(value) => handleFilterChange('price', value)}
                />
              </div>
              <div>
                <p>Color:</p>
                <Input
                  placeholder="Filter by color"
                  value={filter.color}
                  onChange={(e) => handleFilterChange('color', e.target.value)}
                />
              </div>
              <div>
                <p>Car Type:</p>
                <Menu
                  style={{ width: '100%' }}
                  selectedKeys={[filter.carType]}
                  onClick={(e) => handleFilterChange('carType', e.key)}
                >
                  <Menu.Item key="SUV">SUV</Menu.Item>
                  <Menu.Item key="Limuzina">Limuzina</Menu.Item>
                  <Menu.Item key="Coupe">Coupe</Menu.Item>
                  <Menu.Item key="Kabrio">Kabrio</Menu.Item>
                  <Menu.Item key="Sportski">Sportski</Menu.Item>
                </Menu>
              </div>
              <Button type="primary" onClick={applyFilter}>
                Apply Filter
              </Button>
            </Space>
          </Col>
          <Col xs={24} sm={16} md={18} lg={20}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '100px',
                minHeight: '100vh',
                overflowX: 'auto',
              }}
            >
              <div style={{ maxWidth: '90%' }}>
                <Row gutter={[16, 16]} justify="center">
                  {filteredCars.map((car, id) => (
                    <Col key={id} xs={24} sm={12} md={8} lg={8}>
                      <Card
                        hoverable
                        style={{ margin: '8px', width: '100%' }}
                        cover={<img alt="/" src={car.image} />}
                      >
                        <Meta title={car.carName} />
                        <p>Model: {car.brand}</p>
                        <Button
                          type="primary"
                          onClick={() => showCarDetails(car)}
                        >
                          DETALJI
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
      {/* ... */}
    </Layout>
  );
};

export default Login;
