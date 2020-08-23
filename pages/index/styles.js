import css from 'styled-jsx/css'
import { colors } from 'styles/theme'

export default css`
  main {
    align-items: center;
    background: linear-gradient(
      45deg,
      ${colors.beigeDarkGrey} 0%,
      ${colors.beigeGrey} 0%,
      ${colors.beige} 18%
    );
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-end;
    padding: 50px 50px 0 0;
    width: 100%;
    z-index: 0;
  }

  @media all and (min-width: 768px) {
    main {
      flex-direction: row-reverse;
    }
  }
`
