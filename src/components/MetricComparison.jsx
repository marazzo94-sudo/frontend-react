import React from 'react';
import styles from './MetricComparison.module.scss';

function MetricComparison({ label, current, previous, period }) {
  const difference = current - previous;
  const percent = previous !== 0 ? (difference / previous) * 100 : 0;
  let changeClass = '';
  if (percent > 0) changeClass = styles.positive;
  else if (percent < 0) changeClass = styles.negative;

  const sign = percent > 0 ? '+' : '';

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.row}>
        <span className={styles.current}>{current}</span>
        <span className={`${styles.change} ${changeClass}`}>
          {sign}{percent.toFixed(2)}%
        </span>
      </div>
      <small>vs last {period}</small>
    </div>
  );
}

export default MetricComparison;
