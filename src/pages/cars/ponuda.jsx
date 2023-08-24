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
  Select,
  InputNumber,
  Pagination,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { BsCurrencyEuro } from 'react-icons/Bs';
import { Link } from 'react-router-dom';

import jsonData from '../../api/data.json';
import SelectCar from '../oneCar/carSelected';
const { Meta } = Card;
const { Content } = Layout;
const { Search } = Input;
const { Title } = Typography;
const { Option } = Select;

const ITEMS_PER_PAGE = 12;

const Ponuda = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredCars, setFilteredCars] = useState(jsonData.cars);
  const [filter, setFilter] = useState({
    brand: '',
    color: '',
    maxKilometers: 200000,
    maxPrice: 200000,
    maxYear: 2023,
    minKilometers: 0,
    minPrice: 0,
    minYear: 2015,
    model: '',
  });
  const [brandsCount, setBrandsCount] = useState({});
  const [selectedModel, setSelectedModel] = useState('');

  // Logika za paginaciju
  const [currentPage, setCurrentPage] = useState(1);

  // Dodajte stanje za resetiranje filtera
  const [resetFilter, setResetFilter] = useState(false);

  useEffect(() => {
    // Primijenite filtre kada korisnik primijeni nove vrijednosti
    applyFilter();
  }, [filter, selectedModel, currentPage, resetFilter]);

  useEffect(() => {
    // Prikaz broja automobila po brendu
    const brandCounts = jsonData.cars.reduce((counts, car) => {
      const { brand } = car;
      counts[brand] = (counts[brand] || 0) + 1;
      return counts;
    }, {});
    setBrandsCount(brandCounts);
  }, []);

  const showCarDetails = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedCar(null);
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

  const handleBrandSelect = (brand) => {
    const models = jsonData.cars.filter((car) => car.brand === brand);
    setFilter((prevFilter) => ({
      ...prevFilter,
      brand,
      model: '',
    }));
    setSelectedModel('');
    setFilteredCars(models);
  };

  const handleModelSelect = (model) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      model,
    }));
    setSelectedModel(model);
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

    if (filter.model) {
      filtered = filtered.filter((car) => car.carName === filter.model);
    }

    filtered = filtered.filter(
      (car) => car.year >= filter.minYear && car.year <= filter.maxYear
    );

    filtered = filtered.filter(
      (car) =>
        car.kilometers >= filter.minKilometers &&
        car.kilometers <= filter.maxKilometers
    );

    filtered = filtered.filter(
      (car) => car.price >= filter.minPrice && car.price <= filter.maxPrice
    );

    if (filter.color) {
      filtered = filtered.filter((car) => car.color === filter.color);
    }

    if (filter.carType) {
      filtered = filtered.filter((car) => car.carType === filter.carType);
    }

    // Resetiranje filtera
    if (resetFilter) {
      setFilter({
        brand: '',
        carType: '',
        color: '',
        maxKilometers: 200000,
        maxPrice: 200000,
        maxYear: 2023,
        minKilometers: 0,
        minPrice: 0,
        minYear: 2015,
        model: '',
      });
      setSelectedModel('');
      setFilteredCars(jsonData.cars);
      setCurrentPage(1);
      setResetFilter(false);
    }

    setFilteredCars(filtered);
  };

  // Izračunaj indekse prvog i posljednjeg automobila za trenutnu stranicu
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Dohvati podskup automobila za trenutnu stranicu
  const currentCars = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Dodajte reset dugme
  const handleResetFilter = () => {
    setFilter({
      brand: '',
      carType: '',
      color: '',
      maxKilometers: 200000,
      maxPrice: 200000,
      maxYear: 2023,
      minKilometers: 0,
      minPrice: 0,
      minYear: 2015,
      model: '',
    });
    setSelectedModel('');
    setFilteredCars(jsonData.cars);
    setCurrentPage(1);
    setResetFilter(true);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content
        style={{
          height: '100%',
          marginLeft: '15px',
          marginRight: '15px',
          marginTop: '35px',
        }}
      >
        <Row gutter={[16, 16]} align="top">
          <Col xs={24} sm={8} md={6} lg={4}>
            <Space
              direction="vertical"
              style={{
                border: `2px solid #D3D3D3`,
                borderRadius: '20px',
                marginLeft: '20px',
                padding: '20px',
                width: '100%',
              }}
            >
              <h1 style={{ fontSize: '15px', textAlign: 'center' }}>
                TRAŽILICA
              </h1>
              <Search
                placeholder="Brza pretraga..."
                onSearch={handleSearch}
                style={{ width: '100%' }}
              />
              <div>
                <p>Brand:</p>
                <Select
                  style={{ width: '100%' }}
                  value={filter.brand}
                  onChange={handleBrandSelect}
                >
                  <Option value="">All Brands</Option>
                  {Object.keys(brandsCount).map((brand) => (
                    <Option key={brand} value={brand}>
                      {brand} ({brandsCount[brand]})
                    </Option>
                  ))}
                </Select>
              </div>
              {filter.brand && (
                <div>
                  <p>Model:</p>
                  <Select
                    style={{ width: '100%' }}
                    value={filter.model}
                    onChange={handleModelSelect}
                  >
                    <Option value="">All Models</Option>
                    {jsonData.cars
                      .filter((car) => car.brand === filter.brand)
                      .map((car) => (
                        <Option key={car.carName} value={car.carName}>
                          {car.carName}
                        </Option>
                      ))}
                  </Select>
                </div>
              )}
              <div>
                <p>Godište:</p>
                <Space>
                  <InputNumber
                    min={2015}
                    max={2023}
                    value={filter.minYear}
                    onChange={(value) => handleFilterChange('minYear', value)}
                  />
                  <span>-</span>
                  <InputNumber
                    min={2015}
                    max={2023}
                    value={filter.maxYear}
                    onChange={(value) => handleFilterChange('maxYear', value)}
                  />
                </Space>
              </div>
              <div>
                <p>Kilometraža:</p>
                <Space>
                  <InputNumber
                    min={0}
                    max={200000}
                    value={filter.minKilometers}
                    onChange={(value) =>
                      handleFilterChange('minKilometers', value)
                    }
                  />
                  <span>-</span>
                  <InputNumber
                    min={0}
                    max={200000}
                    value={filter.maxKilometers}
                    onChange={(value) =>
                      handleFilterChange('maxKilometers', value)
                    }
                  />
                </Space>
              </div>
              <div>
                <p>Cijena:</p>
                <Space>
                  <InputNumber
                    min={0}
                    max={200000}
                    value={filter.minPrice}
                    onChange={(value) => handleFilterChange('minPrice', value)}
                  />
                  <span>-</span>
                  <InputNumber
                    min={0}
                    max={200000}
                    value={filter.maxPrice}
                    onChange={(value) => handleFilterChange('maxPrice', value)}
                  />
                </Space>
              </div>
              <div>
                <p>Boja:</p>
                <Select
                  style={{ width: '100%' }}
                  value={filter.color}
                  onChange={(value) => handleFilterChange('color', value)}
                >
                  <Option value="">All Colors</Option>
                  <Option value="Black">Crna</Option>
                  <Option value="White">Bijela</Option>
                  <Option value="Silver">Silver</Option>
                  <Option value="Blue">Plava</Option>
                  <Option value="Gray">Siva</Option>
                  <Option value="Red">Crvena</Option>
                </Select>
              </div>
              <div style={{ marginBottom: '60px' }}>
                <p>Tip:</p>
                <Select
                  style={{ width: '100%' }}
                  value={filter.carType}
                  onChange={(value) => handleFilterChange('carType', value)}
                >
                  <Option value="">Svi</Option>
                  <Option value="SUV">SUV</Option>
                  <Option value="Limuzina">Limuzina</Option>
                  <Option value="Coupe">Coupe</Option>
                  <Option value="Sportski">Sportski</Option>
                  <Option value="Kabriolet">Kabriolet</Option>
                </Select>
              </div>
              <Button type="primary" onClick={applyFilter}>
                Apply Filter
              </Button>
              <Button type="primary" danger onClick={handleResetFilter}>
                Reset Filter
              </Button>
            </Space>
          </Col>
          <Col xs={24} sm={16} md={18} lg={20}>
            <div
              style={{
                border: `2px solid #D3D3D3 `,
                borderRadius: '20px',
                justifyContent: 'center',
                marginBottom: '100px',
                marginLeft: '20px',
                marginRight: '20px',
                minHeight: '100vh',
                overflowX: 'auto',
                padding: '10px',
              }}
            >
              <div style={{ maxWidth: '93%' }}>
                <Row gutter={[16, 16]} justify="center">
                  {currentCars.map((car, id) => (
                    <Col key={id} xs={24} sm={12} md={8} lg={8}>
                      <Link to={`/car/${car.id}`}>
                        <Card
                          hoverable
                          style={{
                            border: `2px solid #D3D3D3 `,
                            marginLeft: '50px',
                            marginRight: '50px',
                            marginTop: '50px',
                            padding: '10px',
                            width: '100%',
                          }}
                          cover={
                            <img
                              alt=""
                              src={car.image}
                              style={{
                                height: '300px',
                                objectFit: 'cover',
                              }}
                            />
                          }
                        >
                          <Meta title={car.carName} />

                          <p style={{ fontWeight: 'bold' }}>
                            Brand: {car.brand}
                          </p>
                          <p style={{ fontWeight: 'bold' }}>
                            Godina: {car.year}
                          </p>
                          <p style={{ fontWeight: 'bold' }}>
                            Kilometraža: {car.kilometers} km
                          </p>
                          <p style={{ fontWeight: 'bold' }}>
                            Gorivo: {car.fuel}
                          </p>
                          <p style={{ fontWeight: 'bold' }}>
                            Tip: {car.carType}
                          </p>
                          <p
                            style={{
                              border: `2px dashed red`,
                              borderRadius: 20,
                              color: 'black',
                              fontSize: '1.9rem',
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}
                          >
                            Cijena: {car.price}
                            <BsCurrencyEuro size="1.4rem" />
                          </p>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                  }}
                >
                  <Pagination
                    current={currentPage}
                    pageSize={ITEMS_PER_PAGE}
                    total={filteredCars.length}
                    onChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Ponuda;
