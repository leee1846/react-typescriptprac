import React from 'react';
import * as S from './style';
import TitleText from '../../Commons/TitleText';

const ResultForm = () => {
  return (
    <S.Container>
      <TitleText>Result</TitleText>
      <S.Form>
        <input type="text" />
        <button type="submit">search</button>
        <button type="button">download</button>
      </S.Form>
    </S.Container>
  );
};

export default ResultForm;
