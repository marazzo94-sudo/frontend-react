import React from "react";
import PropTypes from "prop-types";
import styles from "./ThemeToggle.module.scss";

function ThemeToggle({ theme, toggleTheme }) {
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      onClick={handleToggle}
      className={`${styles.toggle} ${
        theme === "light" ? styles.light : styles.dark
      }`}
    >
      <span className={styles.ball} />
    </button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
