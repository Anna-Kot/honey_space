import React from 'react';
import { useEffect, useState } from 'react';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import ProductBlock from '../../components/ProductBlock';
import Skeleton from '../../components/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        // setTimeout(() => {
        //   setItems(data);
        //   setIsLoading(false);
        // }, 500);
        setItems(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Вся продукція</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : items.map((obj) => <ProductBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
