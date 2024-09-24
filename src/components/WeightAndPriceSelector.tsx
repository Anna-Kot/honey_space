import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import { CartItemTypes, ProductBlockProps } from '../helpers/interfaces';

const WeightAndPriceSelector: React.FC<ProductBlockProps> = ({
  priceList,
  types,
  typeUnits,
  id,
  title,
  imageUrl,
}) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);
  const idCreate = `${id}_${activeSizeIndex}`;
  console.log(idCreate);
  const dispatch = useDispatch();
  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: CartItemTypes) => obj.id === idCreate),
  );
  console.log(cartItem);
  const count = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id: idCreate,
      title,
      index: activeSizeIndex,
      price: priceList.price[activeSizeIndex],
      size: priceList.sizes[activeSizeIndex],
      imageUrl,
      typeUnits,
      count: 1,
    };
    console.log(item);
    dispatch(addItem(item));
  };

  const handlerActiveSize = (index: number) => {
    setActiveSizeIndex(index);
  };
  return (
    <>
      <div className='product-block__selector'>
        <p className='pack-type'> Тип пакування: {types}</p>
        <ul>
          {priceList.sizes.map((size, i) => (
            <li
              key={i}
              className={activeSizeIndex === i ? 'active' : ''}
              onClick={() => handlerActiveSize(i)}
            >
              {size} {typeUnits}
            </li>
          ))}
        </ul>
      </div>
      <div className='product-block__bottom'>
        <div className='product-block__price'>{priceList.price[activeSizeIndex]} грн</div>
        <button className='button button--outline button--add' onClick={onClickAdd}>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Додати</span>
          <i>{count}</i>
        </button>
      </div>
    </>
  );
};

export default WeightAndPriceSelector;
