import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ChartLegend from './ChartLegend';

const sampleItems = [
  { label: 'Stocks', color: '#1e90ff', visible: true },
  { label: 'Bonds', color: '#ff6347', visible: false },
];

describe('ChartLegend', () => {
  it('calls onToggle with label when an item is clicked', () => {
    const handleToggle = vi.fn();
    const { getByLabelText } = render(
      <ChartLegend items={sampleItems} onToggle={handleToggle} />
    );
    const button = getByLabelText('toggle Stocks');
    fireEvent.click(button);
    expect(handleToggle).toHaveBeenCalledWith('Stocks');
  });
});
