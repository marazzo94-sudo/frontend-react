import React from 'react';
import styled from 'styled-components';

const LegendContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const LegendItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
  opacity: ${(p) => (p.visible ? 1 : 0.5)};
`;

const ColorBadge = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.color};
`;

function ChartLegend({ items, onToggle }) {
  return (
    <LegendContainer>
      {items.map((item) => (
        <LegendItem
          key={item.label}
          visible={item.visible}
          type="button"
          onClick={() => onToggle(item.label)}
          aria-label={`toggle ${item.label}`}
          aria-pressed={item.visible}
        >
          <ColorBadge color={item.color} />
          <span>{item.label}</span>
        </LegendItem>
      ))}
    </LegendContainer>
  );
}

export default ChartLegend;
