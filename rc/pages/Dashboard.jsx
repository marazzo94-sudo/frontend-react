import React from 'react';
import styled from 'styled-components';
import AssetBreakdownCard from '../components/AssetBreakdownCard';

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
    </Grid>
  );
}

export default Dashboard;
