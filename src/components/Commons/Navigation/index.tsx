import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationList = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Bravo' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Delta' },
    { id: 5, name: 'Echo' },
    { id: 6, name: 'Result' },
  ];

  return (
    <S.Nav>
      <S.Ul>
        {navigationList.map((navItem) => (
          <S.Li
            key={navItem.id}
            isClicked={currentPath.includes(navItem.name.toLowerCase())}
          >
            <Link to={`/${navItem.name.toLowerCase()}`}>{navItem.name}</Link>
          </S.Li>
        ))}
      </S.Ul>
    </S.Nav>
  );
};

export default Navigation;
