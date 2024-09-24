import React, { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='product/:id' element={<SingleProduct />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
