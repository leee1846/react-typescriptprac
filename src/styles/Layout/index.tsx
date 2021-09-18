import React from 'react';
import * as S from './style';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
