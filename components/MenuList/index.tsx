import { Fragment } from "react";
import styles from "./styles";
export default function MenuList() {
  const items = ["Inicio", "Sobre mi", "Competencias", "Proyectos"];

  return (
    <Fragment>
      <nav>
        {items.map(item =>
          <a key={item}>
            {item}
          </a>
        )}
      </nav>
      <style jsx>{styles}</style>
    </Fragment>
  );
}
