import { css } from "@calpoly/mustang";

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    display: block;
  }
  ul,
  menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }
`;

export default { styles };
