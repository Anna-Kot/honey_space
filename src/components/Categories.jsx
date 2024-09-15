import React from 'react';

import { categoriesList } from './../helpers/consts';

import './../scss/app.scss';

const Categories = ({ categoryId, onChangeCategory }) => {
  return (
    <div className='categories'>
      <ul>
        {categoriesList.map((item, i) => (
          <li
            className={categoryId === i ? 'active' : ''}
            key={i}
            onClick={() => onChangeCategory(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
