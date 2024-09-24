import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../scss/app.scss';
import logo from '../assets/logo_honey.png';
import Search from './Search';
import { useSelector } from 'react-redux';
import { ReactComponent as CartIcon } from '../assets/cart_icon.svg';
// import { DispatchProperties, StateProperties } from '../redux/store';

const Header: React.FC = () => {
  const { totalPrice, totalCount } = useSelector((state: any) => state.cart);
  const { pathname } = useLocation();
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/'>
          <div className='header__logo'>
            <img width={70} height={70} src={logo} alt='Honey Logo' />
            <div>
              <h1>HONEY SPACE</h1>
              <p>The best honey in the world</p>
            </div>
          </div>
        </Link>
        {pathname !== '/cart' && <Search />}
        {pathname !== '/cart' && (
          <div className='header__cart'>
            <Link to='/cart' className='button button--cart'>
              <span>{totalPrice} ₴</span>
              <div className='button__delimiter'></div>
              <CartIcon />
              <span>{totalCount}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
