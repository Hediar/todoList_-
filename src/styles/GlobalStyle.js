import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    font-size: ${(props) => props.theme.fontSize};
}
`;
