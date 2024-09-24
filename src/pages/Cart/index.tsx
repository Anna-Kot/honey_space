import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import { clearItems } from '../../redux/slices/cartSlice';
import { ReactComponent as TrashIcon } from '../../assets/trash_icon.svg';
import { ReactComponent as CartIcon } from '../../assets/cart_icon_black.svg';
import { ReactComponent as ArrowBack } from '../../assets/arrow_back.svg';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, totalPrice, totalCount } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    if (totalPrice > 0) {
      if (window.confirm('Are you sure you want to clear?')) {
        dispatch(clearItems());
      }
    }
  };
  return (
    <div className='container'>
      <div className='cart'>
        <div className='cart__top'>
          <h2 className='content__title'>
            <CartIcon />
            Кошик
          </h2>
          <div className='cart__clear' onClick={handleClearCart}>
            <TrashIcon />
            <span>Очистити кошик</span>
          </div>
        </div>
        <div className='cart__items'>
          {items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className='cart__bottom'>
          <div className='cart__bottom-details'>
            <span>
              Кількість товару (різновидів) : <b>{items.length} </b>
              <br />
              Загальна кількість товару : <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма замовлення: <b>{totalPrice} ₴</b>
            </span>
          </div>
          <div className='cart__bottom-buttons'>
            <Link to='/' className='button button--outline button--add go-back-btn'>
              <ArrowBack />
              <span>Повернутись назад</span>
            </Link>
            <div className='button pay-btn'>
              <span>Оплатити зараз</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
