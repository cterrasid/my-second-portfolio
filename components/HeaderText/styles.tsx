import css from "styled-jsx/css";
import { fonts, colors } from "../../styles/theme";

export default css`
section {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  width: 70%;
  padding: 30px 40px 0 0;
}

h1 {
  margin: 0;
  font-size: 30px;
}

h2 {
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  width: 70px;
}

h3 {
  margin: 0;
  font-family: ${fonts.secondary};
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: normal;
  align-self: flex-end;
  cursor: pointer;
  animation: vibrate 100ms infinite linear;
}

h3::before {
  animation: luminance 500ms infinite linear;
  width: 100%;
  content: "y si no te gusta...";
  color: transparent;
  text-shadow: 0 0 5px rgba(224, 224, 224, 0.1);
  position: absolute;
  left: 0;
  top: 0;
}

@keyframes vibrate {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes luminance {
  from {
    color: #d1cfcf;
  }
  to {
    color: #bdbbbb;
  }
}

@media all and (min-width: 768px) {
  section {
    padding-top: 0;
    width: 60%;
    position: absolute;
    right: 0;
    bottom: 40px;
  }

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 15px;
    align-self: flex-start;
    width: unset;
  }

  h3 {
    font-size: 18px;
  }
}

@media all and (min-width: 1024px) {
  section {
    bottom: 30%;
    max-width: 615px;
  }

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 18px;
  }
}
`;
