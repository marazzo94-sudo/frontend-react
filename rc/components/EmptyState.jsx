import React from 'react';
import Button from './Button';

function EmptyState({ message, action, actionLabel = 'Retry' }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p>{message}</p>
      {action && (
        <Button onClick={action} style={{ marginTop: '1rem' }}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
