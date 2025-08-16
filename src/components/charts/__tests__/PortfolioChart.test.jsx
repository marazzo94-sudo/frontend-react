import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import PortfolioChart from '../PortfolioChart';

// Stub ResizeObserver for Recharts' ResponsiveContainer
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('PortfolioChart', () => {
  it('renders a chart svg', () => {
    const { container } = render(
      <div style={{ width: 800, height: 400 }}>
        <PortfolioChart />
      </div>
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <div style={{ width: 800, height: 400 }}>
        <PortfolioChart />
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

