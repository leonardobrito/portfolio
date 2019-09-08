import React from 'react';

import { Container, Nav } from './styles';

const Header = () => (
  <Container>
    <Nav>
      <a href="/">Início</a>
      <a href="/about">Sobre</a>
      <a href="/contact">Contato</a>
    </Nav>
    <h2>Élida Maria</h2>
  </Container>
);

export default Header;
