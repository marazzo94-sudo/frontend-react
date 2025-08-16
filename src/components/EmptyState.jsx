import PropTypes from "prop-types";
import Button from "./Button";
import styles from "./EmptyState.module.scss";

function EmptyState({ message, action, actionLabel = "Retry" }) {
  return (
    <div className={styles.wrapper}>
      <p>{message}</p>
      {action && (
        <Button onClick={action} className={styles.actionButton}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default EmptyState;
