import React from 'react';
import styles from './ThemeToggle.module.scss';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={`${styles.toggle} ${theme === 'light' ? styles.light : styles.dark}`}
    >
      <span className={styles.ball} />
    </button>
  );
}

export default ThemeToggle;
