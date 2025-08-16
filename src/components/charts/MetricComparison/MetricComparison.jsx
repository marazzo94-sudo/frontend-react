import PropTypes from "prop-types";
import styles from "./MetricComparison.module.scss";

function MetricComparison({ label, current, previous, period }) {
  const difference = current - previous;
  const percent = previous !== 0 ? (difference / previous) * 100 : 0;
  let color = "var(--color-text)";
  if (percent > 0) color = "var(--color-accent-3)";
  else if (percent < 0) color = "var(--color-negative)";
  const sign = percent > 0 ? "+" : "";

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.row}>
        <span className={styles.current}>{current}</span>
        <span className={styles.change} style={{ color }}>
          {sign}
          {percent.toFixed(2)}%
        </span>
      </div>
      <small>vs last {period}</small>
    </div>
  );
}

MetricComparison.propTypes = {
  label: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  period: PropTypes.string.isRequired,
};

export default MetricComparison;
