import React, { useEffect, useState } from 'react';
import {
  AssetBreakdownCard,
  EmptyState,
  PortfolioChart,
  TradeHistoryTable,
  SummaryCardSkeleton,
  TableSkeleton,
  MarketCard,
} from '../components';
import useCryptoData from '../hooks/useCryptoData';
import { formatNumber } from '../utils/format';
import { fetchTrades } from '../utils/api';
import styles from './Dashboard.module.scss';

function Dashboard() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetchTrades()
      .then(setTrades)
      .catch(() => setTrades([]));
  }, []);

  const assets = [
    { symbol: 'BTC', percentage: 40, color: 'var(--color-accent-4)' },
    { symbol: 'ETH', percentage: 30, color: 'var(--color-accent-5)' },
    { symbol: 'ADA', percentage: 30, color: 'var(--color-accent-6)' },

  ];

  const { data, loading, error } = useCryptoData();

  const holdings = {
    btc: 0.5,
    eth: 2,
    ada: 1000,
  };

  const totalBalance = data.reduce((sum, coin) => {
    const amount = holdings[coin.symbol];
    if (!amount) return sum;
    return sum + amount * coin.current_price;
  }, 0);

  const totalChange = data.reduce((sum, coin) => {
    const amount = holdings[coin.symbol];
    if (!amount) return sum;
    return sum + amount * coin.price_change_24h;
  }, 0);

  const [balanceAnimated, setBalanceAnimated] = useState(0);
  const [changeAnimated, setChangeAnimated] = useState(0);

  useEffect(() => {
    const animate = (target, setter) => {
      let current = 0;
      const step = (target - current) / 40;
      const interval = setInterval(() => {
        current += step;
        if ((step >= 0 && current >= target) || (step < 0 && current <= target)) {
          current = target;
          clearInterval(interval);
        }
        setter(current);
      }, 16);
    };
    animate(totalBalance, setBalanceAnimated);
    animate(totalChange, setChangeAnimated);
  }, [totalBalance, totalChange]);

  if (loading) {
    return (
      <div>
        <div className={styles.grid}>
          <SummaryCardSkeleton className={styles.skeletonCard} />
          <SummaryCardSkeleton className={styles.skeletonCard} />
          <SummaryCardSkeleton className={styles.skeletonCard} />
          <SummaryCardSkeleton className={styles.skeletonCard} />
        </div>
        <h2>Crypto Markets</h2>
        <TableSkeleton rows={3} className={styles.tableSkeletonRow} />
        <h2>Recent Trades</h2>
        <TableSkeleton rows={3} className={styles.tableSkeletonRow} />
      </div>
    );
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
    <div className={styles.dashboard}>
      <div className={styles.grid}>
        <div className={`${styles.summaryCard} ${styles.balanceCard}`}>
          Total Balance: ${formatNumber(balanceAnimated)}
        </div>
        <div className={`${styles.summaryCard} ${styles.changeCard}`}>
          24h Change: {changeAnimated >= 0 ? '+' : '-'}${formatNumber(Math.abs(changeAnimated))}
        </div>
        <div className={styles.assetCard}>
          <AssetBreakdownCard assets={assets} />
        </div>
        <div className={styles.chartCard}>
          <PortfolioChart />
        </div>
      </div>

      <h2>Crypto Markets</h2>
      <div className={styles.marketGrid}>
        {data.map((coin) => (
          <MarketCard key={coin.id} coin={coin} />
        ))}
      </div>

      <h2>Recent Trades</h2>
      <div className={styles.tradeZone}>
        <TradeHistoryTable trades={trades} />
      </div>
    </div>
  );

}


export default Dashboard;

