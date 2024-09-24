import React from 'react';

import { categoriesList } from './../helpers/consts';

import './../scss/app.scss';
import { CategoriesProps } from '../helpers/interfaces';

const Categories: React.FC<CategoriesProps> = ({ categoryId, onChangeCategory }) => {
  console.log(categoryId);
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
