import css from "styled-jsx/css";

const items = ["Inicio", "Sobre mi", "Competencias", "Proyectos"];

export default css`
nav {
  display: grid;
  grid-template-rows: repeat(${items.length}, 1fr);
  position: absolute;
  top: 35%;
  right: 13%;
  height: 35%;
  margin: 0;
  transform: scale(0);
  z-index: 2;
}

a {
  display: flex;
  flex-direction: row-reverse;
  place-items: center;
  text-transform: uppercase;
  font-size: 8px;
}
`;
