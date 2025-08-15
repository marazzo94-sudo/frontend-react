
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = (props) => <button className={styles.button} {...props} />;


Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
