import React from 'react';
import styled from 'styled-components';
import AssetBreakdownCard from '../components/AssetBreakdownCard';
import TradeHistoryTable from '../components/TradeHistoryTable';
import useCryptoData from '../hooks/useCryptoData';
import LoadingIndicator from '../components/LoadingIndicator';
import EmptyState from '../components/EmptyState';

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SummaryCard = styled.div`
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
`;

function Dashboard() {
  const sampleTrades = [
    { pair: 'BTC/USD', price: 50000, amount: 0.1, action: 'buy', date: '2024-05-01T10:00:00Z' },
    { pair: 'ETH/USD', price: 4000, amount: 1.5, action: 'sell', date: '2024-05-01T11:00:00Z' },
    { pair: 'LTC/USD', price: 300, amount: 10, action: 'buy', date: '2024-05-02T09:30:00Z' },
  ];

  const assets = [
    { symbol: 'BTC', percentage: 40, color: '#f7931a' },
    { symbol: 'ETH', percentage: 30, color: '#3c3c3d' },
    { symbol: 'ADA', percentage: 30, color: '#0F8AD9' },
  ];

  const { data, loading, error } = useCryptoData();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return (
      <EmptyState
        message="Failed to load data"
        action={() => window.location.reload()}
        actionLabel="Retry"
      />
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState message="No data available" />;
  }

  return (
    <div>
      <Grid>
        <SummaryCard>Total Balance: $10,000</SummaryCard>
        <SummaryCard>24h Change: +5%</SummaryCard>
        <AssetBreakdownCard assets={assets} />
      </Grid>

      <h2>Crypto Markets</h2>
      <ul>
        {data.map((coin) => (
          <li key={coin.id}>
            {coin.name} - ${coin.current_price}
          </li>
        ))}
      </ul>

      <h2>Recent Trades</h2>
      <TradeHistoryTable trades={sampleTrades} />
    </div>
  );
  
}


export default Dashboard;

