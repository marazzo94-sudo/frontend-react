import React from 'react';
import styles from './LoadingIndicator.module.scss';

function LoadingIndicator() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading">
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingIndicator;
