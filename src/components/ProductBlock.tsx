import React from 'react';
import WeightAndPriceSelector from './WeightAndPriceSelector';
import { Link } from 'react-router-dom';
import { ProductBlockProps } from '../helpers/interfaces';

const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  title,
  priceList,
  imageUrl,
  typeUnits,
  types,
}) => {
  return (
    <div className='product-block'>
      <Link to={`/product/${id}`}>
        <img className='product-block__image' src={imageUrl} alt='Honey' />
        <h4 className='product-block__title'>{title}</h4>
      </Link>

      <WeightAndPriceSelector
        priceList={priceList}
        types={types}
        typeUnits={typeUnits}
        id={id}
        title={title}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ProductBlock;
