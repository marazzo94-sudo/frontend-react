import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import styles from './App.module.scss';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Crypto Dashboard Starter</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
