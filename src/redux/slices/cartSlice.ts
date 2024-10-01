import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CalculationTypes,
  CartSliceTypes,
  CartItemTypes,
  MinusItem,
} from '../../helpers/interfaces';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calculateTotals } from '../../utils/calculateTotals';

const initialState: CartSliceTypes = getCartFromLS();
// const initialState: CartSliceTypes = {
//   items: cartData,
//   totalPrice,
//   totalCount,
// };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemTypes>) {
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
    minusItem(state, action: PayloadAction<MinusItem>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      const { totalPrice, totalCount } = calculateTotals(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const { totalPrice, totalCount } = calculateTotals(state.items);
      state.totalPrice = totalPrice;
      state.totalCount = totalCount;
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      const json = JSON.stringify([]);
      localStorage.setItem('cart', json);
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
