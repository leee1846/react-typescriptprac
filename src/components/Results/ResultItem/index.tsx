import React from 'react';
import * as S from './style';
import { ResultItemType } from '../../../types/resultTypes';

interface Props {
  resultItem: ResultItemType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
}
const ResultItem = ({ resultItem, setClickedResultItem }: Props) => {
  const onNameClick = (item: ResultItemType) => {
    const currentItem = { name: item[0], foxtrot: item[1], golf: item[2] };
    setClickedResultItem((prev) =>
      prev.name === currentItem.name
        ? { name: '', foxtrot: 0, golf: 0 }
        : currentItem,
    );
  };

  return (
    <S.ListBox>
      <div>
        <S.NameBtn type="button" onClick={() => onNameClick(resultItem)}>
          {resultItem[0]}
        </S.NameBtn>
      </div>
      <p>{resultItem[1].toFixed(5)}</p>
      <p>{resultItem[2].toFixed(5)}</p>
    </S.ListBox>
  );
};

export default ResultItem;
