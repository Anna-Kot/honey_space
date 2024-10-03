import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>OOPS!</h2>
      <p>
        <b>404 - PAGE NOT FOUND</b>
      </p>
      <p>
        Сторінка, яку ви шукаєте, могла бути видалена через зміни її назви або вона тимчасово не
        доступна{' '}
      </p>
      <p> Будь ласка перевірте шлях до даної сторінки</p>
      <Link to='/'>
        <button className='button'>Перейти на головну сторінку</button>
      </Link>
    </div>
  );
};

export default NotFound;
