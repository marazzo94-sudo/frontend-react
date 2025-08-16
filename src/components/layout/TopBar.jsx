import React from 'react';
import ThemeToggle from '../ThemeToggle';
import NavBar from './NavBar';
import SearchBar from '../SearchBar';
import styles from './TopBar.module.scss';

function TopBar({ stats = [], user, theme, toggleTheme, toggleSidebar }) {
  return (
    <header className={styles.bar}>
      {toggleSidebar && (
        <button
          className={styles.menuButton}
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>
      )}
      <NavBar />
      <div className={styles.statContainer}>
        {stats.map((stat) => (
          <div className={styles.statBadge} key={stat.label}>
            <strong>{stat.label}:</strong> {stat.value}
          </div>
        ))}
      </div>
        <div className={styles.actions}>
          <SearchBar className={styles.searchBar} />
          {theme && toggleTheme && (
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          )}
          {user && (
            <div className={styles.userArea}>
              {user.avatar && (
                <img
                  className={styles.avatar}
                  src={user.avatar}
                  alt="user avatar"
                />
              )}
              {user.name && <span>{user.name}</span>}
            </div>
          )}
        </div>
    </header>
  );
}

export default TopBar;

