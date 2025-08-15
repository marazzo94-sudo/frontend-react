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
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1>Crypto Dashboard Starter</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
