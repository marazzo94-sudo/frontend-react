export async function fetchCoins() {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true&price_change_percentage=24h';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch coins');
  }
  return response.json();
}

export async function fetchTrades() {
  const baseDate = Date.UTC(2024, 4, 1, 10, 0, 0);
  const trades = [
    {
      pair: 'BTC/USD',
      price: 100,
      amount: 0.1,
      action: 'buy',
      date: new Date(baseDate).toISOString(),
    },
    ...Array.from({ length: 14 }, (_, i) => ({
      pair: `COIN${i + 1}/USD`,
      price: 101 + i,
      amount: i + 2,
      action: (i + 1) % 2 === 0 ? 'sell' : 'buy',
      date: new Date(baseDate + (i + 1) * 60000).toISOString(),
    })),
  ];
  return Promise.resolve(trades);
}
