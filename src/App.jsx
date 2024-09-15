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
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='wrapper' style={{ backgroundColor: theme === 'dark' ? '#575555' : '#fff' }}>
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
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
