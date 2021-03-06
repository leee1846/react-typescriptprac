import React from 'react';
import * as S from './style';
import { ResultItemObjType, ResultListType } from '../../../types/resultTypes';

interface Props {
  resultItem: ResultItemObjType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
  setBasket: React.Dispatch<React.SetStateAction<ResultListType | []>>;
}
const ResultItem = ({ resultItem, setClickedResultItem, setBasket }: Props) => {
  const onNameClick = (item: ResultItemObjType) => {
    const { name, foxtrot, golf } = item;
    const currentItem = { name, foxtrot, golf };
    setClickedResultItem((prev) => currentItem);
    window.scrollTo({ left: 0, top: 233, behavior: 'smooth' });
  };

  const onAddClick = (currentItem: ResultItemObjType) => {
    setBasket((prev) => {
      if (prev.some((prevItem) => prevItem.name === currentItem.name)) {
        alert('이미 추가되었습니다.');
        return prev;
      }
      return [...prev, currentItem];
    });
  };

  return (
    <S.ListBox>
      <div>
        <S.NameBtn type="button" onClick={() => onNameClick(resultItem)}>
          {resultItem.name}
        </S.NameBtn>
      </div>
      <p>{resultItem.foxtrot.toFixed(5)}</p>
      <p>{resultItem.golf.toFixed(5)}</p>
      <S.AddBtn type="button" onClick={() => onAddClick(resultItem)}>
        add
      </S.AddBtn>
    </S.ListBox>
  );
};

export default ResultItem;
