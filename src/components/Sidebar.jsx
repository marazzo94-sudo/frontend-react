import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Container = styled.aside`
  width: 220px;
  background: #0b0d21;
  color: #fff;
  height: 100vh;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`;

const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #fff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;

  &.active {
    background: rgba(255, 255, 255, 0.1);
  }
`;

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
