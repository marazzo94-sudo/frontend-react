import React from 'react';
import useCryptoData from '../hooks/useCryptoData';
import LoadingIndicator from '../components/LoadingIndicator';
import EmptyState from '../components/EmptyState';

function Dashboard() {
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
      <h2>Crypto Markets</h2>
      <ul>
        {data.map((coin) => (
          <li key={coin.id}>
            {coin.name} - ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
