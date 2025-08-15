import React from 'react';
import Button from './Button';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
}

export default ThemeToggle;
