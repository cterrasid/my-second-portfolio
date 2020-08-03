import Tag from "../Tag";
import styles from "./styles";

export default function HeaderText() {
  const handleClick = () => {
    console.log("cambiar");
  };

  return (
    <section>
      <Tag name="h2">
        <h2>¡Hola!, soy Clarette Terrasi Díaz,</h2>
      </Tag>
      <Tag name="h1">
        <h1>Frontend Developer</h1>
      </Tag>
      <Tag name="h3">
        <h3 onClick={handleClick}>y si no te gusta...</h3>
      </Tag>

      <style jsx>{styles}</style>
    </section>
  );
}
