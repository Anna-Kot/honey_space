import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Cart from './pages/Cart';
// import SingleProduct from './pages/SingleProduct';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';
const Cart = React.lazy(() => import(/* webpackChunkName: 'Cart' */ './pages/Cart'));
const SingleProduct = React.lazy(
  () => import(/* webpackChunkName: 'SingleProduct' */ './pages/SingleProduct'),
);

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route
          path='product/:id'
          element={
            <Suspense fallback={<div>Завантаження....</div>}>
              <SingleProduct />
            </Suspense>
          }
        />
        <Route
          path='cart'
          element={
            <Suspense fallback={<div>Завантаження....</div>}>
              <Cart />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
