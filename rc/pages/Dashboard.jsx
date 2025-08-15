import React from 'react';
import TradeHistoryTable from '../components/TradeHistoryTable';

const sampleTrades = [
  { pair: 'BTC/USD', price: 50000, amount: 0.1, action: 'buy', date: '2024-05-01T10:00:00Z' },
  { pair: 'ETH/USD', price: 4000, amount: 1.5, action: 'sell', date: '2024-05-01T11:00:00Z' },
  { pair: 'LTC/USD', price: 300, amount: 10, action: 'buy', date: '2024-05-02T09:30:00Z' },
];

function Dashboard() {
  return (
    <div>
      <h2>Recent Trades</h2>
      <TradeHistoryTable trades={sampleTrades} />
    </div>
  );
}

export default Dashboard;

