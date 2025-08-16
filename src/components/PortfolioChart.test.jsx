import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import PortfolioChart from './PortfolioChart';

describe('PortfolioChart', () => {
  it('renders a chart svg', async () => {
    const { container } = render(
      <div style={{ width: 800, height: 400 }}>
        <PortfolioChart />
      </div>
    );
    await waitFor(() => expect(container.querySelector('svg')).toBeInTheDocument());
  });

  it('matches snapshot', async () => {
    const { container } = render(
      <div style={{ width: 800, height: 400 }}>
        <PortfolioChart />
      </div>
    );
    await waitFor(() => expect(container.querySelector('svg')).toBeInTheDocument());
    expect(container).toMatchSnapshot();
  });
});

