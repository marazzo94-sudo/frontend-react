import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Button from './Button';

const TableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  cursor: pointer;
  padding: 0.5rem;
  text-align: left;
  background: #f0f0f0;
  position: sticky;
  top: 0;
`;

const Td = styled.td`
  padding: 0.5rem;
  border-top: 1px solid #ddd;
`;

function TradeHistoryTable({ trades = [] }) {
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const sortedTrades = useMemo(() => {
    const sortable = [...trades];
    sortable.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sortable;
  }, [trades, sortConfig]);

  const pageCount = Math.ceil(sortedTrades.length / pageSize);
  const paginatedTrades = sortedTrades.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const requestSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const nextPage = () => setCurrentPage(p => Math.min(p + 1, pageCount - 1));
  const prevPage = () => setCurrentPage(p => Math.max(p - 1, 0));

  return (
    <div>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <Th onClick={() => requestSort('pair')}>Pair</Th>
              <Th onClick={() => requestSort('price')}>Price</Th>
              <Th onClick={() => requestSort('amount')}>Amount</Th>
              <Th onClick={() => requestSort('action')}>Action</Th>
              <Th onClick={() => requestSort('date')}>Date</Th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrades.map((trade, idx) => (
              <tr key={idx}>
                <Td>{trade.pair}</Td>
                <Td>{trade.price}</Td>
                <Td>{trade.amount}</Td>
                <Td>{trade.action}</Td>
                <Td>{new Date(trade.date).toLocaleString()}</Td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
      {pageCount > 1 && (
        <div style={{ marginTop: '0.5rem' }}>
          <Button onClick={prevPage} disabled={currentPage === 0} style={{ marginRight: '0.5rem' }}>
            Previous
          </Button>
          <span>
            {currentPage + 1} / {pageCount}
          </span>
          <Button
            onClick={nextPage}
            disabled={currentPage >= pageCount - 1}
            style={{ marginLeft: '0.5rem' }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default TradeHistoryTable;

