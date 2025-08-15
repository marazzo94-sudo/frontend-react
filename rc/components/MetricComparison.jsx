import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.span`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const Current = styled.span`
  font-size: 1.2rem;
`;

const Change = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.$color};
`;

function MetricComparison({ label, current, previous, period }) {
  const difference = current - previous;
  const percent = previous !== 0 ? (difference / previous) * 100 : 0;
  let color = '#666';
  if (percent > 0) color = 'green';
  else if (percent < 0) color = 'red';
  const sign = percent > 0 ? '+' : '';

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Row>
        <Current>{current}</Current>
        <Change $color={color}>
          {sign}{percent.toFixed(2)}%
        </Change>
      </Row>
      <small>vs last {period}</small>
    </Wrapper>
  );
}

export default MetricComparison;
