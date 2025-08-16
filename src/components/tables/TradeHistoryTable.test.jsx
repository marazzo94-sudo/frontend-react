import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TradeHistoryTable from './TradeHistoryTable';
import { fetchTrades } from '../../utils/api';

describe('TradeHistoryTable', () => {
  it('sorts and paginates fetched trades', async () => {
    const trades = await fetchTrades();
    render(<TradeHistoryTable trades={trades} />);

    // sort ascending by price
    fireEvent.click(screen.getByText('Price'));
    let firstRow = screen.getAllByRole('row')[1];
    expect(firstRow.children[0].textContent).toBe('BTC/USD');

    // sort descending by price
    fireEvent.click(screen.getByText('Price'));
    firstRow = screen.getAllByRole('row')[1];
    expect(firstRow.children[0].textContent).toBe('COIN14/USD');

    // go to next page after sorting ascending again
    fireEvent.click(screen.getByText('Price'));
    fireEvent.click(screen.getByRole('button', { name: /next/i }));
    firstRow = screen.getAllByRole('row')[1];
    expect(firstRow.children[0].textContent).toBe('COIN10/USD');
  });
});
