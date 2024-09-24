import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';
import { CartProps, CartItemType } from '../../helpers/interfaces';
import { ReactComponent as IconMinus } from '../../assets/minus_icon.svg';
import { ReactComponent as IconPlus } from '../../assets/plus_icon.svg';
import { ReactComponent as IconDelete } from '../../assets/delete_icon.svg';

const CartItem: React.FC<CartItemType> = ({ item }) => {
  const { id, title, price, size, imageUrl, count, typeUnits }: CartProps = item;
  console.log(item);
  const dispatch = useDispatch();
  const sumItem = count * price;

  const handleRemoveItem = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      dispatch(removeItem(id));
    }
  };
  const handleMinusItem = () => {
    dispatch(minusItem({ id }));
  };
  const handlePlusItem = () => {
    dispatch(addItem({ id }));
  };
  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>
          {size} {typeUnits}
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          className='button button--outline button--circle cart__item-count-minus'
          onClick={handleMinusItem}
        >
          <IconMinus />
        </div>
        <b>{count}</b>
        <div
          className='button button--outline button--circle cart__item-count-plus'
          onClick={handlePlusItem}
        >
          <IconPlus />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{sumItem} ₴</b>
      </div>
      <div className='cart__item-remove' onClick={handleRemoveItem}>
        <div className='button button--outline button--circle'>
          <IconDelete />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
