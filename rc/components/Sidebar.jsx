import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const defaultItems = [
  { label: 'Dashboard', to: '/dashboard', icon: '📊' },
  { label: 'News', to: '/news', icon: '📰' },
  { label: 'Market', to: '/market', icon: '💹' },
  { label: 'Messages', to: '/messages', icon: '💬' },
  { label: 'Portfolio', to: '/portfolio', icon: '💼' },
  { label: 'Settings', to: '/settings', icon: '⚙️' },
];

function Sidebar({ items = defaultItems }) {
  return (
    <aside className={styles.container} data-testid="sidebar">
      <h1 className={styles.title}>SIGNALS</h1>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? `${styles.item} ${styles.active}` : styles.item
          }
        >
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
