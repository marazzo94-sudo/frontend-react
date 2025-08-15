export async function fetchCoins() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch coins');
  }
  return response.json();
}
