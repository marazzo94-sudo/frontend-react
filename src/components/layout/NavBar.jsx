import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/portfolio">Portfolio</Link>
      <Link className={styles.link} to="/watchlist">Watchlist</Link>
    </nav>
  );
}

export default NavBar;
