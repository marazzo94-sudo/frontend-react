import React from 'react';
import styles from './LoadingIndicator.module.scss';

function SummaryCardSkeleton({ className }) {
  return <div className={className} />;
}

function TableSkeleton({ rows = 3, className }) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className={className} />
      ))}
    </div>
  );
}

function LoadingIndicator() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Loading">
      <div className={styles.spinner} />
    </div>
  );
}

export default LoadingIndicator;
export { SummaryCardSkeleton, TableSkeleton };
