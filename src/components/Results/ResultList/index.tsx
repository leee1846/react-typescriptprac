import React, { useEffect, useState } from 'react';
import * as S from './style';
import ResultSubTitle from '../ResultSubTitle';
import { ResultListType } from '../../../types/resultTypes';

interface Props {
  resultList: ResultListType;
}
const ResultList = ({ resultList }: Props) => {
  const [filteredList, setFilteredList] = useState(resultList);

  useEffect(() => {
    setFilteredList(resultList);
  }, [resultList]);

  return (
    <S.Container>
      <ResultSubTitle setFilteredList={setFilteredList} />
      <ul>
        {filteredList.map((resultItem, index) => (
          <S.ListBox key={`result-${index + 1}`}>
            <div>
              <S.NameBtn type="button">{resultItem[0]}</S.NameBtn>
            </div>
            <p>{resultItem[1].toFixed(5)}</p>
            <p>{resultItem[2].toFixed(5)}</p>
          </S.ListBox>
        ))}
      </ul>
    </S.Container>
  );
};

export default ResultList;
