import PropTypes from "prop-types";
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

ChartLegend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      visible: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};


export default ChartLegend;
