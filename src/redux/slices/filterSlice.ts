import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FilterSliceTypes,
  SetFilterTypes,
  SortingType,
  SortPropertyEnum,
} from '../../helpers/interfaces';

const initialState: FilterSliceTypes = {
  categoryId: 0,
  currentPage: 1,
  sortType: { name: 'популярністю', sortProperty: SortPropertyEnum.RATING },
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortType(state, action: PayloadAction<SortingType>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<SetFilterTypes>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = action.payload.currentPage;
        state.categoryId = action.payload.categoryId;
        state.sortType = action.payload.sortType;
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sortType = { name: 'популярністю', sortProperty: SortPropertyEnum.RATING };
      }
      // state.currentPage = action.payload.currentPage;
      // state.categoryId = action.payload.categoryId;
      // // state.currentPage = Number(action.payload.currentPage);
      // // state.categoryId = Number(action.payload.categoryId);
      // state.sortType = action.payload.sortType;
      // // state.searchValue = action.payload.search;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
