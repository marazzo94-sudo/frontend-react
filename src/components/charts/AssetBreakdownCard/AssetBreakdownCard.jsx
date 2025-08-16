import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "./AssetBreakdownCard.module.scss";

function AssetBreakdownCard({ assets = [], view = "chart" }) {
  return (
    <div className={styles.card}>
      <h3>Asset Breakdown</h3>
      {view === "list" ? (
        <ul className={styles.list}>
          {assets.map((asset) => (
            <li className={styles.listItem} key={asset.symbol}>
              <span style={{ color: asset.color }}>{asset.symbol}</span>
              <span>{asset.percentage}%</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                dataKey="percentage"
                data={assets}
                nameKey="symbol"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                isAnimationActive
              >
                {assets.map((asset) => (
                  <Cell key={asset.symbol} fill={asset.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

AssetBreakdownCard.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      color: PropTypes.string,
    })
  ),
  view: PropTypes.oneOf(["chart", "list"]), 
};


export default AssetBreakdownCard;
