import css from 'styled-jsx/css'
import { fonts, colors, breakpoints } from '../../styles/theme'

export default css`
  section {
    display: grid;
    grid-template-areas: 'open content close';
  }

  section:nth-child(2) {
    grid-area: 'content';
  }

  span {
    color: ${colors.beige};
    font-family: ${fonts.secondary};
    font-size: 12px;
  }

  span:first-child {
    grid-area: 'open';
    align-self: flex-start;
    margin-right: 5px;
  }

  span:last-child {
    grid-area: 'close';
    align-self: flex-end;
    margin-left: 5px;
  }

  @media all and (min-width: ${breakpoints.tablet}) {
    section:last-child {
      align-self: flex-end;
      margin-right: 15px;
    }
  }

  @media all and (min-width: ${breakpoints.desktop}) {
    span {
      font-size: 18px;
    }
  }
`
