import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  background-color: var(--color-bg);
  color: var(--color-text);
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (

   <BrowserRouter>
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Crypto Dashboard Starter</h1>
 <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </ThemeProvider>
 </BrowserRouter>

  );
}

export default App;
