// // import { Layout, Input, Typography, Button, Space, Card } from 'antd';
// // import React from 'react';
// //
// // const { Meta } = Card;
// // import imageBg from '../../assets/images/span.png';
// // import '../../assets/styles/public.css';
// //
// // const { Content } = Layout;
// // const { Search } = Input;
// // const { Title } = Typography;
// //
// // const Ipz = () => {
// //   return (
// //     <Layout style={{ minHeight: '100vh' }}>
// //       <Layout
// //         style={{
// //           backgroundImage: `url(${imageBg}) `,
// //           backgroundPosition: 'center',
// //           backgroundSize: 'cover',
// //         }}
// //       >
// //         <Content
// //           style={{
// //             alignItems: 'left',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             justifyContent: 'center',
// //             marginLeft: '50px',
// //           }}
// //         >
// //           <Title
// //             level={2}
// //             style={{
// //               color: 'white',
// //               fontSize: '80px',
// //               fontWeight: 'bold',
// //               marginBottom: 30,
// //               marginLeft: '10px',
// //               textAlign: 'left',
// //             }}
// //           >
// //             Find the car that's
// //             <br /> searching for you.
// //           </Title>
// //
// //           <Search
// //             style={{
// //               height: '100px',
// //               padding: 10,
// //               width: '700px',
// //             }}
// //             placeholder="Pretraži..."
// //             enterButton="Pretraži"
// //             size="medium"
// //           />
// //           <div
// //             style={{
// //               alignItems: 'center',
// //               display: 'flex',
// //               marginBottom: 50,
// //               marginLeft: '10px',
// //               width: '680px',
// //             }}
// //           >
// //             <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
// //             <div style={{ color: '#ccc', margin: '0 10px' }}>or</div>
// //             <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
// //           </div>
// //           <Space wrap>
// //             <Button
// //               type="primary"
// //               danger
// //               style={{
// //                 height: '45px',
// //                 marginLeft: '10px',
// //                 width: '688px',
// //               }}
// //             >
// //               Browse all cars
// //             </Button>
// //           </Space>
// //         </Content>
// //       </Layout>
// //     </Layout>
// //   );
// // };
// //
// // export default Ipz;
// // import {
// //   LaptopOutlined,
// //   NotificationOutlined,
// //   UserOutlined,
// // } from '@ant-design/icons';
// // import { Breadcrumb, Layout, Menu, theme } from 'antd';
// // import React from 'react';
// // import { NavLink, useLocation } from 'react-router-dom';
// //
// // import logo from '../assets/images/logo.png';
// // const { Header, Content, Sider } = Layout;
// // const menu = [
// //   {
// //     id: '1',
// //     name: 'Find your car',
// //     url: '/ipz',
// //   },
// //   {
// //     id: '2',
// //     name: 'Sell or trade in',
// //     url: '/',
// //   },
// // ];
// // const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
// //   (icon, index) => {
// //     const key = String(index + 1);
// //     return {
// //       children: new Array(4).fill(null).map((_, j) => {
// //         const subKey = index * 4 + j + 1;
// //         return {
// //           key: subKey,
// //           label: `option${subKey}`,
// //         };
// //       }),
// //       icon: React.createElement(icon),
// //       key: `sub${key}`,
// //       label: `subnav ${key}`,
// //     };
// //   }
// // );
// // const PublicLayout = ({ children }) => {
// //   const location = useLocation();
// //   const {
// //     token: { colorBgContainer },
// //   } = theme.useToken();
// //
// //   return (
// //     <Layout>
// //       <Header
// //         style={{
// //           alignItems: 'center',
// //           display: 'flex',
// //           padding: '0px 30px',
// //         }}
// //       >
// //         <img
// //           src={logo}
// //           alt="Logo"
// //           style={{ marginRight: '50px', width: '175px' }}
// //         />
// //         <Menu
// //           style={{ width: '100vh' }}
// //           theme="dark"
// //           mode="horizontal"
// //           defaultSelectedKeys={['/']}
// //           selectedKeys={[location.pathname]}
// //           items={menu.map((item) => ({
// //             key: item.id,
// //             label: (
// //               <NavLink
// //                 key={item.id}
// //                 to={item.url}
// //                 className={({ isActive }) => (isActive ? 'active' : '')}
// //               >
// //                 {item.name}
// //               </NavLink>
// //             ),
// //           }))}
// //         />
// //         <div style={{ marginLeft: 'auto' }}>
// //           <NavLink to="/login" style={{ color: 'white', marginRight: 16 }}>
// //             Login
// //           </NavLink>
// //           <NavLink to="/register" style={{ color: 'white' }}>
// //             Register
// //           </NavLink>
// //         </div>
// //       </Header>
// //       <Layout>
// //         <Layout>
// //           <Content
// //             style={{
// //               background: colorBgContainer,
// //               margin: '0px 0px 50px 0px',
// //               minHeight: '100vh',
// //             }}
// //           >
// //             {children}
// //           </Content>
// //         </Layout>
// //       </Layout>
// //     </Layout>
// //   );
// // };
// // export default PublicLayout;
// //
//
// import {
//   Layout,
//   Typography,
//   Input,
//   Button,
//   Space,
//   Card,
//   Col,
//   Row,
//   Modal,
// } from 'antd';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from 'mdb-react-ui-kit';
// import React from 'react';
//
// import imageBg from '../../assets/images/span.png';
// import '../../assets/styles/public.css';
// import jsonData from '../../api/data.json';
//
// const { Meta } = Card;
// const { Content } = Layout;
// const { Search } = Input;
// const { Title } = Typography;
//
// const ipz = () => {
//   const [selectedCar, setSelectedCar] = React.useState(null);
//   const [modalVisible, setModalVisible] = React.useState(false);
//
//   const showCarDetails = (car) => {
//     setSelectedCar(car);
//     setModalVisible(true);
//   };
//
//   const handleModalClose = () => {
//     setModalVisible(false);
//   };
//
//   // Grupisanje automobila po kategorijama
//   const groupedCars = {};
//   jsonData.cars.forEach((car) => {
//     const { carType } = car;
//     if (!groupedCars[carType]) {
//       groupedCars[carType] = [];
//     }
//     groupedCars[carType].push(car);
//   });
//
//   // Prikazivanje prvih 4 automobila iz svake kategorije
//   const firstFourCars = {};
//   Object.entries(groupedCars).forEach(([carType, cars]) => {
//     firstFourCars[carType] = cars.slice(0, 5);
//   });
//
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Layout
//         style={{
//           backgroundImage: `url(${imageBg}) `,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           marginBottom: '70px',
//           padding: '67px',
//         }}
//       >
//         <Content
//           style={{
//             alignItems: 'center',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             minHeight: 'calc(100vh - 64px - 134px)', // Height - Footer height - Card height
//           }}
//         >
//           <Title
//             level={2}
//             style={{
//               color: 'white',
//               fontSize: '40px',
//               fontWeight: 'bold',
//               marginBottom: 30,
//               textAlign: 'center',
//             }}
//           >
//             Find the car that's searching for you.
//           </Title>
//
//           <Search
//             style={{
//               height: '60px',
//               maxWidth: '700px',
//               padding: 10,
//               width: '90%',
//             }}
//             placeholder="Search..."
//             enterButton="Search"
//             size="large"
//           />
//           <div
//             style={{
//               alignItems: 'center',
//               display: 'flex',
//               marginBottom: 30,
//               marginTop: 20,
//               maxWidth: '700px',
//               width: '90%',
//             }}
//           >
//             <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
//             <div style={{ color: '#ccc', margin: '0 10px' }}>or</div>
//             <div style={{ borderBottom: '1px solid #ccc', flexGrow: 1 }}></div>
//           </div>
//           <Space wrap>
//             <Button
//               type="primary"
//               danger
//               style={{
//                 height: '45px',
//                 maxWidth: '700px',
//                 textAlign: 'center',
//                 width: '100%',
//               }}
//             >
//               Browse all cars
//             </Button>
//           </Space>
//         </Content>
//       </Layout>
//       <content>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             marginBottom: '100px',
//             minHeight: '100vh',
//             overflowX: 'auto',
//           }}
//         >
//           <div style={{ maxWidth: '90%' }}>
//             {/* Prikazivanje kartica po kategorijama */}
//             {Object.entries(firstFourCars).map(([carType, cars]) => (
//               <div key={carType}>
//                 <Title
//                   level={2}
//                   style={{
//                     color: '#E83845',
//                     fontWeight: 'bold',
//                     marginBottom: '30px',
//                     marginLeft: '190px',
//                   }}
//                 >
//                   {carType}
//                 </Title>
//                 <Row gutter={[5, 20]} justify="center">
//                   {cars.map((car, id) => (
//                     <Col key={id} xs={12} sm={8} md={8} lg={4}>
//                       <Card
//                         hoverable
//                         style={{ margin: '50px', width: '80%' }}
//                         cover={<img alt="/" src={car.image} />}
//                       >
//                         <Meta title={car.carName} />
//                         <p>Model: {car.brand}</p>
//                         <Button
//                           type="primary"
//                           onClick={() => showCarDetails(car)}
//                         >
//                           DETALJI
//                         </Button>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </div>
//             ))}
//           </div>
//         </div>
//       </content>
//       <Modal
//         title="Detalji o automobilu"
//         visible={modalVisible}
//         onCancel={handleModalClose}
//         width={1000}
//         height={1000}
//         footer={[
//           <Button type="primary" key="close" onClick={handleModalClose}>
//             Vidi više
//           </Button>,
//           <Button type="primary" danger key="close" onClick={handleModalClose}>
//             Close
//           </Button>,
//         ]}
//       >
//         {selectedCar && (
//           <div>
//             <p>
//               <b>Marka</b>: {selectedCar.carName}
//             </p>
//             <p>
//               <b>Model</b>: {selectedCar.brand}
//             </p>
//             <p>
//               <b>Godina proizvodnje</b>: {selectedCar.year}
//             </p>
//             <p>
//               <b>Boja</b>: {selectedCar.color}
//             </p>
//             <p>
//               <b>Kilometraža</b>: {selectedCar.kilometers} km
//             </p>
//             <p>
//               <b>Tip</b>: {selectedCar.carType}
//             </p>
//             <p>
//               <b>Cijena</b>: {selectedCar.price} $
//             </p>
//             <img
//               src={selectedCar.image}
//               alt="Car"
//               style={{ marginBottom: '10px', width: '100%' }}
//             />
//             <img
//               src={selectedCar.image2}
//               alt="Car"
//               style={{ marginBottom: '10px', width: '100%' }}
//             />
//             <img
//               src={selectedCar.image3}
//               alt="Car"
//               style={{ marginBottom: '10px', width: '100%' }}
//             />
//             <img
//               src={selectedCar.image4}
//               alt="Car"
//               style={{ marginBottom: '10px', width: '100%' }}
//             />
//           </div>
//         )}
//       </Modal>
//     </Layout>
//   );
// };
//
// const App = () => {
//   return (
//     <Layout>
//       <ipz />
//
//       {/* Footer */}
//       <MDBFooter
//         bgColor="light"
//         className="text-center text-lg-start text-muted"
//       >
//         <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           <div className="me-5 d-none d-lg-block">
//             <span>Get connected with us on social networks:</span>
//           </div>
//
//           <div>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="facebook-f" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="twitter" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="google" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="instagram" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="linkedin" />
//             </a>
//             <a href="" className="me-4 text-reset">
//               <MDBIcon fab icon="github" />
//             </a>
//           </div>
//         </section>
//
//         {/* ... Ostatak koda, nisam mijenjao ... */}
//
//         <div
//           className="text-center p-4"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
//         >
//           © 2021 Copyright:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//             MDBootstrap.com
//           </a>
//         </div>
//       </MDBFooter>
//     </Layout>
//   );
// };
//
// export default App;
