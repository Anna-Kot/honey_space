import React, { useState } from 'react';
import './../scss/app.scss';
import { categoriesList } from './../helpers/consts';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlerSelectCategory = (index) => {
    setActiveIndex(index);
    // console.log(activeIndex);
  };
  return (
    <div className='categories'>
      <ul>
        {categoriesList.map((item, i) => (
          <li
            className={activeIndex === i ? 'active' : ''}
            key={i}
            onClick={() => handlerSelectCategory(i)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
