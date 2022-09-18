import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Img/logo.png';
import * as S from './style.js';
const Header = () => {
  return (
    <>
      <S.Navigation>
        <Link to="/">
          <S.LogoImg src={Logo} alt="" srcset="" />
        </Link>

        <S.ContainerLista>
          <S.List>
            <Link to="/">Home</Link>
          </S.List>
          <S.List>
            <Link to="/Caracters">Caracters</Link>
          </S.List>
        </S.ContainerLista>
      </S.Navigation>
    </>
  );
};
export default Header;
