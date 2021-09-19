import styled from 'styled-components';
// icons
import arrowUp from '../../../assets/images/arrow-up.svg';
import arrowDown from '../../../assets/images/arrow-down.svg';

export const TitleBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 2px solid black;
`;

export const Title = styled.li`
  width: 278px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > h2 {
    line-height: 1px;
    font-size: 24px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 8px;

  & > input {
    width: 13px;
    height: 14px;
    cursor: pointer;
  }
  & > input:first-child {
    background: url(${arrowUp}) no-repeat center;
  }
  & > input:last-child {
    background: url(${arrowDown}) no-repeat center;
  }
`;
