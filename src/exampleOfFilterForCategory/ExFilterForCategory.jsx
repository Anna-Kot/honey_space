//this file created (for example) of filtering categories, because mockapi.io doesn't have normal category sorting (it works, but with search it broke), this filtering show how we can use another way, but this way have trouble with pagination (it is like some feature of mockapi :( ))

// in productsSlice:
// const { data } = await axios.get(
//     `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?page=${currentPage}${search}&limit=8&sortBy=${sortType.sortProperty}&order=asc`,
//   );
// const initialState = {
//     ...
//     categoryId: 0
// };
// reducers: {
//     ...
//     setCategoryId(state, action) {
//       state.categoryId = action.payload;
//     }
// }
// builder.addCase(fetchProducts.fulfilled, (state, action) => {
//     if (state.categoryId === 0) {
//       state.items = action.payload;
//     } else {
//       state.items = action.payload.filter((ob) => ob.category === state.categoryId);
//     }
//     console.log(state.categoryId);
//     state.status = 'success';
//     console.log(state.items);
//     console.log(action.payload);
// });
// export const { setCategoryId, ... } = productsSlice.actions;

// home page:
// import { setCurrentPage, setFilters } from './../../redux/slices/filterSlice';
// import { fetchProducts, setCategoryId } from '../../redux/slices/productsSlice';
// const { categoryId } = useSelector((state) => state.productsList);
// const getProducts = async () => {
//     const params = {

//       search: searchValue ? `&search=${searchValue.toLowerCase()}` : '',
//       currentPage,
//       sortType,
//     };
//     dispatch(fetchProducts(params));
//   };
//   setFilters({
//     ...params,
//     sortType,

//     currentPage: Number(params.currentPage),
//     search: searchValue,
//   }),
