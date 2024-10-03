import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceTypes, CartItemType, MinusItem } from '../../helpers/interfaces';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calculateTotals } from '../../utils/calculateTotals';

const updateTotals = (state: CartSliceTypes) => {
  const { totalPrice, totalCount } = calculateTotals(state.items);
  state.totalPrice = totalPrice;
  state.totalCount = totalCount;
};

const initialState: CartSliceTypes = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, action.payload];
      }
      updateTotals(state);
    },
    minusItem(state, action: PayloadAction<MinusItem>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      updateTotals(state);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      updateTotals(state);
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
