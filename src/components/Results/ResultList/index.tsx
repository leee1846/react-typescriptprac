import React, { useEffect, useState } from 'react';
import {
  ResultItemObjType,
  ResultItemType,
  ResultListType,
} from '../../../types/resultTypes';
import ResultSubTitle from '../ResultSubTitle';
import * as S from './style';
import ResultItem from '../ResultItem';

interface Props {
  resultList: ResultListType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
}
const ResultList = ({ resultList, setClickedResultItem }: Props) => {
  const [filteredList, setFilteredList] = useState(resultList);

  // list 순서를 컨트롤하기위하여 useState에 저장 (ex. 오름차순)
  useEffect(() => {
    setFilteredList(resultList);
  }, [resultList]);

  return (
    <S.Container>
      <ResultSubTitle setFilteredList={setFilteredList} />
      <ul>
        {filteredList.map((resultItem, index) => (
          <li key={`result-${index + 1}`}>
            <ResultItem
              resultItem={resultItem}
              setClickedResultItem={setClickedResultItem}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ResultList;
