import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Navigation = () => {
  return (
    <S.Nav>
      <S.Ul>
        <S.Li>
          <Link to="/alpha">Alpha</Link>
        </S.Li>
        <S.Li>
          <Link to="/bravo">Bravo</Link>
        </S.Li>
        <S.Li>
          <Link to="/charlie">Charlie</Link>
        </S.Li>
        <S.Li>
          <Link to="/delta">Delta</Link>
        </S.Li>
        <S.Li>
          <Link to="/echo">Echo</Link>
        </S.Li>
        <S.Li>
          <Link to="/result">Result</Link>
        </S.Li>
      </S.Ul>
    </S.Nav>
  );
};

export default Navigation;
