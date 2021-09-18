import styled from 'styled-components';

export const Nav = styled.nav`
  width: 1336px;
  height: 78px;
  margin: 0 auto;
  padding: 24px 30px 14px;
  background: #fcfefe;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  height: 100%;
  width: 110px;
  margin-right: 20px;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
`;
