import React from 'react';
import styled from 'styled-components';
import AssetBreakdownCard from '../components/AssetBreakdownCard';
import TradeHistoryTable from '../components/TradeHistoryTable';

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

  return (
    <Grid>
      <SummaryCard>Total Balance: $10,000</SummaryCard>
      <SummaryCard>24h Change: +5%</SummaryCard>
      <AssetBreakdownCard assets={assets} />
       <TradeHistoryTable trades={sampleTrades} />
    </Grid>
  )
}


export default Dashboard;

