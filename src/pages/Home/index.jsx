import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import ProductBlock from '../../components/ProductBlock';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { sortingList } from '../../helpers/consts';

import { setCategoryId, setCurrentPage, setFilters } from './../../redux/slices/filterSlice';

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sortType, currentPage } = useSelector((state) => state.filters);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkItems, setCheckItems] = useState(true);

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchProducts = () => {
    setIsLoading(true);
    const sortCategory = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue.toLowerCase()}` : '';

    axios
      .get(
        `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?page=${currentPage}&${search}&limit=8&${sortCategory}&sortBy=${sortType.sortProperty}&order=asc`,
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
        setCheckItems(true);
        // console.log(response);
      })
      .catch((err) => {
        setIsLoading(false);
        setCheckItems(false);
      });
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortType = sortingList.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [categoryId, sortType.sortProperty, currentPage, searchValue, checkItems]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);
  // const products = items
  //   .filter((obj) => {
  //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((obj) => <ProductBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onClickCategory={(i) => dispatch(setCategoryId(i))} categoryId={categoryId} />
        <Sort />
      </div>
      <h2 className='content__title'>Вся продукція</h2>
      <div className='content__items'>
        {isLoading ? skeletons : checkItems ? products : 'Not Found'}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
