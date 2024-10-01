import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  APIProductParams,
  ErrorProperties,
  ProductsSliceTypes,
  ProductTypes,
  Status,
} from '../../helpers/interfaces';

export const fetchProducts = createAsyncThunk(
  'productsList/fetchProductsStatus',
  async (params: APIProductParams) => {
    const { sortCategory, search, currentPage, sortBy } = params;
    const { data } = await axios.get<ProductTypes[]>(
      `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?page=${currentPage}${search}&limit=8${sortCategory}&sortBy=${sortBy}&order=asc`,
      // `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?${sortCategory}&sortBy=${sortType.sortProperty}&order=asc`,
    );
    return data as ProductTypes[];
  },
);

const initialState: ProductsSliceTypes = {
  items: [],
  status: Status.LOADING,
  typeError: '',
};

const productsSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ProductTypes[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
      state.typeError = action.error.message?.includes('404') ? '404' : '';
    });
  },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
