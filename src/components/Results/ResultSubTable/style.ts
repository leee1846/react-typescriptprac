import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 48px;
`;

export const Header = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  padding-bottom: 18px;

  & > li {
    width: 278px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato Bold';
    font-size: 24px;
    color: gray;
  }
`;

export const CheckBox = styled.div`
  margin: 10px 0;

  & > button {
    border: 1px solid;
    padding: 3px 5px;
    font-size: 14px;
    transition: 0.2s;
  }
  & > button:first-child {
    margin-right: 12px;
    border-color: #7879f1;
    color: #7879f1;

    &:hover {
      box-shadow: 4px 4px 5px #e3daff;
    }
  }
  & > button:last-child {
    border-color: #ff0000;
    color: #ff0000;

    &:hover {
      box-shadow: 4px 4px 5px #ffedda;
    }
  }
`;

interface SubItemBtnProps {
  isClicked: boolean;
}
export const SubItemBtn = styled.button<SubItemBtnProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  width: 100%;
  background-color: ${({ isClicked }) => isClicked && 'aliceblue'};
  transition: 0.1s;

  &:hover {
    box-shadow: 0px 0px 5px 1px lightgray;
  }
  & > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 278px;
    height: 41px;
    font-family: 'Lato Light';
    font-size: 22px;
  }
`;
