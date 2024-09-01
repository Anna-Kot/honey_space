import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import ProductBlock from '../../components/ProductBlock';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { sortingList } from './../../helpers/consts';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortType, setSortType] = useState(sortingList[0]);
  const [categoryType, setCategoryType] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    // fetch(
    //   `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?${
    //     categoryType > 0 ? `category=${categoryType}` : ''
    //   }&sortBy=${sortType.sortProperty}&order=asc&title=${searchValue}`,
    // )
    const sortCategory = categoryType > 0 ? `category=${categoryType}` : '';
    // const search = searchValue ? `search=${searchValue.toLowerCase()}` : '';
    // fetch(
    //   `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?${sortCategory}${search}&sortBy=${sortType.sortProperty}&order=asc`,
    // )
    fetch(
      `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?page=${currentPage}&limit=8&${sortCategory}&sortBy=${sortType.sortProperty}&order=asc`,
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryType, sortType, currentPage]);
  // console.log(items);
  const pageCount = Math.ceil(items.length / 3);
  // console.log(pageCount);
  // const products = items.map((obj) => <ProductBlock key={obj.id} {...obj} />);
  const products = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <ProductBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  //two variant of setItem <Sort/> and <Categories/> below
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onClickCategory={(i) => setCategoryType(i)}
          categoryType={categoryType}
          setCategoryType={setCategoryType}
        />
        <Sort setSortType={setSortType} sortType={sortType} />
      </div>
      <h2 className='content__title'>Вся продукція</h2>
      <div className='content__items'>{isLoading ? skeletons : products}</div>
      <Pagination setCurrentPage={setCurrentPage} pageCount={pageCount} />
    </div>
  );
};

export default Home;
