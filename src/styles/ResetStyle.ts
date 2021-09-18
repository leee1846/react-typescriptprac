import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyle = createGlobalStyle`
  ${reset};
  
  * {
    box-sizing: border-box;
  }
  a,button {
    cursor: pointer;
  }
  input,button {
    background-color:transparent;
    border: none;
    outline: none;
  }
`;

export default ResetStyle;
