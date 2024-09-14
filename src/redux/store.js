import { configureStore } from '@reduxjs/toolkit';
import filters from './slices/filterSlice';
import cart from './slices/cartSlice';
import productsList from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    filters,
    cart,
    productsList,
  },
});
