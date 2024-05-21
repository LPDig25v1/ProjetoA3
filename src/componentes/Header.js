import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-start" style={{ gap: '10em', marginLeft: '5%' }}>
      <div id="logo">
        <h1>ShowSpot</h1>
      </div>
      <nav id="menu" className="d-flex align-items-center justify-content-end" style={{ gap: '7em', marginRight: '7%', width: '100%' }}>
        <Link to="/" className="menu-item font-weight-bold">Eventos</Link>
        <Link to="/meus-pedidos" className="menu-item">Meus Pedidos</Link>
        <Link to="/carrinho" className="menu-item">Carrinho</Link>
        <span className="menu-item">Meus Dados</span>
      </nav>
    </header>
  );
};

export default Header;
