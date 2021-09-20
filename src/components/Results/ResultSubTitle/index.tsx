import React from 'react';
import { ResultListType } from '../../../types/resultTypes';
import {
  sortAscendingResult,
  sortDescendingResult,
} from '../../../utils/result';
import * as S from './style';

interface Props {
  setFilteredList: React.Dispatch<React.SetStateAction<ResultListType>>;
}
const ResultSubTitle = ({ setFilteredList }: Props) => {
  const setOrder = (order: string) => {
    if (order === 'foxtrot-up') {
      setFilteredList(
        (prevList): ResultListType => sortAscendingResult(prevList, 1),
      );
    } else if (order === 'foxtrot-down') {
      setFilteredList(
        (prevList): ResultListType => sortDescendingResult(prevList, 1),
      );
    } else if (order === 'golf-up') {
      setFilteredList(
        (prevList): ResultListType => sortAscendingResult(prevList, 2),
      );
    } else if (order === 'golf-down') {
      setFilteredList(
        (prevList): ResultListType => sortDescendingResult(prevList, 2),
      );
    }
  };

  return (
    <S.TitleBox>
      <S.Title>
        <h2>Name</h2>
      </S.Title>
      <S.Title>
        <h2>Foxtrot</h2>
        <S.ButtonBox>
          <input type="button" onClick={() => setOrder('foxtrot-up')} />
          <input type="button" onClick={() => setOrder('foxtrot-down')} />
        </S.ButtonBox>
      </S.Title>
      <S.Title>
        <h2>Golf </h2>
        <S.ButtonBox>
          <input type="button" onClick={() => setOrder('golf-up')} />
          <input type="button" onClick={() => setOrder('golf-down')} />
        </S.ButtonBox>
      </S.Title>
    </S.TitleBox>
  );
};

export default ResultSubTitle;
