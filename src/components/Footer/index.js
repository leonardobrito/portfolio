import React from 'react';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <p>
      © Copyright Élida Maria &nbsp;
      {new Date().getFullYear()}
    </p>
    <span role="img" aria-label="Design e desenvolvimento">
      - 👨‍💻&nbsp;
    </span>
    <p>
      <a
        title="Design e desenvolvimento"
        rel="noopener noreferrer"
        href="https://github.com/leonardobrito"
        target="_blank"
      >
        Leonardo Brito
      </a>
    </p>
  </Container>
);

export default Footer;
