import React, { useEffect, useState } from 'react';
import ResultItem from '../ResultItem';
import * as S from './style';
import {
  ResultItemObjType,
  ResultListType,
  ResultSubType,
} from '../../../types/resultTypes';

interface Props {
  clickedResultItem: ResultItemObjType;
  setClickedResultItem: React.Dispatch<React.SetStateAction<ResultItemObjType>>;
  resultSubList: ResultSubType;
  setBasket: React.Dispatch<React.SetStateAction<ResultListType | []>>;
}
const ResultSubTable = ({
  clickedResultItem,
  setClickedResultItem,
  resultSubList,
  setBasket,
}: Props) => {
  const [clickedSubItem, setClickedSubItem] = useState<number[]>([]);
  const { name, foxtrot, golf } = clickedResultItem;
  const resultItem = { name, foxtrot, golf };

  const onSubItemClick = (id: number) => {
    setClickedSubItem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevItem) => prevItem !== id);
      }
      return [...prev, id];
    });
  };

  useEffect(() => {
    setClickedSubItem([]);
  }, [clickedResultItem]);

  return (
    <S.Container>
      <S.Header>
        <li>Name</li>
        <li>Foxtrot</li>
        <li>Golf</li>
      </S.Header>
      <ResultItem
        resultItem={resultItem}
        setClickedResultItem={setClickedResultItem}
        setBasket={setBasket}
      />

      <ul>
        {resultSubList.map((item) => (
          <li key={item.id}>
            <S.SubItemBtn
              type="button"
              onClick={() => onSubItemClick(item.id)}
              isClicked={clickedSubItem.includes(item.id)}
            >
              <p>{item.id}</p>
              <p>{item.foxtrot.toFixed(5)}</p>
              <p>{item.golf.toFixed(5)}</p>
            </S.SubItemBtn>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default ResultSubTable;
