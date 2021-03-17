import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png';
import { HeaderContent } from './style'

interface IHeaderProps{
  total: number;
}

const Nav: React.FC<IHeaderProps> = ( { total } ) => {
  return (
      <>
      <HeaderContent>
        <div className="content-top">
          <Link to="/">
            <img src={Logo} alt="Cubo for Devs"/>
          </Link>
          <div className="text-content">
            <h1>Qual seu framework favorito?</h1>
            <h2>Vote agora mesmo!</h2>
            <h2>Total de votos ate o momento: { total }</h2>
          </div>
        </div>


      </HeaderContent>
      </>
  );
}

export default Nav;