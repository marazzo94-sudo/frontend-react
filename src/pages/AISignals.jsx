import React, { useEffect, useState } from 'react';
import styles from './AISignals.module.scss';

const priceData = {
  BTC: [34300, 34250, 34120, 34050, 33900, 33800, 33750, 33680, 33600, 33500, 33400, 33300, 33250, 33120, 33000],
  ETH: [2000, 2025, 2050, 2070, 2090, 2110, 2130, 2150, 2170, 2190, 2210, 2230, 2250, 2270, 2290],
  ADA: [0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64],
};

function calculateEMA(values, period) {
  const k = 2 / (period + 1);
  return values.reduce((prev, curr, idx) => {
    if (idx === 0) return curr;
    return curr * k + prev * (1 - k);
  });
}

function calculateRSI(values, period) {
  let gains = 0;
  let losses = 0;
  for (let i = values.length - period; i < values.length; i++) {
    const diff = values[i] - values[i - 1];
    if (diff >= 0) gains += diff;
    else losses -= diff;
  }
  const avgGain = gains / period;
  const avgLoss = losses / period;
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

function createSignal(symbol, prices) {
  const rsi = calculateRSI(prices, 14);
  const ema = calculateEMA(prices, 10);
  const action = rsi > 70 ? 'SELL' : 'BUY';
  const confidence = Math.floor(Math.random() * 40) + 60;
  return {
    symbol,
    rsi: rsi?.toFixed(2),
    ema: ema?.toFixed(2),
    action,
    confidence,
  };
}

function AISignals() {
  const [signals, setSignals] = useState([]);

  useEffect(() => {
    const symbols = Object.keys(priceData);
    let index = 0;
    const interval = setInterval(() => {
      if (index < symbols.length) {
        const sym = symbols[index];
        setSignals((prev) => [...prev, createSignal(sym, priceData[sym])]);
        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {signals.map((sig, i) => (
        <div
          key={i}
          className={`${styles.signalCard} ${
            sig.action === 'BUY' ? styles.buy : styles.sell
          }`}
        >
          <h3>{sig.symbol}</h3>
          <p>RSI: {sig.rsi}</p>
          <p>EMA: {sig.ema}</p>
          <p>Confidence: {sig.confidence}%</p>
          <strong>{sig.action}</strong>
        </div>
      ))}
    </div>
  );
}

export default AISignals;
