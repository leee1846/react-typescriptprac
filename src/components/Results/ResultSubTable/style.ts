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

export const SubItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;

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
