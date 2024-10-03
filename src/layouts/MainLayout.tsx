import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import ThemesColor from '../components/ThemesColor';
import { Outlet } from 'react-router-dom';
import { ThemeContextProps } from '../helpers/interfaces';
export const ThemeContext = createContext<ThemeContextProps | null>(null);

const MainLayout: React.FC = () => {
  const [theme, setTheme] = useState<boolean>(true);
  const themeClass = theme ? 'lightTheme' : 'darkTheme';

  return (
    <div className={`wrapper ${themeClass}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemesColor />
        <Header />
        <div className='content'>
          <Outlet />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default MainLayout;
