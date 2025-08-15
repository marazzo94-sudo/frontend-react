import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Bar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 1000;
`;

const StatContainer = styled.div`
  display: flex;
`;

const StatBadge = styled.div`
  background: #f0f0f0;
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const Actions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

function TopBar({ stats = [], user, theme, toggleTheme }) {
  return (
    <Bar>
      <StatContainer>
        {stats.map((stat) => (
          <StatBadge key={stat.label}>
            <strong>{stat.label}:</strong> {stat.value}
          </StatBadge>
        ))}
      </StatContainer>
      <Actions>
        {theme && toggleTheme && (
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        )}
        {user && (
          <UserArea>
            {user.avatar && <Avatar src={user.avatar} alt="user avatar" />}
            {user.name && <span>{user.name}</span>}
          </UserArea>
        )}
      </Actions>
    </Bar>
  );
}

export default TopBar;

