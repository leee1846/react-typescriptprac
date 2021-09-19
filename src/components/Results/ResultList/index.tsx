import React, { useEffect, useState } from 'react';
import { ResultListType } from '../../../types/resultTypes';
import ResultSubTitle from '../ResultSubTitle';
import * as S from './style';
import ResultItem from '../ResultItem';

interface Props {
  resultList: ResultListType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
  searchValue: string;
  setBasket: React.Dispatch<React.SetStateAction<ResultListType | []>>;
}
const ResultList = ({
  resultList,
  setClickedResultItem,
  searchValue,
  setBasket,
}: Props) => {
  const [filteredList, setFilteredList] = useState(resultList);

  // list 순서를 컨트롤하기위하여 useState에 저장 (ex. 오름차순)
  useEffect(() => {
    setFilteredList(resultList);
  }, [resultList]);

  const listBySearchValue = () => {
    const listAfterSearch = filteredList.filter((resultItem) =>
      resultItem.name.toLowerCase().includes(searchValue),
    );
    if (!listAfterSearch[0]) {
      return [];
    }
    return listAfterSearch;
  };

  return (
    <S.Container>
      <ResultSubTitle setFilteredList={setFilteredList} />
      <ul>
        {!searchValue &&
          filteredList.map((resultItem, index) => (
            <li key={`result-${index + 1}`}>
              <ResultItem
                resultItem={resultItem}
                setClickedResultItem={setClickedResultItem}
                setBasket={setBasket}
              />
            </li>
          ))}
        {listBySearchValue()[0] ? (
          listBySearchValue().map((item, index) => (
            <li key={`result-${index + 1}`}>
              <ResultItem
                resultItem={item}
                setClickedResultItem={setClickedResultItem}
                setBasket={setBasket}
              />
            </li>
          ))
        ) : (
          <S.NoContents>검색된 아이템이 없습니다.</S.NoContents>
        )}
      </ul>
    </S.Container>
  );
};

export default ResultList;
