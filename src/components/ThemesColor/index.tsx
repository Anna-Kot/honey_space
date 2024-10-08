import React, { useContext } from 'react';
import styles from './ThemesColor.module.scss';

import { ThemeContext } from './../../layouts/MainLayout';

const ThemesColor: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }
  const { theme, setTheme } = themeContext;

  return (
    <div className={styles.root}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='60'
        height='60'
        viewBox='0,0,256,256'
        onClick={() => setTheme(!theme)}
      >
        <g
          fill={theme ? '#000000' : '#eed82d'}
          fillRule='nonzero'
          stroke='none'
          strokeWidth='1'
          strokeLinecap='butt'
          strokeLinejoin='miter'
          strokeMiterlimit='10'
          strokeDasharray=''
          strokeDashoffset='0'
          fontFamily='none'
          fontWeight='none'
          fontSize='none'
          textAnchor='none'
        >
          <g transform='scale(4,4)'>
            <path d='M32,19c7.18,0 13,5.82 13,13c0,7.18 -5.82,13 -13,13c-7.18,0 -13,-5.82 -13,-13c0,-7.18 5.82,-13 13,-13zM32,41c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9zM34,8c0,0.366 0,5.634 0,6c0,1.105 -0.895,2 -2,2c-1.105,0 -2,-0.895 -2,-2c0,-0.366 0,-5.634 0,-6c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2zM50.385,16.444c-0.259,0.259 -3.984,3.984 -4.243,4.243c-0.781,0.781 -2.047,0.781 -2.828,0c-0.781,-0.781 -0.781,-2.047 0,-2.828c0.259,-0.259 3.984,-3.984 4.243,-4.243c0.781,-0.781 2.047,-0.781 2.828,0c0.781,0.781 0.781,2.047 0,2.828zM56,34c-0.366,0 -5.634,0 -6,0c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2c0.366,0 5.634,0 6,0c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2zM47.556,50.385c-0.259,-0.259 -3.984,-3.984 -4.243,-4.243c-0.781,-0.781 -0.781,-2.047 0,-2.828c0.781,-0.781 2.047,-0.781 2.828,0c0.259,0.259 3.984,3.984 4.243,4.243c0.781,0.781 0.781,2.047 0,2.828c-0.781,0.781 -2.047,0.781 -2.828,0zM30,56c0,-0.366 0,-5.634 0,-6c0,-1.105 0.895,-2 2,-2c1.105,0 2,0.895 2,2c0,0.366 0,5.634 0,6c0,1.105 -0.895,2 -2,2c-1.105,0 -2,-0.895 -2,-2zM13.615,47.556c0.259,-0.259 3.984,-3.984 4.243,-4.243c0.781,-0.781 2.047,-0.781 2.828,0c0.781,0.781 0.781,2.047 0,2.828c-0.259,0.259 -3.984,3.984 -4.243,4.243c-0.781,0.781 -2.047,0.781 -2.828,0c-0.781,-0.781 -0.781,-2.047 0,-2.828zM8,30c0.366,0 5.634,0 6,0c1.105,0 2,0.895 2,2c0,1.105 -0.895,2 -2,2c-0.366,0 -5.634,0 -6,0c-1.105,0 -2,-0.895 -2,-2c0,-1.105 0.895,-2 2,-2zM16.444,13.615c0.259,0.259 3.984,3.984 4.243,4.243c0.781,0.781 0.781,2.047 0,2.828c-0.781,0.781 -2.047,0.781 -2.828,0c-0.259,-0.259 -3.984,-3.984 -4.243,-4.243c-0.781,-0.781 -0.781,-2.047 0,-2.828c0.781,-0.781 2.047,-0.781 2.828,0z'></path>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ThemesColor;
