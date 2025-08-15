import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
`;

function NavBar() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/dashboard">Dashboard</StyledLink>
    </Nav>
  );
}

export default NavBar;
