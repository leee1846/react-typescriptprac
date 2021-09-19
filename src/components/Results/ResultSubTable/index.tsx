import React, { useEffect, useState } from 'react';
import ResultItem from '../ResultItem';
import * as S from './style';
import {
  ResultItemObjType,
  ResultItemType,
  ResultSubType,
} from '../../../types/resultTypes';

interface Props {
  clickedResultItem: ResultItemObjType;
  setClickedResultItem: React.Dispatch<
    React.SetStateAction<{ name: string; foxtrot: number; golf: number }>
  >;
  resultSubList: ResultSubType;
}
const ResultSubTable = ({
  clickedResultItem,
  setClickedResultItem,
  resultSubList,
}: Props) => {
  const { name, foxtrot, golf } = clickedResultItem;
  const resultItem = [name, foxtrot, golf] as ResultItemType;

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
      />
      <ul>
        {resultSubList.map((item) => (
          <S.SubItem key={item[0]}>
            <p>{item[0]}</p>
            <p>{item[1]}</p>
            <p>{item[2]}</p>
          </S.SubItem>
        ))}
      </ul>
    </S.Container>
  );
};

export default ResultSubTable;
