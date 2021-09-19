import React, { useState } from 'react';
import { ResultListType } from '../../../types/resultTypes';
import * as S from './style';

interface Props {
  basketList: ResultListType;
  setBasket: React.Dispatch<React.SetStateAction<ResultListType>>;
}
const ResultBasket = ({ basketList, setBasket }: Props) => {
  const [basketOn, setBasketOn] = useState(true);

  const onDelete = (name: string) => {
    setBasket((prev) => prev.filter((prevItem) => prevItem.name !== name));
  };

  return (
    <div>
      <S.Title>
        <p>basket</p>
        <button type="button" onClick={() => setBasketOn((prev) => !prev)}>
          {basketOn ? `close` : `open`}
        </button>
      </S.Title>
      {basketOn && (
        <ul>
          {basketList.map((item) => (
            <S.BasketItem key={item.name}>
              <p>{item.name}</p>
              <p>{item.foxtrot.toFixed(5)}</p>
              <p>{item.golf.toFixed(5)}</p>
              <button type="button" onClick={() => onDelete(item.name)}>
                delete
              </button>
            </S.BasketItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultBasket;
