import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import ProductBlock from './components/ProductBlock';
import products from './db.json';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className='content__title'>Вся продукція</h2>
          <div className='content__items'>
            {products.map((obj) => (
              <ProductBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
