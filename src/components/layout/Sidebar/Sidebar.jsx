import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

// Basic inline SVG icons to avoid additional dependencies
const icons = {
  dashboard: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path
        d="M3 3h18v18H3V3zm4 14h2v-5H7v5zm4 0h2V7h-2v10zm4 0h2v-8h-2v8z"
      />
    </svg>
  ),
  news: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h10v6H4v-6zm12 0h4v6h-4v-6z" />
    </svg>
  ),
  market: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M5 9v10h2V9H5zm4 4v6h2v-6H9zm4-6v12h2V7h-2zm4 8v4h2v-4h-2z" />
    </svg>
  ),
    signals: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M21 6h-2v9H6v2h9l5 5V6zM17 2H3v14l4-4h10V2z" />
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M4 7V5h4V3h8v2h4v2h2v13H2V7h2zm4-2h8V5H8V5z" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path d="M19.14 12.936a7.952 7.952 0 0 0 .06-1.012 7.952 7.952 0 0 0-.06-1.012l2.03-1.58a.5.5 0 0 0 .12-.63l-1.92-3.322a.5.5 0 0 0-.6-.22l-2.39.96a8.027 8.027 0 0 0-1.75-1.01L14 2.5h-4l-.59 2.18a8.027 8.027 0 0 0-1.75 1.01l-2.39-.96a.5.5 0 0 0-.6.22L2.75 8.272a.5.5 0 0 0 .12.63l2.03 1.58a7.952 7.952 0 0 0 0 2.024l-2.03 1.58a.5.5 0 0 0-.12.63l1.92 3.322c.14.24.43.34.69.22l2.39-.96c.53.42 1.11.77 1.75 1.01L10 21.5h4l.59-2.18c.64-.24 1.22-.59 1.75-1.01l2.39.96a.5.5 0 0 0 .6-.22l1.92-3.322a.5.5 0 0 0-.12-.63l-2.03-1.58zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
    </svg>
  ),
};

const defaultItems = [
  { label: 'Dashboard', to: '/dashboard', icon: icons.dashboard },
  { label: 'News', to: '/news', icon: icons.news },
  { label: 'Market', to: '/market', icon: icons.market },
    { label: 'AI Signals', to: '/signals', icon: icons.signals },
  { label: 'Portfolio', to: '/portfolio', icon: icons.portfolio },
  { label: 'Settings', to: '/settings', icon: icons.settings },
];

function Sidebar({ items = defaultItems }) {
  return (
    <aside className={styles.container} data-testid="sidebar">
      <h1 className={styles.title}>SIGNALS</h1>
      <nav className={styles.nav} aria-label="Primary">
        {items.map((item, index) => (
          <Fragment key={item.to}>
            <NavLink
              to={item.to}
              aria-label={item.label}
              title={item.label}
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.active}` : styles.item
              }
            >
              {item.icon}
              <span className={styles.label}>{item.label}</span>
            </NavLink>
            {index === 3 && <div className={styles.separator} />}
          </Fragment>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
