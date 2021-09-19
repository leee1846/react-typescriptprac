import React, { useState } from 'react';
import * as S from './style';
import TitleText from '../../Commons/TitleText';

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const ResultForm = ({ setSearchValue }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue(inputValue.toLowerCase());
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  return (
    <S.Container>
      <TitleText>Result</TitleText>
      <S.Form onSubmit={(e) => onSubmit(e)}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">search</button>
        <button type="button">download</button>
      </S.Form>
    </S.Container>
  );
};

export default ResultForm;
