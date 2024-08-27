import React from 'react';
import './../scss/app.scss';
import { categoriesList } from './../helpers/consts';

const Categories = ({ categoryType, onClickCategory }) => {
  return (
    <div className='categories'>
      <ul>
        {categoriesList.map((item, i) => (
          <li
            className={categoryType === i ? 'active' : ''}
            key={i}
            onClick={() => onClickCategory(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
