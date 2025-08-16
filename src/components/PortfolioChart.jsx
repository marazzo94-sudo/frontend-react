import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import ChartLegend from './ChartLegend';
import styles from './PortfolioChart.module.scss';

const data = [
  { month: 'Jan', Stocks: 4000, Bonds: 2400, Crypto: 2000 },
  { month: 'Feb', Stocks: 3000, Bonds: 1398, Crypto: 2210 },
  { month: 'Mar', Stocks: 2000, Bonds: 9800, Crypto: 2290 },
  { month: 'Apr', Stocks: 2780, Bonds: 3908, Crypto: 2000 },
  { month: 'May', Stocks: 1890, Bonds: 4800, Crypto: 2181 },
  { month: 'Jun', Stocks: 2390, Bonds: 3800, Crypto: 2500 },
  { month: 'Jul', Stocks: 3490, Bonds: 4300, Crypto: 2100 },
];

function PortfolioChart() {
  const [items, setItems] = useState([
    { label: 'Stocks', color: 'var(--color-accent-1)', visible: true },
    { label: 'Bonds', color: 'var(--color-accent-2)', visible: true },
    { label: 'Crypto', color: 'var(--color-accent-3)', visible: true },
  ]);

  const handleToggle = (label) => {
    setItems((prev) =>
      prev.map((item) =>
        item.label === label ? { ...item, visible: !item.visible } : item
      )
    );
  };

  return (
    <div className={styles.chartContainer} data-testid="portfolio-chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <defs>
            {items.map((item) => (
              <linearGradient key={item.label} id={`grad-${item.label}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={item.color} stopOpacity={0.8} />
                <stop offset="100%" stopColor={item.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {items.map(
            (item) =>
              item.visible && (
                <Line
                  key={item.label}
                  type="monotone"
                  dataKey={item.label}
                  stroke={`url(#grad-${item.label})`}
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive
                  animationDuration={800}
                />
              )
          )}
        </LineChart>
      </ResponsiveContainer>
      <ChartLegend items={items} onToggle={handleToggle} />
    </div>
  );
}

export default PortfolioChart;
