import React from 'react';
import * as S from './style';

interface Props {
  children: React.ReactNode;
}
const TitleText = ({ children }: Props) => {
  return <S.Title>{children}</S.Title>;
};

export default TitleText;
