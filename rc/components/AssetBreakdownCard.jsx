import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

const Chart = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

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
    <Card>
      <h3>Asset Breakdown</h3>
      {view === 'list' ? (
        <List>
          {assets.map((asset) => (
            <ListItem key={asset.symbol}>
              <span style={{ color: asset.color }}>{asset.symbol}</span>
              <span>{asset.percentage}%</span>
            </ListItem>
          ))}
        </List>
      ) : (
        <Chart style={{ background: `conic-gradient(${gradient})` }} />
      )}
    </Card>
  );
}

export default AssetBreakdownCard;

