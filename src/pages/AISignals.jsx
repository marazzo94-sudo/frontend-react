import React, { useEffect, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  Eye,
} from "lucide-react";

const priceData = {
  BTC: [
    34300, 34250, 34120, 34050, 33900, 33800, 33750, 33680, 33600, 33500, 33400,
    33300, 33250, 33120, 33000,
  ],
  ETH: [
    2000, 2025, 2050, 2070, 2090, 2110, 2130, 2150, 2170, 2190, 2210, 2230,
    2250, 2270, 2290,
  ],
  ADA: [
    0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62,
    0.63, 0.64,
  ],
};

const cryptoLogos = {
  BTC: "₿",
  ETH: "Ξ",
  ADA: "₳",
};

const cryptoNames = {
  BTC: "Bitcoin",
  ETH: "Ethereum",
  ADA: "Cardano",
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
  const currentPrice = prices[prices.length - 1];
  const previousPrice = prices[prices.length - 2];
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100;
  const action = rsi > 70 ? "SELL" : "BUY";
  const confidence = Math.floor(Math.random() * 40) + 60;

  return {
    symbol,
    name: cryptoNames[symbol],
    logo: cryptoLogos[symbol],
    currentPrice,
    priceChange,
    rsi: rsi?.toFixed(2),
    ema: ema?.toFixed(2),
    action,
    confidence,
  };
}

// Header Component
function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          AI Trading Signals
        </h1>
      </div>
      <p className="text-gray-600">
        Real-time algorithmic trading insights powered by technical analysis
      </p>
    </div>
  );
}

// Confidence Badge Component
function ConfidenceBadge({ confidence, action }) {
  const getConfidenceColor = (conf) => {
    if (conf >= 80) return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (conf >= 70) return "bg-yellow-100 text-yellow-700 border-yellow-200";
    return "bg-orange-100 text-orange-700 border-orange-200";
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${getConfidenceColor(
        confidence
      )}`}
    >
      <Eye className="w-3.5 h-3.5" />
      {confidence}% confidence
    </div>
  );
}

// Action Button Component
function ActionButton({ action, confidence }) {
  const isBuy = action === "BUY";
  const baseClasses =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm";
  const buyClasses =
    "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-emerald-200";
  const sellClasses =
    "bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white shadow-red-200";

  return (
    <button className={`${baseClasses} ${isBuy ? buyClasses : sellClasses}`}>
      {isBuy ? (
        <TrendingUp className="w-4 h-4" />
      ) : (
        <TrendingDown className="w-4 h-4" />
      )}
      {action}
    </button>
  );
}

// Signal Card Component
function SignalCard({ signal, index }) {
  const formatPrice = (price) => {
    if (price < 1) return `$${price.toFixed(4)}`;
    return `$${price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatChange = (change) => {
    const sign = change >= 0 ? "+" : "";
    return `${sign}${change.toFixed(2)}%`;
  };

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 opacity-0 animate-fadeInUp"
      style={{
        animationDelay: `${index * 200}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            {signal.logo}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{signal.symbol}</h3>
            <p className="text-gray-500 text-sm">{signal.name}</p>
          </div>
        </div>
        <ConfidenceBadge
          confidence={signal.confidence}
          action={signal.action}
        />
      </div>

      {/* Price Info */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(signal.currentPrice)}
          </span>
          <span
            className={`text-sm font-medium px-2 py-1 rounded-full ${
              signal.priceChange >= 0
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {formatChange(signal.priceChange)}
          </span>
        </div>
      </div>

      {/* Technical Indicators */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              RSI (14)
            </span>
          </div>
          <div className="text-lg font-bold text-gray-900">{signal.rsi}</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className={`h-2 rounded-full ${
                signal.rsi > 70
                  ? "bg-red-500"
                  : signal.rsi < 30
                  ? "bg-green-500"
                  : "bg-blue-500"
              }`}
              style={{ width: `${signal.rsi}%` }}
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              EMA (10)
            </span>
          </div>
          <div className="text-lg font-bold text-gray-900">
            {formatPrice(parseFloat(signal.ema))}
          </div>
          <div
            className={`text-xs font-medium mt-1 ${
              parseFloat(signal.ema) > signal.currentPrice
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {parseFloat(signal.ema) > signal.currentPrice
              ? "Above current"
              : "Below current"}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <ActionButton action={signal.action} confidence={signal.confidence} />
    </div>
  );
}

// Main Component
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
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal, index) => (
            <SignalCard
              key={`${signal.symbol}-${index}`}
              signal={signal}
              index={index}
            />
          ))}
        </div>

        {signals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
            <p className="text-gray-600">Loading AI signals...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AISignals;
