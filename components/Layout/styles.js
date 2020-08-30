import css from 'styled-jsx/css'
import { fonts, colors } from '../../styles/theme'

export const globalStyles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    background: ${colors.beige};
  }

  * {
    box-sizing: border-box;
  }

  div.page-wrapper {
    margin: 0 25px;
    height: 100%;
    width: 100%;
  }
`
