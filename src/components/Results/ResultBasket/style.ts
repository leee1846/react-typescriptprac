import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid gray;
  padding: 10px 10px;

  & > p {
    font-family: 'Lato Bold';
    font-size: 24px;
  }
  & > button {
    padding: 5px 8px;
    border: 1px solid black;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      box-shadow: 4px 4px 5px lightgray;
    }
  }
`;

export const BasketItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  padding: 12px 0;

  & > p {
    width: 276px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > button {
    position: absolute;
    right: 0;
    padding: 3px 5px;
    border: 1px solid crimson;
    font-size: 14px;
    color: crimson;
    transition: 0.2s;

    &:hover {
      box-shadow: 4px 4px 5px rgba(255, 202, 202, 1);
    }
  }
`;
