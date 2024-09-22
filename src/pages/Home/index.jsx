import React, { useEffect, useRef } from 'react';
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

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isMounted = useRef(false);

  const { categoryId, sortType, currentPage, searchValue } = useSelector((state) => state.filters);
  const { items, status, typeError } = useSelector((state) => state.productsList);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getProducts = async () => {
    const params = {
      sortCategory: categoryId > 0 ? `&category=${categoryId}` : '',
      search: searchValue ? `&search=${searchValue.toLowerCase()}` : '',
      currentPage,
      sortType,
    };
    dispatch(fetchProducts(params));
  };

  useEffect(() => {
    if (location.search) {
      const params = qs.parse(location.search.substring(1));
      const sortType = sortingList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sortType,
          categoryId: Number(params.categoryId),
          currentPage: Number(params.currentPage),
          search: searchValue,
        }),
      );
    }
    isMounted.current = true;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [categoryId, sortType.sortProperty, currentPage, searchValue]);

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
        search: searchValue,
      };

      const queryString = qs.stringify(params, { skipNulls: true });

      navigate(`/?${queryString}`);
    }
    if (!window.location.search) {
      fetchProducts();
    }
  }, [categoryId, sortType, currentPage, searchValue]);

  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onChangeCategory={onChangeCategory} categoryId={categoryId} />
        {/* <Categories onChangeCategory={(i) => dispatch(setCategoryId(i))} categoryId={categoryId} /> */}
        <Sort />
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
