import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import FullScreenSpinner from '../components/spinners/FullScreenSpinner.jsx';
import Ponuda from '../pages/cars/ponuda.jsx';
import Login from '../pages/login/login.jsx';
import SelectCar from '../pages/oneCar/carSelected';

const Ipz = lazy(() => import('../pages/ipz/index.jsx'));

export const MainRouter = (props) => {
  const menu = JSON.parse(localStorage.getItem('m nu'));

  return (
    <Suspense fallback={<FullScreenSpinner color={'#DFE9F6'} />}>
      <Routes>
        <>
          <Route path="/ipz" element={<Ipz />} />
          <Route path="/cars" element={<Ponuda />} />
          <Route path="/cars/:carId" element={<SelectCar />} />
        </>
      </Routes>
    </Suspense>
  );
};
