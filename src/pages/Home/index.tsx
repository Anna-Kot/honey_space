import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import ProductBlock from '../../components/ProductBlock';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { sortingList } from '../../helpers/consts';

import { setCategoryId, setCurrentPage, setFilters } from './../../redux/slices/filterSlice';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { DispatchProperties, RootState } from '../../redux/store';
import { APIProductParams, ProductTypes, SortingType } from '../../helpers/interfaces';

const Home: React.FC = () => {
  const dispatch = useDispatch<DispatchProperties>();
  const navigate = useNavigate();
  const location = useLocation();
  const isMounted = useRef(false);

  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filters,
  );
  const { items, status, typeError } = useSelector((state: RootState) => state.productsList);

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };
  const onChangeCategory = useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const getProducts = async () => {
    const sortCategory = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue.toLowerCase()}` : '';
    const sortBy = sortType.sortProperty;
    dispatch(fetchProducts({ sortBy, sortCategory, search, currentPage }));
  };

  // useEffect(() => {
  //   if (location.search) {
  //     const params = qs.parse(location.search.substring(1)) as unknown as APIProductParams;
  //     const sortType = sortingList.find((obj: SortingType) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         categoryId: params.sortCategory ? Number(params.sortCategory) : 0,
  //         currentPage: params.currentPage,
  //         searchValue: params.search,
  //         sortType: sortType || sortingList[0],
  //       }),
  //     );
  //   }
  //   isMounted.current = true;
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [categoryId, sortType.sortProperty, currentPage, searchValue]);

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       sortProperty: sortType.sortProperty,
  //       categoryId,
  //       currentPage,
  //       search: searchValue,
  //     };

  //     const queryString = qs.stringify(params, { skipNulls: true });

  //     navigate(`/?${queryString}`);
  //   }
  //   if (!window.location.search) {
  //     dispatch(fetchProducts({} as APIProductParams));
  //   }
  // }, [categoryId, sortType, currentPage, searchValue]);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const products = items.map((obj: ProductTypes) => <ProductBlock key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onChangeCategory={onChangeCategory} categoryId={categoryId} />
        <Sort sortType={sortType} />
      </div>
      <h2 className='content__title'>Вся продукція</h2>
      {status === 'error' ? (
        typeError === '404' ? (
          <div>Not Found</div>
        ) : (
          <>
            <h2>Щось пішло не так</h2>
            <p>На жаль, не вдалось отримати продутки</p>
          </>
        )
      ) : (
        <>
          <div className='content__items'>{status === 'loading' ? skeletons : products}</div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
      )}
    </div>
  );
};

export default Home;
