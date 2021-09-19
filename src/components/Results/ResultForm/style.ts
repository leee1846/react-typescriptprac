import styled from 'styled-components';
import { LEVEL_TOP } from '../../../utils/zindex';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;
  border-bottom: 1px solid #0d9991;
  background-color: white;
  z-index: ${LEVEL_TOP};
`;

export const Form = styled.form`
  height: 55px;
  display: flex;
  align-items: center;

  & > input {
    height: 100%;
    width: 284px;
    border: 1px solid #7879f1;
    box-sizing: border-box;
  }
  & > button {
    height: 100%;
    padding: 0 11px;
    border: 1px solid #7879f1;
    font-family: 'Lato Bold';
    font-size: 24px;
    color: #7879f1;
  }
  & > button:last-child {
    margin-left: 26px;
  }
`;
