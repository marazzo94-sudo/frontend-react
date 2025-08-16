import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.aside`
  width: 220px;
  background: var(--color-surface);
  color: var(--color-text);
  height: 100vh;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-border);

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? '0' : '-220px')};
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`;

const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--color-text);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 0 1rem 1rem 0;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: var(--color-border);
    color: var(--color-primary);
  }

  &.active {
    background: var(--color-border);
    color: var(--color-primary);
  }
`;

const defaultItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'News', to: '/news' },
  { label: 'Market', to: '/market' },
    { label: 'AI Signals', to: '/signals' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Settings', to: '/settings' },
];

function Sidebar({ items = defaultItems, open }) {
  return (
    <Container data-testid="sidebar" open={open} data-open={open}>
      <Title>SIGNALS</Title>
      {items.map((item) => (
        <Item key={item.to} to={item.to}>
          {item.label}
        </Item>
      ))}
    </Container>
  );
}

export default Sidebar;
