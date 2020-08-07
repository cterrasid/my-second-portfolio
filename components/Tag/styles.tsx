import css from 'styled-jsx/css'
import { fonts, colors, breakpoints } from '../../styles/theme'

export default css`
  section {
    display: grid;
    grid-template-areas: 'open content close';

    &:nth-child(2) {
      grid-area: 'content';
    }

    &:last-child {
      @media all and (min-width: ${breakpoints.tablet}) {
        align-self: flex-end;
        margin-right: 15px;
      }
    }
  }

  span {
    color: ${colors.beige};
    font-family: ${fonts.secondary};
    font-size: 12px;

    &:first-child {
      grid-area: 'open';
      align-self: flex-start;
      margin-right: 5px;
    }

    &:last-child {
      grid-area: 'close';
      align-self: flex-end;
      margin-left: 5px;
    }

    @media all and (min-width: ${breakpoints.desktop}) {
      font-size: 18px;
    }
  }
`
