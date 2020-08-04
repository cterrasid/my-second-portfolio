import css from "styled-jsx/css";
import { colors } from "../../styles/theme";

export default css`
  section {
    position: absolute;
    right: 10%;
    bottom: 65%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    z-index: 2;
  }

  span {
    position: relative;
    background-color: ${colors.blackPure};
    border-radius: 50%;
    animation: wave 4s linear infinite;
    height: 4px;
    width: 4px;
    transition: transform 1s ease-out, height 1s, width 1s;
  }

  span:after,
  span:before {
    position: absolute;
    content: "";
    background-color: ${colors.blackPure};
    border-radius: 50%;
    height: 4px;
    width: 4px;
    animation: wave 4s linear infinite;
    transition: transform 1s ease-out, height 1s, width .1s;
  }

  span:after {
    left: 8px;
    animation-delay: 3s;
  }

  span:before {
    right: 8px;
    animation-delay: 2s;
  }

  section:hover {
    span {
      animation-duration: 0s;
      width: 40%;
      height: 40%;

      &:after,
      &:before {
        animation-duration: 0s;
        width: 0%;
        height: 0%;
      }

      &:after {
        transform: translate(-8px, initial);
      }

      &:before {
        transform: translate(8px, initial);
      }
    }
  }

  @keyframes wave {
    0%,
    60%,
    100% {
      transform: initial;
    }
    30% {
      transform: translateY(-2px);
    }
  }
`;
