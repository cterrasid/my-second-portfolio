import css from "styled-jsx/css";
import { fonts } from "../../styles/theme";

export const globalStyles = css.global`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${fonts.base};
    }

    * {
      box-sizing: border-box;
    }
`;
