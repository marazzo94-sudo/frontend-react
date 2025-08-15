import React from 'react';
import useCryptoData from '../hooks/useCryptoData';

function HomePage() {
  const { data: coins, loading, error } = useCryptoData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Failed to load data</div>;

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
