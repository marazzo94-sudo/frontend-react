import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default NavBar;
