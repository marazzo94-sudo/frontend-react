import React from "react";
import styles from "./TopBar.module.scss";
import ThemeToggle from "./ThemeToggle";

function TopBar({ stats = [], user, theme, toggleTheme }) {
  return (
    <header className={styles.bar}>
      <div className={styles.statContainer}>
        {stats.map((stat) => (
          <div className={styles.statBadge} key={stat.label}>
            <strong>{stat.label}:</strong> {stat.value}
          </div>
        ))}
      </div>
      <div className={styles.actions}>
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
