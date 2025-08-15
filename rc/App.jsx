import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #121212;
  color: #fff;
`;

function App() {
  return (
    <Container>
      <h1>Crypto Dashboard Starter</h1>
    </Container>
  );
}

export default App;
