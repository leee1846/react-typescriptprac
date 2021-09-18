import React from 'react';
import Navigation from '../Navigation';
import * as S from './style';
// images
import logo from '../../../assets/images/logo.svg';

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <img src={logo} alt="logo" />
      </S.LogoContainer>
      <Navigation />
    </S.Header>
  );
};

export default Header;
