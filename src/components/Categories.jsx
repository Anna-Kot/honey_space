import React from 'react';
import './../scss/app.scss';

const Categories = () => {
  return (
    <div className='categories'>
      <ul>
        <li className='active'>Всі</li>
        <li>Мед</li>
        <li>Горішки в меду</li>
        <li>Соти</li>
        <li>Свічки</li>
        <li>Настоянки</li>
      </ul>
    </div>
  );
};

export default Categories;
