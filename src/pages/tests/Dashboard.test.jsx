import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Dashboard from '../Dashboard';
import useCryptoData from '../../hooks/useCryptoData';

vi.mock('../../hooks/useCryptoData', () => ({
  default: vi.fn(),
}));

describe('Dashboard', () => {
  afterEach(() => {
    vi.useRealTimers();
  });
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
      vi.useFakeTimers();
      const mockData = [
        {
          id: 'btc',
          name: 'Bitcoin',
          symbol: 'btc',
          current_price: 50000,
          price_change_24h: 1000,
          sparkline_in_7d: { price: [] },
        },
        {
          id: 'eth',
          name: 'Ethereum',
          symbol: 'eth',
          current_price: 4000,
          price_change_24h: 0,
          sparkline_in_7d: { price: [] },
        },
      ];
      useCryptoData.mockReturnValue({ data: mockData, loading: false, error: null });
      render(<Dashboard />);
      vi.runAllTimers();

      expect(await screen.findByText('Total Balance: $33,000')).toBeInTheDocument();
      expect(await screen.findByText('24h Change: +$500')).toBeInTheDocument();
      expect(screen.getByText('BTC')).toBeInTheDocument();
      expect(screen.getByText('$50,000')).toBeInTheDocument();
      // TradeHistoryTable renders fetched trade
      expect(await screen.findByText('BTC/USD')).toBeInTheDocument();
    });
  });

