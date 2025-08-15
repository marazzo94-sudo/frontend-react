import React from 'react';
import styles from './ChartLegend.module.scss';

function ChartLegend({ items, onToggle }) {
  return (
    <div className={styles.legendContainer}>
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className={`${styles.legendItem} ${item.visible ? '' : styles.legendItemHidden}`}
          onClick={() => onToggle(item.label)}
          aria-label={`toggle ${item.label}`}
          aria-pressed={item.visible}
        >
          <span className={styles.colorBadge} style={{ background: item.color }} />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ChartLegend;
