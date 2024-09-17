import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ThemesColor from './components/ThemesColor';
import './scss/app.scss';

export const ThemeContext = createContext('');

function App() {
  const [theme, setTheme] = useState(true);
  const themeClass = theme ? 'lightTheme' : 'darkTheme';

  return (
    <div className={`wrapper ${themeClass}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemesColor />
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
