import React from 'react';
import * as S from './style';
import ResultSubTitle from '../ResultSubTitle';

interface Props {
  resultList: [string, number, number][] | undefined;
}
const ResultList = ({ resultList }: Props) => {
  return (
    <S.Container>
      <ResultSubTitle />
      <ul>
        {resultList &&
          resultList.map((resultItem, index) => (
            <S.ListBox key={`result-${index + 1}`}>
              <div>
                <S.NameBtn type="button">{resultItem[0]}</S.NameBtn>
              </div>
              <p>{resultItem[1]}</p>
              <p>{resultItem[2]}</p>
            </S.ListBox>
          ))}
      </ul>
    </S.Container>
  );
};

export default ResultList;
