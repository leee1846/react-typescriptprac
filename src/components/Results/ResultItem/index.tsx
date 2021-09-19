import React from 'react';
import * as S from './style';
import { ResultItemObjType } from '../../../types/resultTypes';

interface Props {
  resultItem: ResultItemObjType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
}
const ResultItem = ({ resultItem, setClickedResultItem }: Props) => {
  const onNameClick = (item: ResultItemObjType) => {
    const { name, foxtrot, golf } = item;
    const currentItem = { name, foxtrot, golf };
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
          {resultItem.name}
        </S.NameBtn>
      </div>
      <p>{resultItem.foxtrot.toFixed(5)}</p>
      <p>{resultItem.golf.toFixed(5)}</p>
    </S.ListBox>
  );
};

export default ResultItem;
