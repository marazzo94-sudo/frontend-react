import React, { useState } from 'react';
import ChartLegend from './ChartLegend';

function PortfolioChart() {
  const [items, setItems] = useState([
    { label: 'Stocks', color: '#1e90ff', visible: true },
    { label: 'Bonds', color: '#ff6347', visible: true },
    { label: 'Crypto', color: '#32cd32', visible: true },
  ]);

  const handleToggle = (label) => {
    setItems((prev) =>
      prev.map((item) =>
        item.label === label ? { ...item, visible: !item.visible } : item
      )
    );
    // Chart visibility toggling would go here
  };

  return (
    <div>
      {/* Chart rendering placeholder */}
      <div>Portfolio chart placeholder</div>
      <ChartLegend items={items} onToggle={handleToggle} />
    </div>
  );
}

export default PortfolioChart;
