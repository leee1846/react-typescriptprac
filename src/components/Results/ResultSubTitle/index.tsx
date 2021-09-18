import React from 'react';
import * as S from './style';

const ResultSubTitle = () => {
  return (
    <S.TitleBox>
      <S.Title>
        <h2>Name</h2>
      </S.Title>
      <S.Title>
        <h2>Foxtrot</h2>
        <S.ButtonBox>
          <input type="button" />
          <input type="button" />
        </S.ButtonBox>
      </S.Title>
      <S.Title>
        <h2>Golf </h2>
        <S.ButtonBox>
          <input type="button" />
          <input type="button" />
        </S.ButtonBox>
      </S.Title>
    </S.TitleBox>
  );
};

export default ResultSubTitle;
