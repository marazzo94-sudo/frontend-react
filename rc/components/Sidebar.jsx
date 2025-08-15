import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.aside`
  width: 200px;
  background: #f8f9fa;
  padding: 1rem;
  border-right: 1px solid #ddd;
  height: 100vh;
`;

const Item = styled(Link)`
  display: block;
  color: #333;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Sidebar({ items = [] }) {
  return (
    <Container data-testid="sidebar">
      {items.map((item) => (
        <Item key={item.to || item.label} to={item.to}>
          {item.label}
        </Item>
      ))}
    </Container>
  );
}

export default Sidebar;
