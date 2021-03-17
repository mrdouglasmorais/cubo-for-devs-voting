import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  const today = new Date()
  const year = today.getFullYear();
  return (
      <footer>
          <p>Cubo for Devs { year } | Gama Academy</p>
      </footer>
  );
}

export default Footer;