import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Dashboard from '../Dashboard';
import useCryptoData from '../../hooks/useCryptoData';

vi.mock('../../hooks/useCryptoData', () => ({
  default: vi.fn(),
}));

describe('Dashboard', () => {
  it('renders loading indicator while fetching data', () => {
    useCryptoData.mockReturnValue({ data: [], loading: true, error: null });
    render(<Dashboard />);
    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument();
  });

  it('shows error state with retry button when fetch fails', () => {
    useCryptoData.mockReturnValue({ data: [], loading: false, error: new Error('fail') });
    render(<Dashboard />);
    expect(screen.getByText('Failed to load data')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
  });

  it('displays summary cards, market list, and trade history on success', async () => {
    const mockData = [
      { id: 'btc', name: 'Bitcoin', current_price: 50000 },
      { id: 'eth', name: 'Ethereum', current_price: 4000 },
    ];
    useCryptoData.mockReturnValue({ data: mockData, loading: false, error: null });
    render(<Dashboard />);

    expect(screen.getByText('Total Balance: $10,000')).toBeInTheDocument();
    expect(screen.getByText('24h Change: +5%')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin - $50000')).toBeInTheDocument();
    // TradeHistoryTable renders fetched trade
    expect(await screen.findByText('BTC/USD')).toBeInTheDocument();
  });
});

