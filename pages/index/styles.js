import css from 'styled-jsx/css'

export default css`
  main {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgb(120, 116, 110);
    background: linear-gradient(
      45deg,
      rgba(120, 116, 110, 1) 0%,
      rgba(187, 182, 175, 1) 0%,
      rgba(241, 235, 227, 1) 18%
    );
    padding: 50px 50px 0 0;
    z-index: 0;
  }

  @media all and (min-width: 768px) {
    main {
      flex-direction: row-reverse;
    }
  }
`
