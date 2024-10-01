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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchProperties = typeof store.dispatch;
