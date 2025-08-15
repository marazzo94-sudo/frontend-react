import React, { useState, useMemo } from "react";
import { Button } from "./common";
import styles from "./TradeHistoryTable.module.scss";

function TradeHistoryTable({ trades = [] }) {
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "desc",
  });
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const sortedTrades = useMemo(() => {
    const sortable = [...trades];
    sortable.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sortable;
  }, [trades, sortConfig]);

  const pageCount = Math.ceil(sortedTrades.length / pageSize);
  const paginatedTrades = sortedTrades.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, pageCount - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th} onClick={() => requestSort("pair")}>
                Pair
              </th>
              <th className={styles.th} onClick={() => requestSort("price")}>
                Price
              </th>
              <th className={styles.th} onClick={() => requestSort("amount")}>
                Amount
              </th>
              <th className={styles.th} onClick={() => requestSort("action")}>
                Action
              </th>
              <th className={styles.th} onClick={() => requestSort("date")}>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrades.map((trade, idx) => (
              <tr key={idx}>
                <td className={styles.td}>{trade.pair}</td>
                <td className={styles.td}>{trade.price}</td>
                <td className={styles.td}>{trade.amount}</td>
                <td className={styles.td}>{trade.action}</td>
                <td className={styles.td}>
                  {new Date(trade.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pageCount > 1 && (
        <div className={styles.pagination}>
          <Button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={styles.prevButton}
          >
            Previous
          </Button>
          <span>
            {currentPage + 1} / {pageCount}
          </span>
          <Button
            onClick={nextPage}
            disabled={currentPage >= pageCount - 1}
            className={styles.nextButton}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default TradeHistoryTable;
