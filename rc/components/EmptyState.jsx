import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ActionButton = styled(Button)`
  margin-top: 1rem;
`;

function EmptyState({ message, action, actionLabel = 'Retry' }) {
  return (
    <Wrapper>
      <p>{message}</p>
      {action && (
        <ActionButton onClick={action}>{actionLabel}</ActionButton>
      )}
    </Wrapper>
  );
}

export default EmptyState;
