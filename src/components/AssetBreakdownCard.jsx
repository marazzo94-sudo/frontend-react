import React from 'react';
import styles from './AssetBreakdownCard.module.scss';

function AssetBreakdownCard({ assets = [], view = 'chart' }) {
  const gradient = React.useMemo(() => {
    let cumulative = 0;
    return assets
      .map((asset) => {
        const start = cumulative;
        cumulative += asset.percentage * 3.6;
        const end = cumulative;
        return `${asset.color} ${start}deg ${end}deg`;
      })
      .join(', ');
  }, [assets]);

  return (
    <div className={styles.card}>
      <h3>Asset Breakdown</h3>
      {view === 'list' ? (
        <ul className={styles.list}>
          {assets.map((asset) => (
            <li className={styles.listItem} key={asset.symbol}>
              <span style={{ color: asset.color }}>{asset.symbol}</span>
              <span>{asset.percentage}%</span>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className={styles.chart}
          style={{ background: `conic-gradient(${gradient})` }}
        />
      )}
    </div>
  );
}

export default AssetBreakdownCard;

