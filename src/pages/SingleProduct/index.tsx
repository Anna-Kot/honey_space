import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categoriesList } from '../../helpers/consts';
import './../../scss/app.scss';
import axios from 'axios';
import WeightAndPriceSelector from '../../components/WeightAndPriceSelector';
import { ProductTypes } from '../../helpers/interfaces';

const SingleProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductTypes>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          `https://66cc799fa4dd3c8a71b7bffd.mockapi.io/items?&id=${id}`,
        );
        setProduct(data[0]);
      } catch (error) {
        alert('Помилка при отриманні продукту');
        navigate('/');
      }
    }
    fetchProduct();
  }, []);
  if (!product) {
    return <>Завантаження ....</>;
  }
  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt='product' style={{ maxWidth: '500px' }}></img>
          <WeightAndPriceSelector
            priceList={product.priceList}
            types={product.types}
            typeUnits={product.typeUnits}
            id={Number(id)}
            title={product.title}
            imageUrl={product.imageUrl}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            fontSize: '20px',
            padding: '20px',
          }}
        >
          <p>
            Категорія: <b>{categoriesList[product.category]}</b>
          </p>
          <p>
            Рейтинг: <b>{product.rating}</b>/10
          </p>
          <p>Опис: {product.description}</p>
          <p>
            Ціна від: <b>{product.priceMin}</b> грн
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
