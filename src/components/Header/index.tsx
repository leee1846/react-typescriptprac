import React from 'react';
import Navigation from '../Navigation';
import * as S from './style';
// images
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <S.Header>
        <img src={logo} alt="logo" />
      </S.Header>
      <Navigation />
    </header>
  );
};

export default Header;
