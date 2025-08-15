import React from 'react';
import useCryptoData from '../hooks/useCryptoData';
import { EmptyState, LoadingIndicator } from '../components';

function HomePage() {
  const { data: coins, loading, error } = useCryptoData();

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

  if (!coins || coins.length === 0) {
    return <EmptyState message="No data available" />;
  }

  return (
    <div>
      <h1>Crypto Prices</h1>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name}: ${coin.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
