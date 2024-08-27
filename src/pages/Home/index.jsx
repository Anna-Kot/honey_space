import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import ProductBlock from '../../components/ProductBlock';
import Skeleton from '../../components/Skeleton';
import { sortingList } from './../../helpers/consts';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortType, setSortType] = useState(sortingList[0]);
  const [categoryType, setCategoryType] = useState(0);

  // console.log(categoryType, sortType);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?${
        categoryType > 0 ? `category=${categoryType}` : ''
      }&sortBy=${sortType.sortProperty}&order=asc`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [categoryType, sortType]);

  //two variant of setItem <Sort/> and <Categories/> below
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onClickCategory={(i) => setCategoryType(i)} categoryType={categoryType} />
        <Sort setSortType={setSortType} sortType={sortType} />
      </div>
      <h2 className='content__title'>Вся продукція</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items?.map((obj) => <ProductBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
