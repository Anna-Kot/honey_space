import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ThemesColor from './components/ThemesColor';
import './scss/app.scss';

export const SearchContext = createContext('');
export const ThemeContext = createContext('');
console.log(SearchContext);
console.log(ThemeContext);

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  console.log(theme);
  return (
    <div className='wrapper' style={{ backgroundColor: theme === 'dark' ? '#575555' : '#fff' }}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
          <ThemesColor />
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home searchValue={searchValue} />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
