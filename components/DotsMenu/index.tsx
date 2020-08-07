import { Fragment, useState, useEffect } from "react";
import styles from "./styles";
import MenuList from "../MenuList";

export default function DotsMenu() {
  const [isHover, setIsHover] = useState(false);
  const [show, setShow] = useState(false);
  const [growUp, setGrowUp] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  const onMouseMove = () => {
    setIsHover(true);
  };

  return (
    <Fragment>
      <section onClick={onClick}>
        <span onMouseMove={onMouseMove} />
      </section>
      {show ? <MenuList /> : false}
      <style jsx>
        {styles}
      </style>
    </Fragment>
  );
}
