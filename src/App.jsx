import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Market from './pages/Market';
import Messages from './pages/Messages';
import Portfolio from './pages/Portfolio';
import Settings from './pages/Settings';
import ThemeToggle from './components/common/ThemeToggle';
import Sidebar from './components/layout/Sidebar';
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
        <Sidebar />
        <div className={styles.content}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/market" element={<Market />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
