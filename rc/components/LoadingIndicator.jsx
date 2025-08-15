import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

function LoadingIndicator() {
  return (
    <Wrapper role="status" aria-label="Loading">
      <Spinner />
    </Wrapper>
  );
}

export default LoadingIndicator;
