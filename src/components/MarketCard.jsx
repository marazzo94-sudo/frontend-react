import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import styles from './MarketCard.module.scss';

function MarketCard({ coin }) {
  const data =
    coin.sparkline_in_7d?.price?.map((p, index) => ({ index, price: p })) || [];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span>{coin.symbol.toUpperCase()}</span>
        <span
          className={
            coin.price_change_percentage_24h >= 0
              ? styles.positive
              : styles.negative
          }
        >
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>
      <div className={styles.price}>
        ${coin.current_price.toLocaleString()}
      </div>
      <div className={styles.sparkline}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="price"
              stroke={
                coin.price_change_percentage_24h >= 0
                  ? 'var(--color-accent-3)'
                  : 'var(--color-negative)'
              }
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <span className={styles.live} />
    </div>
  );
}

MarketCard.propTypes = {
  coin: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number,
    sparkline_in_7d: PropTypes.shape({
      price: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
};

export default MarketCard;
