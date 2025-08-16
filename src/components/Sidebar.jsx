import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';


const defaultItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'News', to: '/news' },
  { label: 'Market', to: '/market' },
  { label: 'Messages', to: '/messages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Settings', to: '/settings' },
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
          {item.label}
        </NavLink>
      ))}
    </aside>

  );
}

export default Sidebar;
