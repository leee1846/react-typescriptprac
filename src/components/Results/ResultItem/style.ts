import styled from 'styled-components';

export const ListBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  & > div,
  p {
    width: 278px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato Bold';
    font-size: 24px;
  }
`;

export const NameBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid #0d9991;
  font-family: 'Lato Bold';
  font-size: 24px;
  color: #0d9991;
  transition: 0.2s;

  &:hover {
    box-shadow: 4px 4px 5px rgba(189, 235, 193, 1);
  }
`;

export const AddBtn = styled.button`
  position: absolute;
  right: 0;
  color: crimson;
  border: 1px solid crimson;
  padding: 3px 5px;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    box-shadow: 4px 4px 5px rgba(255, 202, 202, 1);
  }
`;
