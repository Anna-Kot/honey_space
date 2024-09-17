import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'productsList/fetchProductsStatus',
  async (params) => {
    const { sortCategory, search, currentPage, sortType } = params;
    const { data } = await axios.get(
      `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?page=${currentPage}${search}&limit=8${sortCategory}&sortBy=${sortType.sortProperty}&order=asc`,
    );
    console.log(sortCategory);
    console.log(sortType.sortProperty);
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
  typeError: '',
};

const productsSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
      // console.log(action);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'error';
      state.items = [];
      state.typeError = action.error.message.match(/\d+/)[0];
      // console.log(action);
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
