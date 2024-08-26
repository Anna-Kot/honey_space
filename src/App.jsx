import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Вся продукція</h2>
          <div className='content__items'>
            {items.map((obj) => (
              <ProductBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
