import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items = [...state.items, action.payload];
    //   //   state.totalPrice = state.totalPrice + action.payload.price;
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return sum + obj.price;
    //   }, 0);
    //   console.log(action);
    // },
    addItem(state, action) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id && item.index === action.payload.index,
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, action.payload];
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
      state.totalCount = state.items.reduce((sum, obj) => {
        return sum + obj.count;
      }, 0);
      console.log(action);
      console.log(state.totalCount);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
