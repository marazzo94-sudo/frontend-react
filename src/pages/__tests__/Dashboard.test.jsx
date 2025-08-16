// @vitest-environment jsdom

import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

expect.extend(matchers);

const sampleData = [
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', current_price: 50000, price_change_24h: 1000 },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum', current_price: 4000, price_change_24h: -100 },
  { id: 'cardano', symbol: 'ada', name: 'Cardano', current_price: 2, price_change_24h: 0.1 },
];

vi.mock('../../hooks/useCryptoData', () => ({
  default: () => ({ data: sampleData, loading: false, error: null }),
}));

describe('Dashboard', () => {
  it('shows calculated total balance and 24h change', () => {
    render(<Dashboard />);

    expect(screen.getByText('Total Balance: $35,000')).toBeInTheDocument();
    expect(screen.getByText('24h Change: +$400')).toBeInTheDocument();
  });
});
