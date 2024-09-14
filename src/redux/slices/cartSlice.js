import { createSlice } from '@reduxjs/toolkit';

function calculateTotals(items) {
  const totalPrice = items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
  const totalCount = items.reduce((sum, obj) => sum + obj.count, 0);
  return { totalPrice, totalCount };
}

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, action.payload];
      }
      const { totalPrice, totalCount } = calculateTotals(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      const { totalPrice, totalCount } = calculateTotals(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const { totalPrice, totalCount } = calculateTotals(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
